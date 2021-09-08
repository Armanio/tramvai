/**
 * Copied from https://github.com/unjs/webpackbar with some fixes for webpack 5
 */
import chalk from 'chalk';
import type { Reporter } from 'webpackbar';

import { renderBar, colorize, ellipsisLeft } from '../utils/cli';
import { formatRequest } from '../utils/webpack';
import { BULLET, TICK, CROSS, CIRCLE_OPEN } from '../utils/consts';
import LogUpdate from '../utils/log-update';

const logUpdate = new LogUpdate();

let lastRender = Date.now();

export default class FancyReporter implements Reporter {
  start() {
    logUpdate.start();
  }

  allDone(context) {
    this._renderStates(context.statesArray);
    logUpdate.done();
  }

  done(context) {
    this._renderStates(context.statesArray);
  }

  progress(context) {
    if (Date.now() - lastRender > 50) {
      this._renderStates(context.statesArray);
    }
  }

  _renderStates(statesArray) {
    lastRender = Date.now();

    const renderedStates = statesArray.map((c) => this._renderState(c)).join('\n\n');

    logUpdate.render(`\n${renderedStates}\n`);
  }

  _renderState(state) {
    const color = colorize(state.color);

    let line1;
    let line2;

    if (state.progress >= 0 && state.progress < 100) {
      // Running
      line1 = [
        color(BULLET),
        color(state.name),
        renderBar(state.progress, state.color),
        state.message,
        `(${state.progress || 0}%)`,
        chalk.grey(state.details[0] || ''),
        chalk.grey(state.details[1] || ''),
      ].join(' ');

      line2 = state.request
        ? ` ${chalk.grey(ellipsisLeft(formatRequest(state.request), logUpdate.columns))}`
        : '';
    } else {
      let icon = ' ';

      if (state.hasErrors) {
        icon = CROSS;
      } else if (state.progress === 100) {
        icon = TICK;
      } else if (state.progress === -1) {
        icon = CIRCLE_OPEN;
      }

      line1 = color(`${icon} ${state.name}`);
      line2 = chalk.grey(`  ${state.message}`);
    }

    return `${line1}\n${line2}`;
  }
}
