(self.webpackChunk=self.webpackChunk||[]).push([[5573],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>p,toc:()=>s,default:()=>m});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={id:"create-bundle",title:"createBundle"},l=void 0,p={unversionedId:"references/tramvai/create-bundle",id:"references/tramvai/create-bundle",isDocsHomePage:!1,title:"createBundle",description:"createBundle(options: BundleOptions) - \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430.",source:"@site/tmp-docs/references/tramvai/create-bundle.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/create-bundle",permalink:"/docs/references/tramvai/create-bundle",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/create-bundle.md",version:"current",frontMatter:{id:"create-bundle",title:"createBundle"},sidebar:"docs",previous:{title:"createApp",permalink:"/docs/references/tramvai/create-app"},next:{title:"createAction",permalink:"/docs/references/tramvai/create-action"}},s=[{value:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 BundleOptions",id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-bundleoptions",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createBundle(options: BundleOptions)")," - \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/bundle"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0431\u0430\u043d\u0434\u043b\u044b")),(0,o.kt)("h2",{id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-bundleoptions"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 BundleOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u0434\u043b\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0438\u043d\u0434\u0435\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0431\u0430\u043d\u0434\u043b\u0430."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components: {}")," - \u041e\u0431\u044a\u0435\u043a\u0442 \u0441 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0431\u0430\u043d\u0434\u043b\u0430. \u041a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presets?: []")," - \u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0431\u0430\u043d\u0434\u043b\u0430. \u042d\u0442\u043e\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442\u0441\u044f \u0441 \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u0431\u0430\u043d\u0434\u043b\u043e\u043c \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f. \u041d\u0443\u0436\u043d\u043e \u0434\u043b\u044f \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u0449\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0430\u043a \u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438. \u041f\u043e\u0445\u043e\u0436\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u043f\u0440\u0435\u0441\u0435\u0442\u0430\u0445 babel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actions?: []")," - \u0421\u043f\u0438\u0441\u043e\u043a ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/action"},"\u044d\u043a\u0448\u0435\u043d\u043e\u0432")," \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0431\u0430\u043d\u0434\u043b\u0430"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reducers?: []")," - \u0421\u043f\u0438\u0441\u043e\u043a ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/state/overview"},"\u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u043e\u0432"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439 \u0431\u0430\u043d\u0434\u043b\u0430")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core';\nimport { lazy } from '@tramvai/react';\n\ncreateBundle({\n  name: 'platform/account/profile',\n  presets: [actionPackProfile],\n  components: {\n    'platform/pages/profile/ProfilePage': lazy(() => import('../pages/ProfileSettingsPage')),\n    'platform/pages/profile/ProfilePurchasesPage': lazy(\n      () => import('../pages/ProfilePurchasesPage')\n    ),\n  },\n  actions: [variationLoadAction, platformAsyncBundle],\n  reducers: [formReducer],\n});\n")))}m.isMDXComponent=!0}}]);