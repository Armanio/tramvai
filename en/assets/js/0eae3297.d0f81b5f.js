(self.webpackChunk=self.webpackChunk||[]).push([[4133],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8505:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>m});var r=t(2122),o=t(9756),l=(t(7294),t(3905)),i=["components"],a={id:"serverInline",title:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 inline-\u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"},s=void 0,c={unversionedId:"references/cli/serverInline",id:"references/cli/serverInline",isDocsHomePage:!1,title:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 inline-\u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",description:"\u0418\u043d\u043e\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u043e\u0431\u0440\u0430\u0442\u044c js-\u043a\u043e\u0434 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440 html. \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u0435\u0441\u043b\u0438 \u0432\u0435\u0440\u0441\u0438\u044f EcmaScript, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0430\u044f \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u0434\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u0442\u0430\u043a\u043e\u0435 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043d\u0430 \u043c\u044b \u043f\u0438\u0448\u0435\u043c es2015+ \u043a\u043e\u0434 \u0438 \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b \u0441 es5). \u0410 \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043a\u043e\u0434 \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0442\u043e \u043e\u043d \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e nodejs, \u0447\u0442\u043e \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432.",source:"@site/tmp-docs/references/cli/serverInline.md",sourceDirName:"references/cli",slug:"/references/cli/serverInline",permalink:"/en/docs/references/cli/serverInline",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/cli/serverInline.md",version:"current",frontMatter:{id:"serverInline",title:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 inline-\u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"},sidebar:"docs",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0434\u043e\u043a\u0430",permalink:"/en/docs/references/cli/base"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 browserslist",permalink:"/en/docs/references/cli/browserslist"}},p=[{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u043e\u0431\u0440\u0430\u0442\u044c js-\u043a\u043e\u0434 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043d\u0434\u0435\u0440 html. \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u0435\u0441\u043b\u0438 \u0432\u0435\u0440\u0441\u0438\u044f EcmaScript, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0430\u044f \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043a\u043e\u0434\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430 (\u0442\u0430\u043a\u043e\u0435 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u043d\u0430 \u043c\u044b \u043f\u0438\u0448\u0435\u043c es2015+ \u043a\u043e\u0434 \u0438 \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b \u0441 es5). \u0410 \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043a\u043e\u0434 \u0438 \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0442\u043e \u043e\u043d \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e nodejs, \u0447\u0442\u043e \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432."),(0,l.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e webpack + babel \u0443\u0436\u0435 \u0438 \u0442\u0430\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u044f\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u043d\u0443\u0436\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043c \u043f\u043e \u0441\u0443\u0442\u0438 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u043d\u0435\u043a\u0438\u0439 \u043a\u043e\u0434 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u043f\u043e\u0442\u043e\u043c\u0443 \u0435\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043e\u0441\u043e\u0431\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,l.kt)("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u043a\u043e\u0434 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u043d\u0435\u0441\u0435\u043d \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b"),(0,l.kt)("li",{parentName:"ul"},"\u0432 \u0441\u0430\u043c\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 - \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0442\u0440\u0435\u0431\u0443\u044e\u0442 runtime \u0432\u0435\u0431\u043f\u0430\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442 \u043e \u0442\u0435\u0445 \u0444\u0430\u0439\u043b\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,l.kt)("li",{parentName:"ul"},"\u0441\u0430\u043c \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d \u0432 \u0432\u0438\u0434\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0438 \u044d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0435\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0432\u043d\u0435 \u0442\u0435\u043b\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b"),(0,l.kt)("li",{parentName:"ul"},"\u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u043e\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},".inline(.es)?.[tj]s")," - \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0444\u043b\u0430\u0433, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0447\u0442\u043e \u0444\u0430\u0439\u043b \u043d\u0430\u0434\u043e \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u043e\u043c"),(0,l.kt)("li",{parentName:"ul"},"\u0432\u043c\u0435\u0441\u0442\u043e \u0438\u043d\u043b\u0430\u0439\u043d \u043a\u043e\u0434\u0430 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u0430 \u0432\u044b\u0437\u043e\u0432\u0430 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439 \u0435\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 - \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0441\u0442\u0440\u043e\u043a\u0443 \u0432\u0435\u0440\u043d\u0451\u0442 \u0442\u0435\u043b\u043e \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438, \u0442\u0430\u043a\u0430\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c")),(0,l.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b \u0441 \u0438\u043d\u043b\u0430\u0439\u043d \u043a\u043e\u0434\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"test.inline.ts")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export const test = (arg: string) => {\n  class Test {\n    log() {\n      console.log({\n        arg,\n        a: 1,\n      });\n    }\n  }\n\n  const t = new Test();\n\n  t.log();\n};\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0422\u0435\u043f\u0435\u0440\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0435\u0451 \u0432 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 html"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@tramvai/core';\nimport { RENDER_SLOTS, ResourceType, ResourceSlot } from '@tramvai/module-render';\nimport { test } from './test.inline';\n\n@Module({\n  providers: [\n    {\n      provide: RENDER_SLOTS,\n      multi: true,\n      useFactory: () => {\n        const arg = 'Hello';\n\n        return {\n          slot: ResourceSlot.HEAD_SCRIPTS,\n          type: ResourceType.inlineScript,\n          // \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u043a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u043f\u0438\u0448\u0435\u043c iife \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u043b\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043e\u0434 \u0438\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u043c\u043e\u0434\u0443\u043b\u044f\n          // \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430\u0434\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432 \u043a\u0430\u0432\u044b\u0447\u043a\u0438\n          payload: `(${test})('${arg}')`,\n        };\n      },\n    },\n  ],\n})\nexport class CustomModule {}\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u041f\u043e\u0441\u043b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u0434, \u0432\u043c\u0435\u0441\u0442\u043e \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  (function test(arg) {\n    var Test = /*#__PURE__*/ (function () {\n      function Test() {}\n\n      var _proto = Test.prototype;\n\n      _proto.log = function log() {\n        console.log({\n          arg: arg,\n          a: 1,\n        });\n      };\n\n      return Test;\n    })();\n\n    var t = new Test();\n    t.log();\n  })('Hello');\n<\/script>\n")))))}m.isMDXComponent=!0}}]);