(self.webpackChunk=self.webpackChunk||[]).push([[9258],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),s=o,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={id:"how-create-module",title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c?"},p=void 0,c={unversionedId:"how-to/how-create-module",id:"how-to/how-create-module",isDocsHomePage:!1,title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c?",description:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0435\u0439\u0441\u0430: \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0437\u0430\u0434\u0430\u0447\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 X-Frame-Options",source:"@site/tmp-docs/how-to/how-create-module.md",sourceDirName:"how-to",slug:"/how-to/how-create-module",permalink:"/docs/how-to/how-create-module",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-module.md",version:"current",frontMatter:{id:"how-create-module",title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c?"},sidebar:"docs",previous:{title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/guides/deploy"},next:{title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0430\u043d\u0434\u043b?",permalink:"/docs/how-to/how-create-bundle"}},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c",id:"\u0441\u043e\u0437\u0434\u0430\u0435\u043c-\u043f\u0443\u0441\u0442\u043e\u0439-\u043c\u043e\u0434\u0443\u043b\u044c",children:[]},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",children:[]},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-\u043d\u0430\u0448-\u043d\u043e\u0432\u044b\u0439-\u043c\u043e\u0434\u0443\u043b\u044c",children:[]},{value:"\u0418\u0442\u043e\u0433",id:"\u0438\u0442\u043e\u0433",children:[]}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0435\u0439\u0441\u0430: \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u0438\u043b\u0430\u0441\u044c \u0437\u0430\u0434\u0430\u0447\u0430 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")),(0,a.kt)("p",null,"\u0412 \u043e\u0431\u0449\u0435\u043c \u0432\u0438\u0434\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u044f \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u0430\u043f\u043e\u0432:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c"),(0,a.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"),(0,a.kt)("li",{parentName:"ol"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435")),(0,a.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u0435\u043c-\u043f\u0443\u0441\u0442\u043e\u0439-\u043c\u043e\u0434\u0443\u043b\u044c"},"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c"),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u043a\u043b\u0430\u0441\u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")," \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module } from '@tramvai/core';\n\n@Module({\n  providers: [],\n})\nexport class SecurityModule {}\n")),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0443\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043d\u043e \u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u0434\u0435\u043b\u0430\u0442\u044c."),(0,a.kt)("h3",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u0432 \u043f\u043e\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"providers"),". \u0423 \u043d\u0430\u0441 \u0431\u044b\u043b\u0430 \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u044d\u0434\u0435\u0440\u044b, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"commandLineListTokens"),", \u0447\u0442\u043e \u0431\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"responseManager")," \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0445\u044d\u0434\u0435\u0440\u0430\u0445."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module, commandLineListTokens, RESPONSE_MANAGER_TOKEN, provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: commandLineListTokens.resolvePageDeps,\n      multi: true,\n      useFactory: ({ responseManager }: { responseManager: typeof RESPONSE_MANAGER_TOKEN }) =>\n        function securityHeader() {\n          responseManager.setHeader('X-Frame-Options', 'sameorigin');\n        },\n      deps: {\n        responseManager: RESPONSE_MANAGER_TOKEN,\n      },\n    }),\n  ],\n})\nexport class SecurityModule {}\n")),(0,a.kt)("p",null,"\u041c\u044b \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u043c\u0443\u043b\u044c\u0442\u0438-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u043c\u0435\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory")),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory")," \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u043c\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"deps"),", \u0438 \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"securityHeader"),", \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u044b \u0432 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0438\u0448\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435, \u0438 \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u043d\u0430\u0448\u0443 \u0446\u0435\u043b\u044c."),(0,a.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435-\u043d\u0430\u0448-\u043d\u043e\u0432\u044b\u0439-\u043c\u043e\u0434\u0443\u043b\u044c"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c"),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0431\u044b \u043e\u043d \u0441\u043c\u043e\u0433 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { SecurityModule } from '@tramvai/module-security';\n\ncreateApp({\n  modules: [SecurityModule],\n});\n")),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442 \u0441\u0432\u043e\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0438 \u043d\u0430\u0447\u043d\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f."),(0,a.kt)("p",null,"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043d\u043e \u0438 \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u043c\u043e\u0434\u0443\u043b\u044c. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u0431\u043b\u043e\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," \u0438 \u0442\u043e\u0433\u0434\u0430 \u043f\u0440\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCommonModule")," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module } from '@tramvai/core';\nimport { SecurityModule } from '@tramvai/module-security';\n\n@Module({\n  imports: [SecurityModule],\n  providers: [],\n})\nexport class MyCommonModule {}\n")),(0,a.kt)("h3",{id:"\u0438\u0442\u043e\u0433"},"\u0418\u0442\u043e\u0433"),(0,a.kt)("p",null,"\u0411\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0445\u044d\u0434\u0435\u0440\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/module"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0434\u043e\u043a\u0430 \u043f\u043e \u043c\u043e\u0434\u0443\u043b\u044f\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/references/tramvai/create-app"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0434\u043e\u043a\u0430 \u043f\u043e createApp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/concepts/di"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0434\u043e\u043a\u0430 \u043f\u043e DI"))))}d.isMDXComponent=!0}}]);