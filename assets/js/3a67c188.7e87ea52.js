(self.webpackChunk=self.webpackChunk||[]).push([[4182],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2802:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={id:"universal",title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"},l=void 0,s={unversionedId:"guides/universal",id:"guides/universal",isDocsHomePage:!1,title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",description:"\u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a tramvai \u0438 \u0435\u0433\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u043c\u0438, \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\u0445. tramvai cli \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043a\u043e\u0434 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0432 \u043d\u0443\u0436\u043d\u043e\u043c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e - package.json, dependency injection \u0438 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u043a\u043e\u0434\u0435 \u043d\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435.",source:"@site/tmp-docs/guides/universal.md",sourceDirName:"guides",slug:"/guides/universal",permalink:"/docs/guides/universal",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/universal.md",version:"current",frontMatter:{id:"universal",title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"},sidebar:"docs",previous:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430",permalink:"/docs/guides/bundle-optimization"},next:{title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/guides/deploy"}},c=[{value:"\u041a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u043a\u043e\u0434-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]},{value:"npm \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",id:"npm-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",children:[]},{value:"tramvai \u043c\u043e\u0434\u0443\u043b\u0438",id:"tramvai-\u043c\u043e\u0434\u0443\u043b\u0438",children:[]}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a tramvai \u0438 \u0435\u0433\u043e \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u043c\u0438, \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\u0445. tramvai cli \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043a\u043e\u0434 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0432 \u043d\u0443\u0436\u043d\u043e\u043c \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e. \u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e - package.json, dependency injection \u0438 \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432 \u043a\u043e\u0434\u0435 \u043d\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435."),(0,o.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a webpack \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"target"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.jonathancreamer.com/how-webpack-decides-what-entry-to-load-from-a-package-json/"},"\u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435"),"."),(0,o.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0438\u0434\u043e\u0432:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("li",{parentName:"ul"},"npm \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"),(0,o.kt)("li",{parentName:"ul"},"tramvai \u043c\u043e\u0434\u0443\u043b\u0438 \u0438 DI \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b")),(0,o.kt)("h3",{id:"\u043a\u043e\u0434-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u041a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u0435\u0442\u043e\u043a \u043a\u043e\u0434\u0430 \u0438\u043b\u0438 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a:"),(0,o.kt)("h4",{id:"processenv"},"process.env"),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 tramvai cli \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0432\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0435 \u043d\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 - ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.SERVER")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.BROWSER"),". Webpack \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u0438\u0442 \u043a\u043e\u0434 \u0441 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c, \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434 \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0435\u0442 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0431\u0430\u043d\u0434\u043b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (process.env.BROWSER) {\n  console.log(window.innerWidth, window.innerHeight);\n}\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438\u0437 production \u0441\u0431\u043e\u0440\u043a\u0438, \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (process.env.NODE_ENV === 'development') {\n  console.log('\u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f');\n}\n")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u0438\u0437 \u0441\u0431\u043e\u0440\u043a\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043c\u0435\u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0443\u0440\u043e\u0432\u043d\u0435\u0432\u044b\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," \u0432\u043d\u0443\u0442\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (process.env.BROWSER) {\n  const logger = require('@tinkoff/logger');\n  const log = logger('debug');\n\n  log.info(window.location.href);\n}\n")),(0,o.kt)("h4",{id:"typeof-window"},"typeof window"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/babel-plugin-transform-define"},"babel \u043f\u043b\u0430\u0433\u0438\u043d"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof window")," \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0439 \u0441\u0431\u043e\u0440\u043a\u0435 \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"'undefined'"),", \u0430 \u0438\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0439 - \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"'object'"),", \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 webpack'\u0443 \u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u043b\u0438\u0448\u043d\u0438\u0439 \u043a\u043e\u0434, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.BROWSER"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"if (typeof window !== 'undefined') {\n  console.log(window.innerWidth, window.innerHeight);\n}\n")),(0,o.kt)("h4",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u043c\u0435\u043d\u044f\u0442\u044c \u0446\u0435\u043b\u044b\u0439 \u0444\u0430\u0439\u043b, \u0430 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u043a\u043e\u0434\u0430, \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u043f\u0430\u043f\u043a\u0443, \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0439, \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// module.server.js\nexport const CONSTANT = 'SERVER_SIDE';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// module.client.js\nexport const CONSTANT = 'CLIENT_SIDE';\n")),(0,o.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435, \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u0430\u043d\u0434\u043b\u0435\u0440\u0443, \u043a\u0430\u043a\u043e\u0439 \u043a\u043e\u0434 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0439. \u041f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0431\u0430\u043d\u0434\u043b\u0430, \u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "main": "./module.server.js",\n  "browser": "./module.client.js"\n}\n')),(0,o.kt)("h3",{id:"npm-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"},"npm \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0430, \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443 \u043f\u0440\u0438\u043c\u0435\u0440\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u043a\u043b\u0430\u0441\u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"Library"),", \u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"LIBRARY_CONSTANT"),"."),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0434\u0432\u0435 \u0442\u043e\u0447\u043a\u0438 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043d\u0430\u0448\u0443 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 - ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"client.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// server.js\nexport class Library {\n  constructor() {\n    // ...\n  }\n}\n\nexport const LIBRARY_CONSTANT = 'SERVER_SIDE_LIBRARY';\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// client.js\nexport class Library {\n  constructor() {\n    // ...\n  }\n}\n\nexport const LIBRARY_CONSTANT = 'CLIENT_SIDE_LIBRARY';\n")),(0,o.kt)("p",null,"\u0414\u0430\u043b\u0435\u0435, \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u043d\u0430\u0434\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u0430\u043d\u0434\u043b\u0435\u0440\u0443, \u043a\u0430\u043a\u043e\u0439 \u043a\u043e\u0434 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0439. \u041f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0431\u0430\u043d\u0434\u043b\u0430, \u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "library",\n  "version": "0.1.0",\n  "main": "server.js",\n  "browser": "client.js",\n  "dependencies": { ... }\n}\n')),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438, \u043c\u043e\u0436\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0435 \u0432 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0438 \u043d\u0435 \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u044c\u0441\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0443\u044e \u0438\u043c\u0435\u043d\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { LIBRARY_CONSTANT } from 'library';\n\n// \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 tramvai start, \u0443\u0432\u0438\u0434\u0438\u043c 'SERVER_SIDE_LIBRARY' \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435, \u0438 'CLIENT_SIDE_LIBRARY' \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\nconsole.log(LIBRARY_CONSTANT);\n")),(0,o.kt)("h3",{id:"tramvai-\u043c\u043e\u0434\u0443\u043b\u0438"},"tramvai \u043c\u043e\u0434\u0443\u043b\u0438"),(0,o.kt)("p",null,"\u041d\u043e\u0432\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0432 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0438 \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\u0445, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0420\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0433\u0438\u0434\u0440\u0430\u0446\u0438\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e DOM \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,o.kt)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0443\u0441\u043a https \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,o.kt)("li",{parentName:"ul"},"\u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f service worker'\u0430")),(0,o.kt)("p",null,"\u041f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435, \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 tramvai, \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d tramvai \u043c\u043e\u0434\u0443\u043b\u044f, \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run generate:module"),", \u0441\u0440\u0430\u0437\u0443 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u043e\u0447\u043a\u0438 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"client.js")," , \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("p",null,"\u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043c \u044d\u0442\u043e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u043e\u0434\u0443\u043b\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 ",(0,o.kt)("inlineCode",{parentName:"p"},"cookie"),":"),(0,o.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface ICookie {\n  get(key);\n  set(key, value);\n}\n")),(0,o.kt)("p",null,"\u0418 \u0440\u0430\u0437\u043d\u044b\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/cookie.server.ts\n// \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442\u044b Request \u0438 Response \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043a\u0443\u043a\u0430\u043c\u0438\nexport class Cookie implements ICookie {\n  constructor({ req, res }) {\n    // ...\n  }\n  get(key) {\n    // ...\n  }\n  set(key, value) {\n    // ...\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/cookie.client.ts\n// \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0443 Window\nexport class Cookie implements ICookie {\n  get(key) {\n    // ...\n  }\n  set(key, value) {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441 \u0432 DI \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u043e\u0434\u0443\u043b\u0435\u0439:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/server.ts\nimport { Module, Scope, provide } from '@tramvai/core';\nimport { REQUEST, RESPONSE } from '@tramvai/tokens-common';\nimport { Cookie } from './cookie.server';\n\n@Module({\n  providers: [\n    provide({\n      provide: 'cookie',\n      useClass: Cookie,\n      scope: Scope.REQUEST,\n      deps: {\n        req: REQUEST,\n        res: RESPONSE,\n      },\n    }),\n  ],\n})\nexport class CookieModule {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// src/client.ts\nimport { Module, Scope, provide } from '@tramvai/core';\nimport { Cookie } from './cookie.client';\n\n@Module({\n  providers: [\n    provide({\n      provide: 'cookie',\n      useClass: Cookie,\n      scope: Scope.SINGLETON,\n    }),\n  ],\n})\nexport class CookieModule {}\n")),(0,o.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "@tramvai/module-cookie",\n  "version": "0.1.0",\n  "main": "lib/server.js",\n  "browser": "lib/client.js",\n  "dependencies": { ... }\n}\n')),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 \u043c\u043e\u0434\u0443\u043b\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u043c \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a cookies, \u0438 \u043d\u0435 \u0434\u0443\u043c\u0430\u0435\u043c \u043f\u0440\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435, \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp, commandLineListTokens, provide } from '@tramvai/core';\nimport { CookieModule } from '@tramvai/module-cookie';\n\ncreateApp({\n  name: 'app',\n  modules: [\n    // ...\n    CookieModule,\n  ],\n  providers: [\n    // ...\n    provide({\n      provide: commandLineListTokens.init,\n      useFactory: ({ cookie }) => {\n        console.log('wuid', cookie.get('wuid'));\n      },\n      deps: {\n        cookie: 'cookie',\n      },\n    }),\n  ],\n  // ...\n});\n")))}u.isMDXComponent=!0}}]);