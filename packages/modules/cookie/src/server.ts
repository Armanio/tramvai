import { Module, Scope } from '@tramvai/core';
import { REQUEST_MANAGER_TOKEN, RESPONSE_MANAGER_TOKEN } from '@tramvai/tokens-common';
import { CookieManager } from './cookieManager.server';
import { COOKIE_MANAGER_TOKEN } from './tokens';

export { COOKIE_MANAGER_TOKEN };

@Module({
  providers: [
    {
      // Управление куками в приложении
      provide: COOKIE_MANAGER_TOKEN,
      useClass: CookieManager,
      scope: Scope.REQUEST,
      deps: {
        requestManager: REQUEST_MANAGER_TOKEN,
        responseManager: RESPONSE_MANAGER_TOKEN,
      },
    },
  ],
})
export class CookieModule {}
