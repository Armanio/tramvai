(self.webpackChunk=self.webpackChunk||[]).push([[5059],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,m=y["".concat(u,".").concat(d)]||y[d]||s[d]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6746:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>p,toc:()=>l,default:()=>y});var n=r(2122),a=r(9756),c=(r(7294),r(3905)),o=["components"],i={id:"react-query",title:"react-query"},u=void 0,p={unversionedId:"references/modules/react-query",id:"references/modules/react-query",isDocsHomePage:!1,title:"react-query",description:"\u041c\u043e\u0434\u0443\u043b\u044c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 react-query \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b @tramvai/react-query",source:"@site/tmp-docs/references/modules/react-query.md",sourceDirName:"references/modules",slug:"/references/modules/react-query",permalink:"/en/docs/references/modules/react-query",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/react-query.md",version:"current",frontMatter:{id:"react-query",title:"react-query"},sidebar:"docs",previous:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 papi",permalink:"/en/docs/features/papi/introduction"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 @tramvai/react-query",permalink:"/en/docs/how-to/react-query-usage"}},l=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"Explanation",id:"explanation",children:[{value:"Server",id:"server",children:[]},{value:"Client",id:"client",children:[]}]},{value:"API",id:"api",children:[]},{value:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b",id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b",children:[]}],s={toc:l};function y(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 ",(0,c.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/"},"react-query")," \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b ",(0,c.kt)("a",{parentName:"p",href:"/en/docs/features/react-query/api"},"@tramvai/react-query")),(0,c.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,c.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,c.kt)("inlineCode",{parentName:"p"},"@tramvai/module-react-query")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-react-query\n")),(0,c.kt)("p",null,"\u0418 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ReactQueryModule } from '@tramvai/module-react-query';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [...ReactQueryModule],\n});\n")),(0,c.kt)("h2",{id:"explanation"},"Explanation"),(0,c.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 DI \u0438\u043d\u0441\u0442\u0430\u043d\u0441 ",(0,c.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClient"},"react-query QueryClient")," \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 DI ",(0,c.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClient#queryclientsetdefaultoptions"},"\u043e\u043f\u0446\u0438\u0438 \u0434\u043b\u044f \u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"),"."),(0,c.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,c.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/QueryClientProvider"},"React-\u043e\u0431\u0451\u0440\u0442\u043a\u0438 \u0434\u043b\u044f react-query")," \u0432 \u0440\u0435\u043d\u0434\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 query \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432."),(0,c.kt)("h3",{id:"server"},"Server"),(0,c.kt)("p",null,"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0435\u0433\u0438\u0434\u0440\u0430\u0446\u0438\u044e \u043f\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u0445 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442"),(0,c.kt)("h3",{id:"client"},"Client"),(0,c.kt)("p",null,"\u0412 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0433\u0438\u0434\u0440\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,c.kt)("h2",{id:"api"},"API"),(0,c.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0432\u0435\u0449\u0438 \u0432 DI \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,c.kt)("a",{parentName:"p",href:"/en/docs/features/react-query/api"},"@tramvai/react-query"),"\u0438 \u0441\u0430\u043c \u043f\u043e \u0441\u0435\u0431\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f QueryClient \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c QueryClient \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e (\u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c)"),(0,c.kt)("h2",{id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b"},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type { QueryClient, DefaultOptions } from 'react-query';\nimport type { DehydratedState } from 'react-query/hydration';\n\n/**\n * @description\n * [\u041a\u043b\u0438\u0435\u043d\u0442 react-query](https://react-query.tanstack.com/reference/QueryClient)\n */\n\nexport const QUERY_CLIENT_TOKEN = createToken<QueryClient>('reactQuery queryClient');\n\n/**\n * @description\n * [\u0414\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 react-query](https://react-query.tanstack.com/guides/important-defaults)\n */\nexport const QUERY_CLIENT_DEFAULT_OPTIONS_TOKEN = createToken<DefaultOptions>(\n  'reactQuery queryClientDefaultOptions'\n);\n\n/**\n * @description\n * [\u0421\u0442\u0435\u0439\u0442 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 react-query](https://react-query.tanstack.com/reference/hydration/dehydrate), \u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435\n */\nexport const QUERY_CLIENT_DEHYDRATED_STATE_TOKEN = createToken<DehydratedState>(\n  'reactQuery queryClientDehydratedState'\n);\n\n"))))}y.isMDXComponent=!0}}]);