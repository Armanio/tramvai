(self.webpackChunk=self.webpackChunk||[]).push([[1813],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1573:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var o=r(2122),n=r(9756),i=(r(7294),r(3905)),s=["components"],a={id:"hooks",title:"hooks"},l=void 0,p={unversionedId:"references/libs/hooks",id:"references/libs/hooks",isDocsHomePage:!1,title:"hooks",description:"\u0425\u0443\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u0431\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u0442\u0430\u043f\u0430\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",source:"@site/tmp-docs/references/libs/hooks.md",sourceDirName:"references/libs",slug:"/references/libs/hooks",permalink:"/en/docs/references/libs/hooks",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/hooks.md",version:"current",frontMatter:{id:"hooks",title:"hooks"},sidebar:"docs",previous:{title:"express-terminus",permalink:"/en/docs/references/libs/express-terminus"},next:{title:"error-handlers",permalink:"/en/docs/references/libs/error-handlers"}},c=[{value:"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",id:"\u043a\u0430\u043a-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:[]}]},{value:"API",id:"api",children:[]},{value:"\u0425\u0443\u043a\u0438",id:"\u0445\u0443\u043a\u0438",children:[{value:"\u0412\u0438\u0434\u044b",id:"\u0432\u0438\u0434\u044b",children:[]}]}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0425\u0443\u043a\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u043a\u0438\u0445 \u043b\u0438\u0431\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u044d\u0442\u0430\u043f\u0430\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,i.kt)("h2",{id:"\u043a\u0430\u043a-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"},"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),(0,i.kt)("p",null,"\u041f\u043e \u0441\u0443\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 2 \u044d\u0442\u0430\u043f\u0430:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u041c\u044b \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0432 \u043a\u043e\u0434 \u0440\u0430\u043d\u043d\u0435\u0440\u044b \u0445\u0443\u043a\u043e\u0432, \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 runAsyncHooks, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0432 \u043d\u0435\u0433\u043e \u043a\u043b\u044e\u0447, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u0423 \u043d\u0430\u0441 \u0442\u0435\u043f\u0435\u0440\u044c \u0435\u0441\u0442\u044c \u0441\u043b\u043e\u0442, \u043a\u0443\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0445\u0443\u043a\u0438 \u0438 \u043e\u043d\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u0434\u0430."),(0,i.kt)("li",{parentName:"ol"},"\u041c\u044b \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0438\u0443\u043c \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439 \u0441 \u043f\u043e\u043c\u043e\u0448\u044c\u044e registerHooks. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e, \u043f\u043e \u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u043d\u043d\u0435\u0440\u043e\u0432 \u0438\u0437 \u043f\u0443\u043d\u043a\u0442\u0430 1.")),(0,i.kt)("h3",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,i.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0438\u0434\u043e\u0432 \u0445\u0443\u043a\u043e\u0432 \u0438 \u043e\u043d\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b, \u043f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u043a\u043e\u0433\u0434\u0430 \u043c\u044b \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u043a\u043b\u044e\u0447\u0435\u0439, \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0438 \u0433\u0434\u0435. \u0422\u0430\u043a\u0436\u0435 \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u043d\u0430\u0447\u0435 \u0443 \u043d\u0430\u0441 \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0431\u0430\u0433\u0438 \u0441 \u043f\u043e\u0442\u0435\u0440\u0435\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043d\u0435\u0441\u043e\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0445\u0443\u043a\u043e\u0432."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h4",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"hook-runner"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Hooks } from '@tinkoff/hook-runner';\n\nconst hookRunner = new Hooks();\n")),(0,i.kt)("h4",{id:"registerhookskey-hooks"},"registerHooks(key, hooks)"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430."),(0,i.kt)("h4",{id:"runhookskey-context-payload-options"},"runHooks(key, context, payload, options)"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0445\u0443\u043a\u043e\u0432, payload \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u0432\u0441\u0435 \u0445\u0443\u043a\u0438 \u0438 \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442."),(0,i.kt)("h4",{id:"runasynchookskey-context-payload-options"},"runAsyncHooks(key, context, payload, options)"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0445\u0443\u043a\u043e\u0432 \u0430\u0441\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0448\u044c\u044e setImmediate. \u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442 payload \u043f\u043e\u043f\u0430\u0434\u0435\u0442 \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0445\u0443\u043a"),(0,i.kt)("h4",{id:"runpromisehookskey-context-options--payload--promise"},"runPromiseHooks(key, context, options) => (payload) => Promise"),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0445\u0443\u043a\u0438 \u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432. \u041e\u0431\u044a\u0435\u043a\u0442 payload \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0432\u0441\u0435\u0439 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0445\u0443\u043a\u043e\u0432"),(0,i.kt)("h2",{id:"\u0445\u0443\u043a\u0438"},"\u0425\u0443\u043a\u0438"),(0,i.kt)("h3",{id:"\u0432\u0438\u0434\u044b"},"\u0412\u0438\u0434\u044b"),(0,i.kt)("h4",{id:"\u0434\u043b\u044f-\u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432"},"\u0414\u043b\u044f \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432"),(0,i.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 (context, payload, options), \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435 payload. \u041d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0446\u0435\u043f\u043e\u0447\u0435\u043a \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432"),(0,i.kt)("h4",{id:"\u0434\u043b\u044f-\u0430\u0441\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445"},"\u0414\u043b\u044f \u0430\u0441\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 (context, payload, options), \u043c\u044b \u0430\u0441\u0441\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0445\u0443\u043a\u0438. \u041d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043d\u0435\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0445\u0443\u043a\u043e\u0432."),(0,i.kt)("h4",{id:"\u0434\u043b\u044f-\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445"},"\u0414\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 (context, payload, options), \u043c\u044b \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0445\u0443\u043a\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0432 \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0445\u0443\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u043e\u0448\u043b\u043e\u0433\u043e."))}d.isMDXComponent=!0}}]);