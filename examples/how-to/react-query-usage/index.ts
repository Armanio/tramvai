import { createApp, createBundle } from '@tramvai/core';
import { ReactQueryModule } from '@tramvai/module-react-query';
import { ROUTES_TOKEN } from '@tramvai/tokens-router';
import { lazy } from '@tramvai/react';
import { modules } from '../common';
import { routes } from './routes';

const bundle = createBundle({
  name: 'mainDefault',
  components: {
    'use-query-base': lazy(() => import('./components/use-query-base')),
    'use-query-prefetch': lazy(() => import('./components/use-query-prefetch')),
    'use-same-query-many-components': require('./components/use-same-query-many-components'),
    'use-query-parameters': lazy(() => import('./components/use-query-parameters')),
    'use-query-options': lazy(() => import('./components/use-query-options')),
    'use-query-fail': lazy(() => import('./components/use-query-fail')),
    'use-infinite-query': lazy(() => import('./components/use-infinite-query')),
    'use-mutation': lazy(() => import('./components/use-mutation')),
    'use-query-conditions': lazy(() => import('./components/use-query-conditions')),
  },
});

createApp({
  name: 'react-query-usage',
  modules: [...modules, ReactQueryModule],
  bundles: {
    mainDefault: () => Promise.resolve({ default: bundle }),
  },
  providers: [
    {
      provide: ROUTES_TOKEN,
      multi: true,
      useValue: routes,
    },
  ],
});
