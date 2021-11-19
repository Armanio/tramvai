(self.webpackChunk=self.webpackChunk||[]).push([[8862],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),g=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=g(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(t),p=a,I=c["".concat(u,".").concat(p)]||c[p]||s[p]||r;return t?o.createElement(I,i(i({ref:n},d),{},{components:t})):o.createElement(I,i({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var g=2;g<r;g++)i[g]=t[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5699:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>g,toc:()=>d,default:()=>c});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),i=["components"],l={id:"router",title:"router"},u=void 0,g={unversionedId:"references/modules/router",id:"references/modules/router",isDocsHomePage:!1,title:"router",description:"Module for routing in the application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/references/modules/router.md",sourceDirName:"references/modules",slug:"/references/modules/router",permalink:"/en/docs/references/modules/router",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/router.md",version:"current",frontMatter:{id:"router",title:"router"},sidebar:"docs",previous:{title:"render",permalink:"/en/docs/references/modules/render"},next:{title:"seo",permalink:"/en/docs/references/modules/seo"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Explanation",id:"explanation",children:[{value:"Navigation flow on the server",id:"navigation-flow-on-the-server",children:[]},{value:"Flow of the first navigation on the client",id:"flow-of-the-first-navigation-on-the-client",children:[]},{value:"Flow of navigation on the client without SPA transitions",id:"flow-of-navigation-on-the-client-without-spa-transitions",children:[]},{value:"Flow of navigation on the client with SPA transitions",id:"flow-of-navigation-on-the-client-with-spa-transitions",children:[]}]},{value:"API",id:"api",children:[{value:"Static routes in the application",id:"static-routes-in-the-application",children:[]},{value:"PAGE_SERVICE_TOKEN",id:"page_service_token",children:[]},{value:"RouterStore",id:"routerstore",children:[]},{value:"ROUTER_GUARD_TOKEN",id:"router_guard_token",children:[]},{value:"Redirects",id:"redirects",children:[]},{value:"Not Found route",id:"not-found-route",children:[]},{value:"ROUTE_RESOLVE_TOKEN",id:"route_resolve_token",children:[]},{value:"ROUTE_TRANSFORM_TOKEN",id:"route_transform_token",children:[]},{value:"Method of setting when actions should be performed during SPA transitions",id:"method-of-setting-when-actions-should-be-performed-during-spa-transitions",children:[]}]},{value:"How to",id:"how-to",children:[{value:"Working with navigation in providers and actions",id:"working-with-navigation-in-providers-and-actions",children:[]},{value:"Working with navigation in React components",id:"working-with-navigation-in-react-components",children:[]},{value:"How to set static routes",id:"how-to-set-static-routes",children:[]},{value:"How to set Route Guard",id:"how-to-set-route-guard",children:[]},{value:"How to set the Not found route",id:"how-to-set-the-not-found-route",children:[]},{value:"Testing",id:"testing",children:[]}]},{value:"Exported tokens",id:"exported-tokens",children:[]}],s={toc:d};function c(e){var n=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Module for routing in the application.\nExports two sub-modules: with client SPA transitions, and no-SPA."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/module-router"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-router\n")),(0,r.kt)("p",null,"And connect in the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { NoSpaRouterModule, SpaRouterModule } from '@tramvai/module-router';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [SpaRouterModule],\n  // modules: [ NoSpaRouterModule ], if you want to disable client SPA transitions\n});\n")),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"The module is based on the library ",(0,r.kt)("a",{parentName:"p",href:"../libs/router"},"@tinkoff/router")),(0,r.kt)("h3",{id:"navigation-flow-on-the-server"},"Navigation flow on the server"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagramm",src:t(4975).Z})),(0,r.kt)("h3",{id:"flow-of-the-first-navigation-on-the-client"},"Flow of the first navigation on the client"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagramm",src:t(6554).Z})),(0,r.kt)("h3",{id:"flow-of-navigation-on-the-client-without-spa-transitions"},"Flow of navigation on the client without SPA transitions"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagramm",src:t(5418).Z})),(0,r.kt)("h3",{id:"flow-of-navigation-on-the-client-with-spa-transitions"},"Flow of navigation on the client with SPA transitions"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagramm",src:t(4707).Z})),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"static-routes-in-the-application"},"Static routes in the application"),(0,r.kt)("p",null,"Route description format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n  {\n    // the name of the route is required\n    name: 'route1',\n    // the path of the route is required\n    path: '/route/a/',\n    // additional configs for the route\n    config: {\n      // layout component name\n      layoutComponent: 'layout',\n      // page component name\n      pageComponent: 'page',\n    },\n  },\n];\n")),(0,r.kt)("p",null,"You can explicitly transfer a list of routes to routing when adding a router module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@tramvai/core';\nimport { SpaRouterModule } from '@tramvai/module-router';\n\nconst routes = [\n  // ...\n];\n\ncreateApp({\n  modules: [\n    // ...,\n    SpaRouterModule.forRoot(routes),\n  ],\n});\n")),(0,r.kt)("p",null,"Or separately with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ROUTES_TOKEN")," token (you can set it several times):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ROUTES_TOKEN } from '@tramvai/module-router';\nimport { provide } from '@tramvai/core';\n\nconst routesCommon = [\n  // ...\n];\nconst routesSpecific = [\n  // ...\n];\n\nconst providers = [\n  // ...,\n  provide({\n    provide: ROUTES_TOKEN,\n    multi: true,\n    useValue: routesCommon,\n  }),\n  provide({\n    provide: ROUTES_TOKEN,\n    multi: true,\n    useValue: routesSpecific,\n  }),\n];\n")),(0,r.kt)("h3",{id:"page_service_token"},"PAGE_SERVICE_TOKEN"),(0,r.kt)("p",null,"Service wrapper for working with routing. Serves to hide routing work and is the preferred way of routing work."),(0,r.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u044b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getCurrentRoute()")," - get the current route,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getCurrentUrl()")," - object-result of parsing the current url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getConfig()")," - get the config of the current page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getContent()")," - get content for the current page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getMeta()")," - get the meta for the current page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigate(options)")," - navigation to a new page ",(0,r.kt)("a",{parentName:"li",href:"/en/docs/references/libs/router"},"more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateCurrentRoute(options)")," - update the current route with new parameters ",(0,r.kt)("a",{parentName:"li",href:"/en/docs/references/libs/router"},"more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"back()")," - go back through history"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"forward()")," - go forward through history"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"go(to)")," - go to the specified delta by history")),(0,r.kt)("h3",{id:"routerstore"},"RouterStore"),(0,r.kt)("p",null,"Store that stores information about the current and previous routes."),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentRoute")," - current route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"currentUrl")," - current url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previousRoute")," - previous route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previousUrl")," - previous url")),(0,r.kt)("h3",{id:"router_guard_token"},"ROUTER_GUARD_TOKEN"),(0,r.kt)("p",null,"Allows you to block or redirect the transition to the page under certain conditions. See ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/libs/router"},"@tinkoff/router")),(0,r.kt)("h3",{id:"redirects"},"Redirects"),(0,r.kt)("p",null,"Redirects can be done via ",(0,r.kt)("a",{parentName:"p",href:"#ROUTER_GUARD_TOKEN"},"guards")," or explicitly via the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," property in the route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n  // ...,\n  {\n    name: 'redirect',\n    path: '/from/',\n    redirect: '/to/',\n  },\n];\n")),(0,r.kt)("h3",{id:"not-found-route"},"Not Found route"),(0,r.kt)("p",null,"The route used if no matches were found for the current page, can be specified in a special way in the list of routes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const route = [\n  // ...other routes,\n  {\n    name: 'not-found',\n    path: '*',\n    config: {\n      pageComponent: 'notfoundComponentName',\n    },\n  },\n];\n")),(0,r.kt)("h3",{id:"route_resolve_token"},"ROUTE_RESOLVE_TOKEN"),(0,r.kt)("p",null,"Allows you to define an asynchronous function that returns a route object that will be called if no suitable static route was found in the application."),(0,r.kt)("h3",{id:"route_transform_token"},"ROUTE_TRANSFORM_TOKEN"),(0,r.kt)("p",null,"Transformer function for application routes (set statically and those that will be loaded via ROUTE_RESOLVE_TOKEN)"),(0,r.kt)("h3",{id:"method-of-setting-when-actions-should-be-performed-during-spa-transitions"},"Method of setting when actions should be performed during SPA transitions"),(0,r.kt)("p",null,"By default, SPA transitions execute actions after defining the next route, but before the actual transition, which allows the page to be displayed immediately with new data, but can cause a noticeable visual lag if the actions are taken long enough."),(0,r.kt)("p",null,"It is possible to change the behavior and make the execution of actions after the transition itself. Then, when developing components, you will need to take into account that data will be loaded as it becomes available."),(0,r.kt)("p",null,"Configurable explicitly when using the routing module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@tramvai/core';\nimport { SpaRouterModule } from '@tramvai/module-router';\n\ncreateApp({\n  modules: [\n    // ...,\n    SpaRouterModule.forRoot([], {\n      spaActionsMode: 'after', // default is 'before'\n    }),\n  ],\n});\n")),(0,r.kt)("p",null,"or through token ",(0,r.kt)("inlineCode",{parentName:"p"},"ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN } from '@tramvai/module-router';\nimport { provide } from '@tramvai/core';\n\nconst providers = [\n  // ...,\n  provide({\n    provide: ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN,\n    useValue: 'after',\n  }),\n];\n")),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"working-with-navigation-in-providers-and-actions"},"Working with navigation in providers and actions"),(0,r.kt)("p",null,"In this case, it is best to use the ",(0,r.kt)("a",{parentName:"p",href:"#page_service_token"},"PAGE_SERVICE_TOKEN")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide, createAction } from '@tramvai/core';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: 'token',\n  useFactory: ({ pageService }) => {\n    if (pageService().getCurrentUrl().pathname === '/test/') {\n      return pageService.navigate({ url: '/redirect/', replace: true });\n    }\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n\nconst action = createAction({\n  name: 'action',\n  fn: (_, __, { pageService }) => {\n    if (pageService.getConfig().pageComponent === 'pageComponent') {\n      return page.updateCurrentRoute({ query: { test: 'true' } });\n    }\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n")),(0,r.kt)("h3",{id:"working-with-navigation-in-react-components"},"Working with navigation in React components"),(0,r.kt)("p",null,"You can work with routing inside React components using hooks and components - ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," from the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/libs/router#%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%81-react"},"@tinkoff/router")),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"An example of working with navigation in the application"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createApp, createBundle } from '@tramvai/core';\nimport { SpaRouterModule, useNavigate, useUrl, Link } from '@tramvai/module-router';\nimport { modules } from '../common';\n\nconst Navigation = ['/1/', '/2/', '/3/'];\n\nfunction Page() {\n  // useUrl allows you to get the current url\n  const { pathname, path } = useUrl();\n  // useNavigate allows you to get a function with which you can call the navigation\n  const navigate = useNavigate();\n  // useNavigate also allows you to set properties immediately so that the result can be passed immediately as a callback\n  const navigateToRoot = useNavigate({ url: '/', query: { a: '1', b: '2' } });\n\n  return (\n    <div>\n      <div>Current Path: {path}</div>\n      <div>\n        <button type=\"button\" onClick={navigateToRoot}>\n          Navigate to Root\n        </button>\n        {/* the Link component allows you to create a link with a transition */}\n        <Link url=\"/link/\" replace>\n          <button type=\"button\">Navigate By Link</button>\n        </Link>\n      </div>\n      {Navigation.map((p) => {\n        if (p !== pathname) {\n          return (\n            <button type=\"button\" onClick={() => navigate({ url: p })}>\n              Navigate to {p}\n            </button>\n          );\n        }\n\n        return null;\n      })}\n    </div>\n  );\n}\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n});\n\ncreateApp({\n  name: 'route-navigate',\n  modules: [\n    SpaRouterModule.forRoot([\n      {\n        name: 'root',\n        path: '/',\n      },\n      {\n        name: 'link',\n        path: '/link/',\n      },\n      {\n        name: '1',\n        path: '/1/',\n      },\n      {\n        name: '2',\n        path: '/2/',\n      },\n      {\n        name: '3',\n        path: '/3/',\n      },\n    ]),\n    ...modules,\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"how-to-set-static-routes"},"How to set static routes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/modules/router"},"RouterModule")," allows you to add new routes when configuring your application.\nThe second way is to pass static routes to DI via the ",(0,r.kt)("inlineCode",{parentName:"p"},"ROUTES_TOKEN")," token."),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"An example of adding static routes to an application"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createApp, createBundle } from '@tramvai/core';\nimport { useSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { SpaRouterModule, ROUTES_TOKEN, PAGE_SERVICE_TOKEN } from '@tramvai/module-router';\n\nimport { modules } from '../common';\n\nconst Navigation = ['/1/', '/2/', '/3/'];\n\nfunction Page() {\n  // useSelector to get the current route\n  // store 'router' is provided by RouterModule\n  const state = useSelector('router', (x) => x.router);\n  // pageService - a wrapper for working with a router, you can get various properties and initiate a transition\n  // but through useDi you cannot subscribe to data changes inside services, so to subscribe to route changes\n  // used by useSelector above\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n  const { pathname, path } = state.currentUrl;\n\n  return (\n    <div>\n      <div>Current Path: {path}</div>\n      {Navigation.map((p) => {\n        if (p !== pathname) {\n          return (\n            <button type=\"button\" onClick={() => pageService.navigate({ url: p })}>\n              Navigate to {p}\n            </button>\n          );\n        }\n\n        return null;\n      })}\n    </div>\n  );\n}\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n});\n\ncreateApp({\n  name: 'route-static-routes',\n  modules: [\n    // the static forRoot method allows you to define static routes in the application -\n    // these routes are always available and the config for them is not loaded from the admin panel, but are set right there\n    SpaRouterModule.forRoot([\n      {\n        name: '1',\n        path: '/1/',\n      },\n      {\n        name: '2',\n        path: '/2/',\n      },\n    ]),\n    ...modules,\n  ],\n  providers: [\n    {\n      // you can also set static routes by a separate provider\n      provide: ROUTES_TOKEN,\n      multi: true,\n      useValue: [\n        {\n          name: '3',\n          path: '/3/',\n        },\n      ],\n    },\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"how-to-set-route-guard"},"How to set Route Guard"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/modules/router#router_guard_token"},"ROUTER_GUARD_TOKEN")," is set as an asynchronous function, which allows you to perform various actions and influence the routing behavior."),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example router guards job in application"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createReducer, createEvent } from '@tramvai/state';\nimport { createApp, createBundle, createAction } from '@tramvai/core';\nimport { SpaRouterModule, ROUTER_GUARD_TOKEN, useNavigate, useUrl } from '@tramvai/module-router';\nimport { STORE_TOKEN, CONTEXT_TOKEN, COMBINE_REDUCERS } from '@tramvai/module-common';\nimport { modules } from '../common';\n\nconst Navigation = ['/1/', '/2/', '/3/', '/redirect/', '/block/'];\n\nfunction Page() {\n  const navigate = useNavigate();\n  const { pathname, path } = useUrl();\n\n  return (\n    <div>\n      <div>Current Path: {path}</div>\n      {Navigation.map((p) => {\n        if (p !== pathname) {\n          return (\n            <button type=\"button\" onClick={() => navigate({ url: p })}>\n              Navigate to {p}\n            </button>\n          );\n        }\n\n        return null;\n      })}\n    </div>\n  );\n}\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n});\n\nconst event = createEvent<boolean>('event');\nconst store = createReducer<boolean | void>('store', undefined).on(event, (_, val) => val);\n\nconst action = createAction({\n  name: 'action',\n  fn: async (context) => {\n    await new Promise<void>((res) => setTimeout(res, 1200));\n\n    return context.dispatch(event(true));\n  },\n});\n\ncreateApp({\n  name: 'route-navigate',\n  modules: [\n    SpaRouterModule.forRoot([\n      {\n        name: 'root',\n        path: '/',\n      },\n      {\n        name: '1',\n        path: '/1/',\n      },\n      {\n        name: '2',\n        path: '/2/',\n      },\n      {\n        name: '3',\n        path: '/3/',\n      },\n      {\n        name: 'redirect',\n        path: '/redirect/',\n      },\n      {\n        name: 'block',\n        path: '/block/',\n      },\n    ]),\n    ...modules,\n  ],\n  providers: [\n    {\n      provide: COMBINE_REDUCERS,\n      multi: true,\n      useValue: store,\n    },\n    {\n      provide: ROUTER_GUARD_TOKEN,\n      multi: true,\n      useValue: async ({ to }) => {\n        if (to.path === '/redirect/') {\n          // we can make a redirect from the guard\n          return '/3/';\n        }\n      },\n    },\n    {\n      provide: ROUTER_GUARD_TOKEN,\n      multi: true,\n      useFactory: ({ store: state, context }) => {\n        return async ({ to }) => {\n          if (to.path === '/block/') {\n            if (state.getState().store === undefined) {\n              await context.executeAction(action);\n            }\n\n            if (state.getState().store) {\n              // we can block navigation\n              return false;\n            }\n          }\n        };\n      },\n      deps: {\n        store: STORE_TOKEN,\n        context: CONTEXT_TOKEN,\n      },\n    },\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"how-to-set-the-not-found-route"},"How to set the Not found route"),(0,r.kt)("p",null,"The Not found route is used if the corresponding route is not found for the url."),(0,r.kt)("p",null,"Such a route is specified in the list of routes with the special ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," character in the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," property."),(0,r.kt)("p",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"An example of setting a Not Found route in an application"),(0,r.kt)("p",null,(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createApp, createBundle } from '@tramvai/core';\nimport { SpaRouterModule, useNavigate, useUrl } from '@tramvai/module-router';\nimport { modules } from '../common';\n\nconst Navigation = [\n  '/1/',\n  '/2/',\n  '/3/',\n  '/not-found',\n  '/child/1/',\n  '/child/2/',\n  '/child/3/',\n  '/child/not-found',\n];\n\nfunction Page() {\n  const navigate = useNavigate();\n  const { pathname, path } = useUrl();\n\n  return (\n    <div>\n      <div>Current Path: {path}</div>\n      {Navigation.map((p) => {\n        if (p !== pathname) {\n          return (\n            <button type=\"button\" onClick={() => navigate({ url: p })}>\n              Navigate to {p}\n            </button>\n          );\n        }\n\n        return null;\n      })}\n    </div>\n  );\n}\n\n// Defining a separate page\nconst NotFoundRoot = () => {\n  return 'not found root';\n};\n\nconst NotFoundChild = () => {\n  return 'not found child';\n};\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n    notFoundRoot: NotFoundRoot,\n    notFoundChild: NotFoundChild,\n  },\n});\n\ncreateApp({\n  name: 'route-navigate',\n  modules: [\n    SpaRouterModule.forRoot([\n      {\n        name: 'root',\n        path: '/',\n      },\n      {\n        name: '1',\n        path: '/1/',\n      },\n      {\n        name: '2',\n        path: '/2/',\n      },\n      {\n        name: '3',\n        path: '/3/',\n      },\n      {\n        name: 'child-1',\n        path: '/child/1/',\n      },\n      {\n        name: 'child-2',\n        path: '/child/2/',\n      },\n      {\n        name: 'child-1',\n        path: '/child/3/',\n      },\n      {\n        name: 'not-found-root',\n        path: '*',\n        config: {\n          pageComponent: 'notFoundRoot',\n        },\n      },\n      {\n        name: 'not-found-child',\n        path: '/child/*',\n        config: {\n          pageComponent: 'notFoundChild',\n        },\n      },\n    ]),\n    ...modules,\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("h4",{id:"testing-router_guard_token-extensions"},"Testing ROUTER_GUARD_TOKEN extensions"),(0,r.kt)("p",null,"If you have a module or providers that define ",(0,r.kt)("inlineCode",{parentName:"p"},"ROUTER_GUARD_TOKEN"),", then it will be convenient to use special utilities to test them separately"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ROUTER_GUARD_TOKEN } from '@tramvai/tokens-router';\nimport { testGuard } from '@tramvai/module-router/tests';\nimport { CustomModule } from './module';\nimport { providers } from './providers';\n\ndescribe('router guards', () => {\n  it('should redirect from guard', async () => {\n    const { router } = testGuard({\n      providers,\n    });\n\n    await router.navigate('/test/');\n\n    expect(router.getCurrentUrl()).toMatchObject({\n      path: '/redirect/',\n    });\n  });\n\n  it('should block navigation', async () => {\n    const { router } = testGuard({\n      modules: [CustomModule],\n    });\n\n    expect(router.getCurrentUrl()).toMatchObject({ path: '/' });\n\n    await router.navigate('/test/').catch(() => null);\n\n    expect(router.getCurrentUrl()).toMatchObject({\n      path: '/',\n    });\n  });\n});\n")),(0,r.kt)("h2",{id:"exported-tokens"},"Exported tokens"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/tokens/router-tokens"},"link")))}c.isMDXComponent=!0},5418:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0MjNweCIgaGVpZ2h0PSIzNTNweCIgdmlld0JveD0iLTAuNSAtMC41IDQyMyAzNTMiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDs0OTJiNjQ4NC0yNWE0LTQzYzEtOGI0OS03N2UxMDFlNjhlMTImcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMS0wMi0wMlQxMToyNzowOS45NDFaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDb2RlLzEuNTIuMSBDaHJvbWUvODMuMC40MTAzLjEyMiBFbGVjdHJvbi85LjMuNSBTYWZhcmkvNTM3LjM2JnF1b3Q7IGV0YWc9JnF1b3Q7TmRNLWozVF90a2dDRHJ1M01lSU8mcXVvdDsgdmVyc2lvbj0mcXVvdDsxMy4xMC4wJnF1b3Q7IHR5cGU9JnF1b3Q7ZW1iZWQmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7OHJ5R0JHOVJlSnNmX0pHZTNDRXQmcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7dFpaTmM1c3dFSVovRFZmR1FqYTJqNDNqdElkMnBqTSt0RGtxc0lBYW1XV0ViS0MvdmdMRWw0SEVjZHp4d2V5clhhRjl0Q3RoMGQweC95cFpFdjFBSDRUbExQemNvbytXNDVDTnU5Vi9wVkxVeXBhU1dnZ2w5NDFUSnh6NFh6RGl3cWduN2tNNmNGU0lRdkZrS0hvWXgrQ3BnY2FreEd6b0ZxQVl2alZoSVl5RWc4ZkVXUDNGZlJYVjZzWlpkL28zNEdIVXZKazBDUjlaNDJ3eVNTUG1ZOWFUNk42aU80bW82cWRqdmdOUndtdTQxSEZQTTZQdHdpVEU2cG9BdXFranpreWNUSEptWWFwb3NwVjRpbjBvQXhZV2ZjZ2lydUNRTUs4Y3pmVCthaTFTUjZFdG9oOTlsa2FWYjJta1N1SXI3RkNnckthaU82Zjh0U01OUEtvVnN3NlFDdkxaWkVpTFNOY1c0QkdVTExTTENXaWdGc05xeWJvdFdqWXVVVzk3Nk1xSXpKUkYyTTdja2RNUEJ0NE15UGM1ZnB4Y244ODh5eGxNRXpCbnlhMHV5TkV4T21jOWdZNXM3NENPa0JFcThIVy9HUk9saWpERW1JbDlwejRNaTdMeitZNllHSVovUUtuQ0hCN3NwSENJRzNLdWZwZmg5c3BZejcyUng5ek1YQmxGWThRNnRWNVFhVDczeDdxd3ltcmlabmNveFpQMFRNN204Q2hUZjNQTEpBaW0rSGw0RkUzeHIwSy9TTW1LbmtPQ1BGWnBiK2FmcGRCVkFsbXZKa3ZoNlRaLy9WQ3Y0TXBvOTZLZUZKTWhLQk4xVVZJdGs2dXFiRDFxVUYxQ0NxUWRzek1QbVlJM3pqM3kvcmszYWsvZmZYRlg3cWlWUzkrQUM5SHpESUxBOGJ6N05ESWh3MDZlYU9TMnVmdU5mTW45bGo1dWpyd2U0b3pIK25xekJYcTZaREcySXdtQkhyRnQrODYwWFc4REw4RTF0SDBHbStCZXRCY3o1ZHZIdmZ4UHVPbTRvcTNsUXZINEZZTkFCOWZsZmZmYi9DTjMwaWR2ODJFcE8xTndwKzd6RytCV3VKcHZydnB3NmI1YzZmNGYmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij4KICAgIDxkZWZzLz4KICAgIDxnPgogICAgICAgIDxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSI0MjAiIGhlaWdodD0iMzUwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjMmMyYzIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWRhc2hhcnJheT0iOSA5IiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHJlY3QgeD0iMzEiIHk9IjEyMSIgd2lkdGg9IjI3MCIgaGVpZ2h0PSIxOTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2MyYzJjMiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtZGFzaGFycmF5PSI5IDkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cGF0aCBkPSJNIDE1NiA4MSBMIDE1NiAxMjEgTCAxNTYgMTQ0LjYzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0gMTU2IDE0OS44OCBMIDE1Mi41IDE0Mi44OCBMIDE1NiAxNDQuNjMgTCAxNTkuNSAxNDIuODggWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8cmVjdCB4PSI5MSIgeT0iMjEiIHdpZHRoPSIxMzAiIGhlaWdodD0iNjAiIHJ4PSI5IiByeT0iOSIgZmlsbD0iI2ZmZjJjYyIgc3Ryb2tlPSIjZDZiNjU2IiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+CiAgICAgICAgICAgIDxzd2l0Y2g+CiAgICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7IiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij4KICAgICAgICAgICAgICAgICAgICA8ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDEyOHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDUxcHg7IG1hcmdpbi1sZWZ0OiA5MnB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjE1NiIgeT0iNTUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICAgICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cmVjdCB4PSI4NiIgeT0iMTUxIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjYwIiByeD0iOSIgcnk9IjkiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzZjOGViZiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxODFweDsgbWFyZ2luLWxlZnQ6IDg3cHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6ICMwMDAwMDA7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IHdvcmQtd3JhcDogbm9ybWFsOyAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPS4uLgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PgogICAgICAgICAgICAgICAgPHRleHQgeD0iMTU2IiB5PSIxODUiIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWY9Li4uCiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvc3dpdGNoPgogICAgICAgIDwvZz4KICAgICAgICA8cmVjdCB4PSIxODEiIHk9IjI1MSIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjYzJjMmMyIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1kYXNoYXJyYXk9IjkgOSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPgogICAgICAgICAgICA8c3dpdGNoPgogICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyIgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiAxMThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyODFweDsgbWFyZ2luLWxlZnQ6IDE4MnB4OyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMDsgdGV4dC1hbGlnbjogY2VudGVyOyAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdGlua29mZi9yb3V0ZXIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjI0MSIgeT0iMjg1IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIEB0aW5rb2ZmL3JvdXRlcgogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L3N3aXRjaD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8c3dpdGNoPgogICAgICAgIDxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPgogICAgICAgIDxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL2Rlc2suZHJhdy5pby9zdXBwb3J0L3NvbHV0aW9ucy9hcnRpY2xlcy8xNjAwMDA0MjQ4NyIgdGFyZ2V0PSJfYmxhbmsiPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+CiAgICAgICAgICAgICAgICBWaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjEKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvYT4KICAgIDwvc3dpdGNoPgo8L3N2Zz4K"},4707:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/navigate-flow-client-spa.drawio-2e7ba5dbdda7f43739e675c27fbb5dc4.svg"},4975:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/navigate-flow-server.drawio-157b8a0419e96eca6833950f6cdc1d69.svg"},6554:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});const o=t.p+"assets/images/rehydrate-client.drawio-cfc2f71ea48e588f18e08621afd1dd25.svg"}}]);