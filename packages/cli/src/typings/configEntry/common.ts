import type { ProjectType } from '../projectType';
import type { DeduplicateStrategy } from '../../library/webpack/plugins/DedupePlugin';

type ServeNotifications = {
  /**
   * @title Defines when success notifications are shown
   */
  suppressSuccess?: false | true | 'always' | 'initial';
  /**
   * @title True to suppress the warning notifications, otherwise false
   */
  suppressWarning?: boolean;
  /**
   * @title True to activate (focus) the terminal window when a compilation error occurs
   */
  activateTerminalOnError?: boolean;
};

type serveConfig = {
  /**
   * @default {}
   */
  notifications?: ServeNotifications & {
    client?: ServeNotifications;
    server?: ServeNotifications;
  };
  /**
   * @default {}
   */
  configurations?: {
    /**
     * @title Enable source maps in development build (for client and server build)
     * @default false
     */
    sourceMap?: boolean;
    /**
     * @title Enable development build for modern browsers
     * @default false
     */
    modern?: boolean;
    /**
     * @title Enable react hot-refresh
     * @default false
     */
    hotRefresh?: boolean;
    /**
     * @title Configure react hot-refresh https://github.com/pmmmwh/react-refresh-webpack-plugin#options
     */
    hotRefreshOptions?: {
      overlay?: boolean | Record<string, any>;
      [key: string]: any;
    };
  };
};

export interface ConfigEntry {
  name: string;
  root: string;
  type: ProjectType;
  version?: string;
  /**
   * @default {}
   */
  commands?: {
    /**
     * @default {}
     */
    build?: {
      /**
       * @default {}
       */
      options?: Record<string, any>;
      /**
       * @default {}
       */
      configurations?: {
        /**
         * @title Enable production build for modern browsers
         * @default false
         */
        modern?: boolean;
        /**
         * @title Enable DedupePlugin
         * @default false
         */
        dedupe?: DeduplicateStrategy | false;
        /**
         * @title Sets ignore to DedupePlugin
         */
        dedupeIgnore?: string[];
        /**
         * @title Enable replacing `typeof window` expression
         * @default true
         */
        removeTypeofWindow?: boolean;
        /**
         * @title Enable source maps in production build
         * @default false
         */
        sourceMap?: boolean;
        /**
         * @title Enable source maps for server assets in production build
         * @default false
         */
        sourceMapServer?: boolean;
        /**
         * @title Configuration for enabling parallel compression for terser plugin
         * @default true
         */
        terserParallel?: boolean;
        /**
         * @title List of modules to exclude from @babel/preset-env
         */
        excludesPresetEnv?: string[];
        /**
         * @title thread-loader config
         * @additionalProperties true
         */
        threadLoader?: Record<string, any>;
        /**
         * @title Define plugin config
         * @default {"prod": {}, "dev": {}}
         * @additionalProperties true
         */
        definePlugin?: Record<string, any>;
        /**
         * @deprecated
         *
         * @default false
         */
        generateDataQaTag?: boolean;
        /**
         * @deprecated включает использование плагина fill-action-name
         *
         * @default false
         */
        enableFillActionNamePlugin?: boolean;
        /**
         * @title Set minimizer for css
         */
        cssMinimize?: 'csso';
        postcss?: {
          /**
           * @title Path to postcss config file
           */
          config?: string;
          /**
           * @title CSS identifiers build algorythm
           */
          cssLocalIdentName?: string;
          /**
           * @title CSS identifiers build algorythm for development buld
           */
          cssLocalIdentNameDev?: string;
          /**
           * @title CSS identifiers build algorythm for production build
           */
          cssLocalIdentNameProd?: string;
          /**
           * @title Path to postcss config file for assets
           */
          assetsConfig?: string;
        };
        /**
         * @title Aliases for project imports
         * @additionalProperties true
         */
        alias?: Record<string, any>;
        /**
         * @title svgo-loader options
         */
        svgo?: {
          /**
           * @title svgo plugins
           */
          plugins?: Record<string, any>[];
        };
        /**
         * @title Settings for image-webpack-loader
         */
        imageOptimization?: {
          /**
           * @title Enable image-webpack-loader
           */
          enabled?: boolean;
          /**
           * @title Pass options to image-webpack-loader
           * @additionalProperties true
           */
          options?: Record<string, any>;
        };
        /**
         * @title transpile libs based only on %40tinkoff/is-modern-lib
         * @default true
         */
        transpileOnlyModernLibs?: boolean;
      };
    };
    /**
     * @default {}
     */
    serve?: serveConfig;
  };
  /**
   * @deprecated move serveConfig to commands.serve
   *
   * @default {}
   * @ignore true
   */
  serve?: serveConfig;
}
