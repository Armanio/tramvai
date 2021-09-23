(self.webpackChunk=self.webpackChunk||[]).push([[6370],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6109:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>s,default:()=>d});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),u=["components"],l={id:"router",title:"router"},i=void 0,p={unversionedId:"references/libs/router",id:"references/libs/router",isDocsHomePage:!1,title:"router",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430. \u041c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0442\u0430\u043a \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435. \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u043e\u0440\u0444\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.",source:"@site/tmp-docs/references/libs/router.md",sourceDirName:"references/libs",slug:"/references/libs/router",permalink:"/en/docs/references/libs/router",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/router.md",version:"current",frontMatter:{id:"router",title:"router"},sidebar:"docs",previous:{title:"React Hooks",permalink:"/en/docs/references/libs/react-hooks"},next:{title:"safe-strings",permalink:"/en/docs/references/libs/safe-strings"}},s=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"Explanation",id:"explanation",children:[{value:"\u0412\u0435\u0440\u0441\u0438\u044f \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",id:"\u0432\u0435\u0440\u0441\u0438\u044f-\u0434\u043b\u044f-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",children:[]},{value:"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0441\u0431\u0435\u0437 \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432",id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0440\u043e\u0443\u0442\u0438\u043d\u0433-\u0441\u0431\u0435\u0437-\u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432",children:[]},{value:"Router Guards",id:"router-guards",children:[]},{value:"\u0425\u0443\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432",id:"\u0445\u0443\u043a\u0438-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432",children:[]}]},{value:"API",id:"api",children:[{value:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u043e\u0443\u0442\u0435 \u0438\u043b\u0438 \u0443\u0440\u043b\u0435",id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445-\u043e-\u0442\u0435\u043a\u0443\u0449\u0435\u043c-\u0440\u043e\u0443\u0442\u0435-\u0438\u043b\u0438-\u0443\u0440\u043b\u0435",children:[]},{value:"\u0418\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430",id:"\u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430",children:[]},{value:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 query",id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-query",children:[]},{value:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 React",id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-react",children:[]}]},{value:"How to",id:"how-to",children:[]}],c={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430. \u041c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0442\u0430\u043a \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435. \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043f\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043e \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u043e\u0440\u0444\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."),(0,o.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,o.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"@tinkoff/router")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/router\n")),(0,o.kt)("p",null,"\u0418 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Router } from '@tinkoff/router';\n\nconst router = new Router();\n")),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u043a\u0430\u043a \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0442\u0430\u043a \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435."),(0,o.kt)("li",{parentName:"ul"},"\u0415\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u043b\u0437\u0438\u0447\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430: \u0441\u043e \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430\u043c\u0438 \u0438\u043b\u0438 \u0431\u0435\u0437."),(0,o.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0440\u043e\u0443\u0442\u0430 \u043f\u0440\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0435\u0441\u0442\u044c Guards."),(0,o.kt)("li",{parentName:"ul"},"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u0442\u0430\u043f\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u0447\u0435\u0440\u0435\u0437 \u0445\u0443\u043a\u0438"),(0,o.kt)("li",{parentName:"ul"},"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438 \u0445\u0443\u043a\u0438 \u0434\u043b\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u043e\u043c \u0438\u0437 \u0440\u0435\u0430\u043a\u0442")),(0,o.kt)("h3",{id:"\u0432\u0435\u0440\u0441\u0438\u044f-\u0434\u043b\u044f-\u0441\u0435\u0440\u0432\u0435\u0440\u0430-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"},"\u0412\u0435\u0440\u0441\u0438\u044f \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),(0,o.kt)("p",null,"\u0414\u043e\u0441\u0442\u0430\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0438\u0437 \u0441\u0430\u043c\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u0443\u0436\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0432 package.json \u0432\u0435\u0440\u043d\u0451\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router } from '@tinkoff/router';\n")),(0,o.kt)("h3",{id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0440\u043e\u0443\u0442\u0438\u043d\u0433-\u0441\u0431\u0435\u0437-\u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"},"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0441\\\u0431\u0435\u0437 \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"),(0,o.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u044d\u0441\u043a\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u043e\u0443\u0442\u0438\u043d\u0433 \u0441 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430\u043c\u0438. \u0415\u0441\u043b\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043f\u0430-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c, \u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router, SpaHistory } from '@tinkoff/router';\nimport { NoSpaRouter } from '@tinkoff/router';\n\nconst spaRouter = new Router({ history: new SpaHistory() });\nconst noSpaRouter = new NoSpaRouter();\n")),(0,o.kt)("h3",{id:"router-guards"},"Router Guards"),(0,o.kt)("p",null,"\u0413\u0443\u0430\u0440\u0434\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0442\u043e\u0433\u043e \u0438\u043b\u0438 \u0438\u043d\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u0434\u043b\u044f \u043a\u043e\u043d\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430. \u0418\u0437 \u0433\u0443\u0430\u0440\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0438\u043b\u0438 \u0438\u043d\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationGuard } from '@tinkoff/router';\n\nexport const myGuard: NavigationGuard = async ({ to }) => {\n  if (to.config.blocked) {\n    return false; // \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\n  }\n\n  if (to.config.redirect) {\n    return '/login/'; // \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u0440\u0435\u0434\u0438\u0440\u0435\u043a\u0442 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443\n  }\n\n  // \u0435\u0441\u043b\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e\n};\n")),(0,o.kt)("h3",{id:"\u0445\u0443\u043a\u0438-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"},"\u0425\u0443\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432"),(0,o.kt)("p",null,"\u0425\u0443\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u0442\u0430\u043f\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationHook } from '@tinkoff/router';\n\nexport const myHook: NavigationHook = async ({ from, to, url, fromUrl }) => {\n  console.log(`navigating from ${from} to route ${to}`);\n};\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445-\u043e-\u0442\u0435\u043a\u0443\u0449\u0435\u043c-\u0440\u043e\u0443\u0442\u0435-\u0438\u043b\u0438-\u0443\u0440\u043b\u0435"},"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u043e\u0443\u0442\u0435 \u0438\u043b\u0438 \u0443\u0440\u043b\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentRoute(); // \u0432\u0435\u0440\u043d\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0440\u043e\u0443\u0442\nrouter.getCurrentUrl(); // \u0432\u0435\u0440\u043d\u0451\u0442 \u0440\u0430\u0441\u043f\u0430\u0440\u0448\u0435\u043d\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0443\u0440\u043b\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b\n")),(0,o.kt)("h3",{id:"\u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430"},"\u0418\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u0434\u0432\u0430 \u043c\u0435\u0442\u043e\u0434\u0430 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u044d\u0442\u0438\u0445 \u0434\u0432\u0443\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u0447\u0442\u043e \u043e\u0434\u0438\u043d \u0438\u0437 \u043d\u0438\u0445 \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0441 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0442\u044f\u0436\u0435\u043b\u043e\u0432\u0435\u0441\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043f\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412\u0442\u043e\u0440\u043e\u0439 \u0436\u0435 \u043c\u0435\u0442\u043e\u0434 \u0441\u043b\u0443\u0436\u0438\u0442 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u043e\u0443\u0442\u0430: \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0430\u043c\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430."),(0,o.kt)("h4",{id:"navigate"},"navigate"),(0,o.kt)("p",null,"\u0418\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434, \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.navigate('/test');\nrouter.navigate({ url: './test', query: { a: '1' } });\n")),(0,o.kt)("p",null,"\u0425\u0443\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"beforeResolve"),(0,o.kt)("li",{parentName:"ul"},"beforeNavigate"),(0,o.kt)("li",{parentName:"ul"},"afterNavigate")),(0,o.kt)("h4",{id:"updatecurrentroute"},"updateCurrentRoute"),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u043e\u0443\u0442\u0435 (\u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435) \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.updateCurrentRoute({ params: { id: 'abc' } });\nrouter.updateCurrentRoute({ query: { a: '1' } });\n")),(0,o.kt)("p",null,"\u0425\u0443\u043a\u0438:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"beforeUpdateCurrent"),(0,o.kt)("li",{parentName:"ul"},"afterUpdateCurrent")),(0,o.kt)("h3",{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-query"},"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 query"),(0,o.kt)("h4",{id:"\u043e\u043f\u0446\u0438\u044f-query"},"\u041e\u043f\u0446\u0438\u044f query"),(0,o.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044c search-\u0441\u0442\u0440\u043e\u043a\u0443 \u0434\u043b\u044f \u0443\u0440\u043b\u0430 \u0432 \u0432\u0438\u0434\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u043e\u043f\u0446\u0438\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435. \u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 query \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u043e\u0447\u0438\u0449\u0435\u043d\u043e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a', b: 'b' } });\nrouter.updateCurrentRoute({ query: { a: 'a', b: 'b' } });\n\nrouter.getCurrentUrl().query; // { a: 'a', b: 'b' }\n")),(0,o.kt)("h4",{id:"preservequery"},"preserveQuery"),(0,o.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 query \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0432 \u043d\u043e\u0432\u043e\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: 'a' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { a: 'a', c: 'c' }\n")),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430 query \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c undefined, \u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u043d\u043e\u0432\u043e\u043c query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { a: 'a', b: 'b' }\n\nrouter.navigate({ query: { a: undefined, c: 'c' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: undefined, c: 'c' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { b: 'b', c: 'c' }\n")),(0,o.kt)("h3",{id:"\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-react"},"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 React"),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 React-\u0445\u0443\u043a\u043e\u0432 \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u043e\u043c"),(0,o.kt)("h4",{id:"useroute"},"useRoute"),(0,o.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u043e\u0443\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useRoute } from '@tinkoff/router';\n\nexport const Component = () => {\n  const route = useRoute();\n\n  return <div>Route path: {route.actualPath}</div>;\n};\n")),(0,o.kt)("h4",{id:"useurl"},"useUrl"),(0,o.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u043e\u0443\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useUrl } from '@tinkoff/router';\n\nexport const Component = () => {\n  const url = useUrl();\n\n  return <div>Url query: {JSON.stringify(url.query)}</div>;\n};\n")),(0,o.kt)("h4",{id:"usenavigate"},"useNavigate"),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043a\u0430\u043b\u0431\u0435\u043a \u0441 \u0432\u044b\u0437\u043e\u0432\u043e\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u043b\u0438 \u043f\u043e\u0432\u0435\u0441\u0438\u0442\u044c \u043a\u0430\u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0441\u043e\u0431\u044b\u0442\u0438\u0439"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const Cmp = () => {\n  const navigate = useNavigate('/test/');\n\n  return <div onClick={navigate}>Test</div>;\n};\n")),(0,o.kt)("h4",{id:"link"},"Link"),(0,o.kt)("p",null,"\u041e\u0431\u0451\u0440\u0442\u043a\u0430 \u0434\u043b\u044f \u0440\u0435\u0430\u043a\u0442-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0433\u043e \u043a\u043b\u0438\u043a\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u043c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 children \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 Link \u0440\u0435\u0430\u043a\u0442-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0435\u043d \u044d\u0442\u043e\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0438 \u0432 \u043d\u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u043f\u0440\u043e\u043f\u0441\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438. \u0412 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0435\u043d ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," \u0442\u0435\u0433 \u0441 children \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Link } from '@tinkoff/router';\nimport CustomLink from '@custom-scope/link';\n\nexport const Component = () => {\n  return (\n    <Link url=\"/test/\">\n      <CustomLink />\n    </Link>\n  );\n};\n\nexport const WrapLink = () => {\n  return <Link url=\"/test/\">Click me</Link>;\n};\n")),(0,o.kt)("h2",{id:"how-to"},"How to"))}d.isMDXComponent=!0}}]);