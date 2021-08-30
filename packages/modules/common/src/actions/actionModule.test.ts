import { createAction } from '@tramvai/core';
import { createContainer } from '@tinkoff/dippy';
import noop from '@tinkoff/utils/function/noop';
import type { LOGGER_TOKEN } from '@tramvai/tokens-common';
import { ActionExecution } from './actionExecution';
import { ActionPageRunner as ActionPageRunnerServer } from './actionPageRunner';
import { ActionPageRunner as ActionPageRunnerBrowser } from './actionPageRunner.browser';
import { authConditionFactory } from './test-utils/authCondition.mock';

const contextMock = {};
const logger = ((() => ({
  warn: noop,
  error: noop,
})) as any) as typeof LOGGER_TOKEN;

describe('action module integration tests', () => {
  describe('Восстановление состояния между клиентом/сервером', () => {
    it('[Простой кейс] экшены выполненные на серверы не должны выполняется на клиенте', async () => {
      //
      // подготовка общих данных
      //
      let result = [];
      const action1 = createAction({
        fn: (c, payload) => result.push(['action1', payload]),
        name: 'action1',
      });
      const action2 = createAction({
        fn: async (c, payload) => {
          result.push(['action2', payload]);
        },
        name: 'action2',
      });
      let serverState = {};

      //
      // Фаза сервера
      //
      const storeServer: any = {
        getState: (reducer?: any) => {
          const state = {};

          if (reducer) {
            return state[reducer.storeName];
          }
          return state;
        },
        dispatch: (event) => {
          if (event.type === 'action state execution in server') {
            serverState = event.payload;
          }
        },
      };
      const instanceExecutionServer = new ActionExecution({
        di: createContainer(),
        store: storeServer,
        actionConditionals: [],
        // @ts-ignore
        context: contextMock,
      });
      const instanceServer = new ActionPageRunnerServer({
        logger,
        actionExecution: instanceExecutionServer,
        store: storeServer,
        limitTime: 500,
      });

      await instanceServer.runActions([action1, action2]);

      expect(result).toEqual([
        ['action1', {}],
        ['action2', {}],
      ]);

      //
      // Фаза клиент
      //
      result = [];

      const storeBrowser: any = {
        getState: (reducer?: any) => {
          const state = { actionTramvai: { serverState } };

          if (reducer) {
            return state[reducer.storeName];
          }
          return state;
        },
      };

      const instanceExecutionBrowser = new ActionExecution({
        di: createContainer(),
        store: storeBrowser,
        actionConditionals: [],
        // @ts-ignore
        context: contextMock,
      });
      const instanceBrowser = new ActionPageRunnerBrowser({
        logger,
        actionExecution: instanceExecutionBrowser,
      });
      await instanceBrowser.runActions([action1, action2]);

      expect(result).toEqual([]);
    });

    it('[С различными conditionals] экшены выполненные на серверы не должны выполняется на клиенте', async () => {
      //
      // подготовка общих данных
      //
      let result = [];
      const action1 = createAction({
        fn: (c, payload) => result.push(['action1', payload]),
        name: 'action1',
        conditions: {
          requiredCoreRoles: ['client'],
        },
      });
      const action2 = createAction({
        fn: async (c, payload) => {
          result.push(['action2', payload]);
        },
        name: 'action2',
        conditions: {
          requiredCoreRoles: ['client'],
        },
      });
      let serverState = {};

      //
      // Фаза сервера
      //
      const storeServer: any = {
        getState: (reducer?: any) => {
          const state = {
            roles: {
              CORE: {
                client: true,
              },
            },
            session: { accessLevel: 1 },
          };

          if (reducer) {
            return state[reducer.storeName];
          }
          return state;
        },
        dispatch: (event) => {
          if (event.type === 'action state execution in server') {
            serverState = event.payload;
          }
        },
      };
      const authCondServer = authConditionFactory({ context: storeServer });
      const instanceExecutionServer = new ActionExecution({
        di: createContainer(),
        store: storeServer,
        actionConditionals: [authCondServer],
        // @ts-ignore
        context: contextMock,
      });
      const instanceServer = new ActionPageRunnerServer({
        logger,
        actionExecution: instanceExecutionServer,
        store: storeServer,
        limitTime: 500,
      });

      await instanceServer.runActions([action1, action2]);

      expect(result).toEqual([
        ['action1', {}],
        ['action2', {}],
      ]);

      //
      // Фаза клиент
      //
      result = [];

      const storeBrowser: any = {
        getState: (reducer?: any) => {
          const state = {
            roles: {
              CORE: {
                client: true,
              },
            },
            session: { accessLevel: 1 },
            actionTramvai: { serverState },
          };

          if (reducer) {
            return state[reducer.storeName];
          }
          return state;
        },
      };
      const authCondBrowser = authConditionFactory({ context: storeBrowser });

      const instanceExecutionBrowser = new ActionExecution({
        di: createContainer(),
        store: storeBrowser,
        actionConditionals: [authCondBrowser],
        // @ts-ignore
        context: contextMock,
      });
      const instanceBrowser = new ActionPageRunnerBrowser({
        actionExecution: instanceExecutionBrowser,
        logger,
      });
      await instanceBrowser.runActions([action1, action2]);

      expect(result).toEqual([]);
    });
  });
});
