(self.webpackChunk=self.webpackChunk||[]).push([[1501],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5344:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>d});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],a={id:"http-client-tokens",title:"http-client-tokens"},c=void 0,p={unversionedId:"references/tokens/http-client-tokens",id:"references/tokens/http-client-tokens",isDocsHomePage:!1,title:"http-client-tokens",description:"Tramvai tokens used for integration and extending @tramvai/module-http-client",source:"@site/tmp-docs/references/tokens/http-client-tokens.md",sourceDirName:"references/tokens",slug:"/references/tokens/http-client-tokens",permalink:"/docs/references/tokens/http-client-tokens",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tokens/http-client-tokens.md",version:"current",frontMatter:{id:"http-client-tokens",title:"http-client-tokens"},sidebar:"docs",previous:{title:"server-tokens",permalink:"/docs/references/tokens/server-tokens"},next:{title:"child-app-tokens",permalink:"/docs/references/tokens/child-app-tokens"}},l=[{value:"Tokens",id:"tokens",children:[]}],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tramvai tokens used for integration and extending ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type { ApiService, HttpClient } from '@tramvai/http-client';\nimport type { TinkoffRequestOptions, Agent } from '@tramvai/tinkoff-request-http-client-adapter';\n\nexport type HttpClientFactoryOptions = TinkoffRequestOptions & { name: string };\n\n/**\n * @description\n * Factory of HTTP clients with minimal base settings\n */\nexport const HTTP_CLIENT_FACTORY = createToken<(options: HttpClientFactoryOptions) => HttpClient>(\n  'HTTP_CLIENT_FACTORY'\n);\n\n/**\n * @description\n * Universal HTTP client for arbitrary requests\n */\nexport const HTTP_CLIENT = createToken<HttpClient>('HTTP_CLIENT');\n\n/**\n * @description\n * Global HTTP and HTTPS agents for all clients\n * https://nodejs.org/dist/latest-v16.x/docs/api/http.html#class-httpagent\n */\nexport const HTTP_CLIENT_AGENT = createToken<{\n  http: Agent;\n  https: Agent;\n}>('HTTP_CLIENT_AGENT');\n\n/**\n * @description\n * List of HTTP headers that are proxied from app request to all of the backend API\n */\nexport const API_CLIENT_PASS_HEADERS = createToken<string[]>('apiClientPassHeaders', {\n  multi: true,\n});\n\n/**\n * @description\n * Internal api for app server.\n * Uses the value of `APP_INFO_TOKEN` from di for constructing the request address\n */\nexport const PAPI_SERVICE = createToken<ApiService>('papi service');\n\n"))))}d.isMDXComponent=!0}}]);