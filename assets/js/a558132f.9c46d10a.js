"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8829],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=s,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?n.createElement(m,o(o({ref:r},f),{},{components:t})):n.createElement(m,o({ref:r},f))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9022:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>c,toc:()=>f,default:()=>u});var n=t(3117),s=t(102),i=(t(7294),t(3905)),o=["components"],a={},l=void 0,c={unversionedId:"references/libs/safe-strings",id:"references/libs/safe-strings",title:"safe-strings",description:"Utility kit for a safe string encoding/decoding",source:"@site/tmp-docs/references/libs/safe-strings.md",sourceDirName:"references/libs",slug:"/references/libs/safe-strings",permalink:"/docs/references/libs/safe-strings",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/safe-strings.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"router",permalink:"/docs/references/libs/router"},next:{title:"tinkoff-layout",permalink:"/docs/references/libs/tinkoff-layout"}},f=[{value:"<code>safeParseJSON</code>",id:"safeparsejson",children:[],level:2},{value:"<code>safeStringify</code>",id:"safestringify",children:[],level:2},{value:"<code>safeStringiyfJSON</code>",id:"safestringiyfjson",children:[],level:2},{value:"<code>removeXss</code>",id:"removexss",children:[],level:2}],p={toc:f};function u(e){var r=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Utility kit for a safe string encoding/decoding"),(0,i.kt)("h2",{id:"safeparsejson"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeParseJSON")),(0,i.kt)("p",null,"Tries to parse json and if it successful returns it, otherwise returns second argument as default value."),(0,i.kt)("h2",{id:"safestringify"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeStringify")),(0,i.kt)("p",null,"Converts object to json with a replacement of insecure symbols that allows to insert result string in the response html"),(0,i.kt)("h2",{id:"safestringiyfjson"},(0,i.kt)("inlineCode",{parentName:"h2"},"safeStringiyfJSON")),(0,i.kt)("p",null,"Converts object to json with a circular reference handling"),(0,i.kt)("h2",{id:"removexss"},(0,i.kt)("inlineCode",{parentName:"h2"},"removeXss")),(0,i.kt)("p",null,"Removes possible xss strings"))}u.isMDXComponent=!0}}]);