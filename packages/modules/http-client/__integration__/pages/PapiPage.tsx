import React from 'react';
import { createAction } from '@tramvai/core';
import { PAPI_SERVICE } from '@tramvai/tokens-http-client';
import { useStore } from '@tramvai/state';
import { testPapiReducer, updateTestPapiState } from '../reducers/testPapi';

const serverAction = createAction({
  fn: async (context, __, { papiService }) => {
    const testPapiState = await Promise.all([
      papiService.request({ path: 'async-papi-server' }).then(({ payload }) => payload),
      papiService.request({ path: 'sync-papi-server' }).then(({ payload }) => payload),
    ]);

    context.dispatch(updateTestPapiState(testPapiState));
  },
  name: 'serverAction',
  deps: {
    papiService: PAPI_SERVICE,
  },
  conditions: {
    onlyServer: true,
  },
});

const browserAction = createAction({
  fn: async (context, __, { papiService }) => {
    const testPapiState = await Promise.all([
      papiService.request({ path: 'async-papi-browser' }).then(({ payload }) => payload),
      papiService.request({ path: 'sync-papi-browser' }).then(({ payload }) => payload),
    ]);

    context.dispatch(updateTestPapiState(testPapiState));
  },
  name: 'browserAction',
  deps: {
    papiService: PAPI_SERVICE,
  },
  conditions: {
    onlyBrowser: true,
  },
});

export const HttpClientPapiPage = () => {
  const testPapiState = useStore(testPapiReducer);

  return (
    <div>
      <div id="test-papi-state-0">{testPapiState[0]}</div>
      <div id="test-papi-state-1">{testPapiState[1]}</div>
    </div>
  );
};

HttpClientPapiPage.actions = [serverAction, browserAction];
