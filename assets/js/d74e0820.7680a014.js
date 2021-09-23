(self.webpackChunk=self.webpackChunk||[]).push([[2313],{3905:(n,e,t)=>{"use strict";t.d(e,{Zo:()=>l,kt:()=>d});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},c=Object.keys(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(o=0;o<c.length;o++)t=c[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=o.createContext({}),p=function(n){var e=o.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},l=function(n){var e=p(n.components);return o.createElement(s.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,c=n.originalType,s=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),u=p(t),d=r,A=u["".concat(s,".").concat(d)]||u[d]||m[d]||c;return t?o.createElement(A,i(i({ref:e},l),{},{components:t})):o.createElement(A,i({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var c=t.length,i=new Array(c);i[0]=u;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:r,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2227:(n,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>p,toc:()=>l,default:()=>u});var o=t(2122),r=t(9756),c=(t(7294),t(3905)),i=["components"],a={id:"actions-conditions",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439"},s=void 0,p={unversionedId:"how-to/actions-conditions",id:"how-to/actions-conditions",isDocsHomePage:!1,title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439",description:"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043a\u0448\u0435\u043d\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u044d\u0442\u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u042d\u043a\u0448\u0435\u043d. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0448\u0435\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0435\u0441\u043b\u0438 \u044d\u043a\u0448\u0435\u043d \u043d\u0435 \u0443\u0441\u043f\u0435\u0432\u0430\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0442\u043e \u0435\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442.",source:"@site/tmp-docs/how-to/actions-conditions.md",sourceDirName:"how-to",slug:"/how-to/actions-conditions",permalink:"/docs/how-to/actions-conditions",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/actions-conditions.md",version:"current",frontMatter:{id:"actions-conditions",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439"},sidebar:"docs",previous:{title:"\u041a\u0430\u043a \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u043b\u0438\u0444\u0438\u043b\u043b\u044b?",permalink:"/docs/how-to/how-to-enable-polyfills"},next:{title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0443\u0440\u043b\u0430 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/how-to/server-add-path-handler"}},l=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0432\u043e\u0438\u0445-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439",children:[]},{value:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445",id:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u0442\u043e\u043b\u044c\u043a\u043e-\u043d\u0430-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445",children:[]},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0435\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0435\u0439-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",children:[]}],m={toc:l};function u(n){var e=n.components,t=(0,r.Z)(n,i);return(0,c.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u0414\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043a\u0448\u0435\u043d\u0430 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u044d\u0442\u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,c.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"\u042d\u043a\u0448\u0435\u043d"),". \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0448\u0435\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u0435\u0441\u043b\u0438 \u044d\u043a\u0448\u0435\u043d \u043d\u0435 \u0443\u0441\u043f\u0435\u0432\u0430\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0437\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0442\u043e \u0435\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442."),(0,c.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439"),(0,c.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u0434\u0438\u043d \u044d\u043a\u0448\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0438 \u043e\u0434\u0438\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0435\u0441\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0438 ",(0,c.kt)("inlineCode",{parentName:"p"},"onlyServer")," \u0438 ",(0,c.kt)("inlineCode",{parentName:"p"},"onlyBrowser"),":"),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d\u044b"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { set } from '../store';\n\nexport const innerAction = createAction({\n  name: 'innerAction',\n  fn: (context) => {\n    console.log('execute innerAction');\n    return context.dispatch(set('innerAction'));\n  },\n  // conditions \u043d\u0435 \u0437\u0430\u0434\u0430\u043d - \u044d\u043a\u0448\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:\n  // \u0435\u0441\u043b\u0438 \u044d\u043a\u0448\u0435\u043d \u0437\u0430\u0434\u0430\u043d \u043a\u0430\u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 (\u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0431\u0430\u043d\u0434\u043b\u0435 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435),\n  // \u0442\u043e \u044d\u043a\u0448\u0435\u043d \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 - \u0435\u0441\u043b\u0438 \u0443\u0441\u043f\u0435\u043b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f, \u0442\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442\n  // \u0435\u0441\u043b\u0438 \u0436\u0435 \u043d\u0435 \u044d\u043a\u0448\u0435\u043d \u043d\u0435 \u0443\u0441\u043f\u0435\u043b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u043b\u0438\u043c\u0438\u0442, \u0442\u043e \u043e\u043d \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435,\n  // \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0438 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441 \u044d\u0442\u0438\u043c \u044d\u043a\u0448\u0435\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0443\u0442, \u0442.\u043a. \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442\u0441\u044f\n  // \u0435\u0441\u043b\u0438 \u0436\u0435 \u044d\u043a\u0448\u0435\u043d \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u044f\u0432\u043d\u043e \u0447\u0435\u0440\u0435\u0437 context \u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u044d\u043a\u0448\u0435\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f (\u043b\u0438\u043c\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0432\u043b\u0438\u044f\u0435\u0442,\n  // \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u0440\u0438 ssr, \u043d\u043e \u044d\u043a\u0448\u0435\u043d \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f)\n});\n\nexport const innerServerAction = createAction({\n  name: 'innerServerAction',\n  fn: (context) => {\n    console.log('execute innerServerAction');\n    return context.dispatch(set('innerServerAction'));\n  },\n  // \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435\n  conditions: {\n    onlyServer: true,\n  },\n});\n\nexport const innerBrowserAction = createAction({\n  name: 'innerBrowserAction',\n  fn: (context) => {\n    console.log('execute innerBrowserAction');\n    return context.dispatch(set('innerBrowserAction'));\n  },\n  // \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435\n  conditions: {\n    onlyBrowser: true,\n  },\n});\n\n"))))),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u044d\u043a\u0448\u0435\u043d\u044b"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { set } from '../store';\nimport { innerAction, innerBrowserAction, innerServerAction } from './inner';\n\nexport const pageServerAction = createAction({\n  name: 'pageServerAction',\n  fn: async (context) => {\n    console.log('execute pageServerAction');\n    await context.executeAction(innerAction);\n    await context.executeAction(innerServerAction);\n    await context.executeAction(innerBrowserAction);\n    return context.dispatch(set('pageServerAction'));\n  },\n  conditions: {\n    pageServer: true,\n  },\n});\n\nexport const pageBrowserAction = createAction({\n  name: 'pageBrowserAction',\n  fn: async (context) => {\n    console.log('execute pageBrowserAction');\n    await context.executeAction(innerAction);\n    await context.executeAction(innerServerAction);\n    await context.executeAction(innerBrowserAction);\n    return context.dispatch(set('pageBrowserAction'));\n  },\n  // \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435\n  conditions: {\n    onlyBrowser: true,\n  },\n});\n\nexport const pageAlwaysAction = createAction({\n  name: 'pageAlwaysAction',\n  fn: async (context) => {\n    console.log('execute pageAlwaysAction');\n    return context.dispatch(set('pageAlwaysAction'));\n  },\n  conditions: {\n    always: true,\n  },\n});\n\n// \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 SPA \u043f\u0435\u0440\u0435\u0445\u043e\u0434\nexport const pageBrowserAlwaysAction = createAction({\n  name: 'pageBrowserAlwaysAction',\n  fn: async (context) => {\n    console.log('execute pageBrowserAlwaysAction');\n    return context.dispatch(set('pageBrowserAlwaysAction'));\n  },\n  conditions: {\n    always: true,\n    onlyBrowser: true,\n  },\n});\n\n"))))),(0,c.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0441\u0432\u043e\u0438\u0445-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439"),(0,c.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,c.kt)("inlineCode",{parentName:"p"},"ActionCondition"),", \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u044c \u0432 DI, \u0447\u0435\u0440\u0435\u0437 \u0442\u043e\u043a\u0435\u043d ",(0,c.kt)("inlineCode",{parentName:"p"},"ACTION_CONDITIONALS"),":"),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u044c"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ActionCondition } from '@tramvai/module-common';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n\nexport const condition = ({\n  pageService,\n}: {\n  pageService: typeof PAGE_SERVICE_TOKEN;\n}): ActionCondition => {\n  return {\n    key: 'custom',\n    fn: (checker) => {\n      if (checker.conditions.custom) {\n        const { pathname } = pageService.getCurrentUrl();\n        console.log(pathname);\n        if (pathname !== '/custom/') {\n          checker.forbid();\n        }\n      }\n    },\n  };\n};\n\n"))))),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d \u0441 \u044d\u0442\u0438\u043c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0435\u043c"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { set } from '../store';\n\nexport const customAction = createAction({\n  name: 'customAction',\n  fn: (context) => {\n    console.log('execute customAction');\n    return context.dispatch(set('customAction'));\n  },\n  // \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u043e\u043f\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0438\u0445 conditions \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0445\n  conditions: {\n    custom: true,\n  },\n});\n\n"))))),(0,c.kt)("h3",{id:"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u0442\u043e\u043b\u044c\u043a\u043e-\u043d\u0430-\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445"),(0,c.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,c.kt)("inlineCode",{parentName:"p"},"actions")," \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u044d\u0442\u0438\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445:"),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Page"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import reduceObj from '@tinkoff/utils/object/reduce';\nimport React from 'react';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\nimport { useSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { store } from '../store';\nimport {\n  pageBrowserAction,\n  pageServerAction,\n  pageAlwaysAction,\n  pageBrowserAlwaysAction,\n} from '../actions/page';\nimport { customAction } from '../actions/custom';\n\nexport function Page() {\n  const state = useSelector(store, (x) => x.actionTest);\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n\n  return (\n    <div>\n      <button type=\"button\" onClick={() => pageService.navigate({ url: '/custom/' })}>\n        Navigate To custom\n      </button>\n      {reduceObj(\n        (acc, v, k) => {\n          return acc.concat(\n            <div>\n              {k} loaded from {v}\n            </div>\n          );\n        },\n        [],\n        state\n      )}\n    </div>\n  );\n}\n\nPage.actions = [\n  pageServerAction,\n  pageBrowserAction,\n  pageAlwaysAction,\n  pageBrowserAlwaysAction,\n  customAction,\n];\n\n"))))),(0,c.kt)("h3",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0435\u0439-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0435\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,c.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0435 \u044d\u043a\u0448\u0435\u043d\u044b, \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u0435\u043b\u0438 \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u0437 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432:"),(0,c.kt)("p",null,(0,c.kt)("details",null,(0,c.kt)("summary",null,"\u0422\u043e\u0447\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),(0,c.kt)("p",null,(0,c.kt)("pre",{parentName:"p"},(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, createBundle, provide } from '@tramvai/core';\nimport { ACTION_CONDITIONALS } from '@tramvai/module-common';\nimport { PAGE_SERVICE_TOKEN, ROUTES_TOKEN } from '@tramvai/tokens-router';\n\nimport { store } from './store';\nimport { modules } from '../common';\nimport { condition } from './conditions/custom';\nimport { Page } from './components/Page';\n\nconst bundle = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n  reducers: [store],\n});\n\ncreateApp({\n  name: 'actions-conditions',\n  modules: [...modules],\n  providers: [\n    provide({\n      provide: ACTION_CONDITIONALS,\n      multi: true,\n      useFactory: condition,\n      deps: {\n        pageService: PAGE_SERVICE_TOKEN,\n      },\n    }),\n    provide({\n      provide: ROUTES_TOKEN,\n      multi: true,\n      useValue: {\n        name: 'custom',\n        path: '/custom/',\n      },\n    }),\n  ],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: bundle }),\n  },\n});\n\n"))))))}u.isMDXComponent=!0}}]);