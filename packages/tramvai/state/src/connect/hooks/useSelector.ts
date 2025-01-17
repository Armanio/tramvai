import shallowEqual from '@tinkoff/utils/is/shallowEqual';
import { useReducer, useRef, useMemo } from 'react';
import { useShallowEqual } from '@tinkoff/react-hooks';
import invariant from 'invariant';
import toArray from '@tinkoff/utils/array/toArray';
import { useConsumerContext } from './useConsumerContext';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { Subscription } from '../Subscription';
import type { Reducer } from '../../createReducer/createReducer.h';
import { scheduling } from '../scheduling';
import type { BaseStoreConstructor } from '../../stores/BaseStore';

export type ArrayKeys = keyof any[];
// Индексы элементов массива
export type Indices<T> = Exclude<keyof T, ArrayKeys>;

type Selector<T> = (state: Record<string, any>) => T;

type OptionalStoreType<S extends any = any, N extends string = string> = {
  store: Reducer<S, N> | string;
  optional: true;
};

type StoreType<S extends any = any, N extends string = string> =
  | Reducer<S, N>
  | OptionalStoreType<S, N>
  | string
  | BaseStoreConstructor<S, N>;

const schedule = scheduling();

export function useSelector<T, S extends string>(
  storesOrStore: S,
  selector: (state: { [key in S]: any }) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, S extends OptionalStoreType>(
  storesOrStore: S,
  selector: (
    state: S['store'] extends Reducer<any>
      ? { [key in S['store']['storeName']]: InferStoreStateFromReducer<S['store']> }
      : S['store'] extends string
      ? { [key in S['store']]: any }
      : Record<string, any>
  ) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, R extends Reducer<any>>(
  storesOrStore: R,
  selector: (state: { [key in R['storeName']]: InferStoreStateFromReducer<R> }) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, R extends BaseStoreConstructor<any>>(
  storesOrStore: R,
  selector: (state: { [key in R['storeName']]: InferStoreStateFromLegacyStore<R> }) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, S extends ReadonlyArray<unknown>>(
  storesOrStore: S,
  selector: (
    state: {
      [Key in Indices<S> as InferStoreNameFromUnknownStore<
        S[Key]
      >]: InferStoreStateFromUnknownStore<S[Key]>;
    }
  ) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, S extends any>(
  storesOrStore: S,
  selector: (state: Record<string, any>) => T,
  equalityFn?: typeof shallowEqual
): T;

export function useSelector<T, S extends StoreType | StoreType[]>(
  storesOrStore: S,
  selector: Selector<T>,
  equalityFn = shallowEqual
): T {
  invariant(selector, `You must pass a selector to useSelectors`);

  const context = useConsumerContext();
  const [, forceRender] = useReducer((s) => s + 1, 0);
  const renderIsScheduled = useRef(false);

  const storesRef = useShallowEqual(storesOrStore);

  const subscription = useMemo(
    () => new Subscription(toArray<StoreType>(storesRef as StoreType[]).map(context.getStore)),
    [storesRef, context]
  );

  const latestSubscriptionCallbackError = useRef<Error>();
  const latestSelector = useRef<Selector<T>>(selector);
  const latestSelectedState = useRef<T>();

  let selectedState: T;

  try {
    if (
      !latestSelectedState.current ||
      selector !== latestSelector.current ||
      latestSubscriptionCallbackError.current
    ) {
      selectedState = selector(context.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    let errorMessage = `An error occured while selecting the store state: ${err.message}.`;

    if (latestSubscriptionCallbackError.current) {
      errorMessage += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\nOriginal stack trace:`;
    }

    throw new Error(errorMessage);
  }

  useIsomorphicLayoutEffect(() => {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });

  useIsomorphicLayoutEffect(() => {
    let didUnsubscribe = false;

    function checkForUpdates() {
      renderIsScheduled.current = false;

      if (didUnsubscribe) {
        return;
      }

      try {
        const newSelectedState = latestSelector.current(context.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.setOnStateChange(() => {
      if (!renderIsScheduled.current) {
        renderIsScheduled.current = true;
        schedule(checkForUpdates);
      }
    });
    subscription.trySubscribe();

    checkForUpdates();

    return () => {
      didUnsubscribe = true;

      return subscription.tryUnsubscribe();
    };
  }, [subscription]);

  return selectedState;
}

type DEFAULT_STORE_NAME = string;

type DEFAULT_STORE_STATE = any;

type InferStoreNameFromOptionalStore<
  Store extends OptionalStoreType
> = Store['store'] extends Reducer<any, infer Name> ? Name : DEFAULT_STORE_NAME;

type InferStoreStateFromOptionalStore<
  Store extends OptionalStoreType
> = Store['store'] extends Reducer<infer State> ? State : DEFAULT_STORE_STATE;

type InferStoreNameFromUnknownStore<Store extends unknown> = Store extends string
  ? Store
  : Store extends OptionalStoreType
  ? InferStoreNameFromOptionalStore<Store>
  : Store extends Reducer<any>
  ? InferStoreNameFromReducer<Store>
  : Store extends BaseStoreConstructor<any>
  ? InferStoreNameFromLegacyStore<Store>
  : DEFAULT_STORE_NAME;

type InferStoreNameFromReducer<Store extends Reducer<any>> = Store['storeName'];

type InferStoreStateFromReducer<Store extends Reducer<any>> = Store extends Reducer<infer State>
  ? State
  : DEFAULT_STORE_STATE;

type InferStoreNameFromLegacyStore<Store extends BaseStoreConstructor<any>> = Store['storeName'];

type InferStoreStateFromLegacyStore<
  Store extends BaseStoreConstructor<any>
> = Store extends BaseStoreConstructor<infer State> ? State : DEFAULT_STORE_STATE;

type InferStoreStateFromUnknownStore<Store extends unknown> = Store extends string
  ? DEFAULT_STORE_STATE
  : Store extends OptionalStoreType
  ? InferStoreStateFromOptionalStore<Store>
  : Store extends Reducer<any>
  ? InferStoreStateFromReducer<Store>
  : Store extends BaseStoreConstructor<any>
  ? InferStoreStateFromLegacyStore<Store>
  : DEFAULT_STORE_STATE;
