import { Scope, Module, commandLineListTokens } from '@tramvai/core';
import { METRICS_MODULE_TOKEN, METRICS_SERVICES_REGISTRY_TOKEN } from '@tramvai/tokens-metrics';
import { ENV_MANAGER_TOKEN } from '@tramvai/module-common';
import noop from '@tinkoff/utils/function/noop';
import https from 'https';
import http from 'http';
import { createRequestWithMetrics } from './createRequestWithMetrics';
import { initRequestsMetrics } from './initRequestsMetrics';
import { MetricsServicesRegistry } from './MetricsServicesRegistry';
import { METRICS_MODULE_CONFIG_TOKEN } from '../tokens';
import type { ModuleConfig } from './types';

@Module({
  providers: [
    {
      provide: commandLineListTokens.init,
      multi: true,
      useFactory: ({
        metrics,
        envManager,
        metricsServicesRegistry,
        metricsModuleConfig,
      }: {
        envManager: typeof ENV_MANAGER_TOKEN;
        metricsServicesRegistry: typeof METRICS_SERVICES_REGISTRY_TOKEN;
        metrics?: typeof METRICS_MODULE_TOKEN;
        metricsModuleConfig: ModuleConfig;
      }) => {
        if (!metrics) {
          return noop;
        }

        return () => {
          const env = envManager.getAll();
          metricsServicesRegistry.registerEnv(env);

          const getServiceName = metricsServicesRegistry.getServiceName.bind(
            metricsServicesRegistry
          );

          initRequestsMetrics({
            metrics,
            getServiceName,
            http,
            https,
            createRequestWithMetrics,
            config: metricsModuleConfig,
          });
        };
      },
      deps: {
        metrics: {
          token: METRICS_MODULE_TOKEN,
          optional: true,
        },
        metricsServicesRegistry: METRICS_SERVICES_REGISTRY_TOKEN,
        envManager: ENV_MANAGER_TOKEN,
        metricsModuleConfig: METRICS_MODULE_CONFIG_TOKEN,
      },
    },
    {
      provide: METRICS_SERVICES_REGISTRY_TOKEN,
      useClass: MetricsServicesRegistry,
      scope: Scope.SINGLETON,
    },
  ],
})
export class RequestModule {}
