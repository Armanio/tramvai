import type { Request, Response, NextFunction } from 'express';
import onFinished from 'on-finished';
import { HttpError } from '@tinkoff/errors';
import type { IntervalHistogram } from 'perf_hooks';
import { monitorEventLoopDelay } from 'perf_hooks';
import { DoubleLinkedList } from './utils/doubleLinkedList';

const DEFAULT_OPTIONS = {
  limit: 10,
  queue: 100,
  maxEventLoopDelay: 150,
  error: { httpStatus: 429, message: 'Too Many Requests' },
};

export interface RequestLimiterOptions {
  limit?: number;
  queue?: number;
  maxEventLoopDelay?: number;
  error?: {
    httpStatus: number;
    message: string;
  };
}

export interface RequestLimiterRequest {
  req: Request;
  res: Response;
  next: NextFunction;
}

const resolution = 10;

export class RequestLimiter {
  private currentActive = 0;
  private eventLoopDelay = 0;
  private queue = new DoubleLinkedList<RequestLimiterRequest>();
  private activeRequestLimit: number;
  private queueLimit: number;
  private error: RequestLimiterOptions['error'];
  private minimalActiveRequestLimit: number;
  private maxEventLoopDelay: number;
  private eventLoopHistogram: IntervalHistogram;

  constructor(options: RequestLimiterOptions = DEFAULT_OPTIONS) {
    const {
      limit = DEFAULT_OPTIONS.limit,
      queue = DEFAULT_OPTIONS.queue,
      maxEventLoopDelay = DEFAULT_OPTIONS.maxEventLoopDelay,
      error = DEFAULT_OPTIONS.error,
    } = options;

    this.activeRequestLimit = limit;
    this.minimalActiveRequestLimit = Math.floor(limit / 2);
    this.queueLimit = queue;
    this.error = error;
    this.maxEventLoopDelay = maxEventLoopDelay;

    this.eventLoopHistogram = monitorEventLoopDelay({ resolution });
    this.eventLoopHistogram.enable();
    const timer = setInterval(() => this.nextTick(), 1000);
    timer.unref();
  }

  // General idea is change limits ever second. Because if DDOS was happened we need some time to get problem with event loop. And better if we slowly adapt
  private nextTick() {
    this.eventLoopDelay = Math.max(0, this.eventLoopHistogram.mean / 1e6 - resolution);
    if (Number.isNaN(this.eventLoopDelay)) this.eventLoopDelay = Infinity;
    this.eventLoopHistogram.reset();

    if (
      this.currentActive >= this.activeRequestLimit &&
      this.activeRequestLimit > this.minimalActiveRequestLimit
    ) {
      if (this.eventLoopDelay <= this.maxEventLoopDelay) {
        this.activeRequestLimit++;
      } else {
        this.activeRequestLimit--;
      }
    }
  }

  add(request: RequestLimiterRequest) {
    if (this.currentActive < this.activeRequestLimit) {
      this.run(request);
      return;
    }

    if (this.queue.length >= this.queueLimit) {
      const lastNode = this.queue.shift();
      lastNode.next(new HttpError(this.error));
    }
    this.queue.push(request);
  }

  private loop() {
    while (this.queue.length > 0 && this.currentActive < this.activeRequestLimit) {
      // better if we start with new requests. Because more opportunity to answer before client cancel request
      this.run(this.queue.pop());
    }
  }

  private run({ req, res, next }: RequestLimiterRequest) {
    this.currentActive++;

    // onFinished doesn't work OK in DEV mode. Just stuck with high load without any reasons
    onFinished(res, () => {
      this.currentActive--;
      this.loop();
    });

    next();
  }
}
