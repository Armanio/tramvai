"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5311:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>u});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={id:"overview",title:"Documentation overview",sidebar_position:1},c=void 0,p={unversionedId:"get-started/overview",id:"get-started/overview",title:"Documentation overview",description:"Tramvai is a lightweight web framework for building SSR applications with a modular system and DI to quickly extend the functionality of applications.",source:"@site/tmp-docs/get-started/overview.md",sourceDirName:"get-started",slug:"/get-started/overview",permalink:"/docs/get-started/overview",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/get-started/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Documentation overview",sidebar_position:1},sidebar:"sidebar",next:{title:"\u0421reate an application on tramvai",permalink:"/docs/get-started/create-app"}},l=[{value:"First steps",id:"first-steps",children:[],level:3},{value:"Deep dive",id:"deep-dive",children:[],level:3},{value:"Features",id:"features",children:[],level:3},{value:"Jedi tricks",id:"jedi-tricks",children:[],level:3},{value:"API references",id:"api-references",children:[],level:3},{value:"Tramvai CLI",id:"tramvai-cli",children:[],level:3}],d={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Tramvai"))," is a lightweight web framework for building SSR applications with a modular system and DI to quickly extend the functionality of applications."),(0,i.kt)("p",null,"This documentation describes the capabilities and features of the framework, contains tutorials on creating applications on ",(0,i.kt)("strong",{parentName:"p"},"tramvai"),", popular recipes and detailed API descriptions."),(0,i.kt)("h3",{id:"first-steps"},"First steps"),(0,i.kt)("p",null,"For the first acquaintance with the framework, it is recommended to take a lesson ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/get-started/create-app"},"Create tramvai application"))),(0,i.kt)("h3",{id:"deep-dive"},"Deep dive"),(0,i.kt)("p",null,"You can get acquainted with the concepts that underlie the framework in the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/concepts/overview"},"Concepts"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("p",null,"You can learn more about the capabilities of the framework in the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/references/tramvai/react"},"Features"))),(0,i.kt)("h3",{id:"jedi-tricks"},"Jedi tricks"),(0,i.kt)("p",null,"Guides and recipes for solving the most popular tasks are located in the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/how-to/how-create-module"},"How-to"))),(0,i.kt)("h3",{id:"api-references"},"API references"),(0,i.kt)("p",null,"The framework API reference, documentation for built-in modules and libraries are located in the section ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/references/tramvai/core#createApp"},"API"))),(0,i.kt)("h3",{id:"tramvai-cli"},"Tramvai CLI"),(0,i.kt)("p",null,"Documentation for ",(0,i.kt)("strong",{parentName:"p"},"Tramvai CLI")," is on the page ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/references/cli/base"},"CLI"))))}u.isMDXComponent=!0}}]);