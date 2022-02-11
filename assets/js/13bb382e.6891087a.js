"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2179],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7778:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var n=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],l={title:"@tramvai/react",sidebar_position:2},s=void 0,c={unversionedId:"references/tramvai/react",id:"references/tramvai/react",title:"@tramvai/react",description:"@tramvai/react - library for integrating tramvai features with React components",source:"@site/tmp-docs/references/tramvai/react.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/react",permalink:"/docs/references/tramvai/react",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"@tramvai/react",sidebar_position:2},sidebar:"sidebar",previous:{title:"@tramvai/core",permalink:"/docs/references/tramvai/core"},next:{title:"base",permalink:"/docs/references/tramvai/state/base"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"DI",id:"di",children:[{value:"useDi",id:"usedi",children:[],level:3},{value:"withDi",id:"withdi",children:[],level:3},{value:"useDiContainer",id:"usedicontainer",children:[],level:3}],level:2},{value:"Error",id:"error",children:[{value:"ErrorBoundary",id:"errorboundary",children:[],level:3},{value:"FallbackError",id:"fallbackerror",children:[],level:3},{value:"withError",id:"witherror",children:[],level:3}],level:2},{value:"lazy",id:"lazy",children:[],level:2}],d={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/react")," - library for integrating tramvai features with ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," components"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/react\n")),(0,o.kt)("h2",{id:"di"},"DI"),(0,o.kt)("p",null,"When creating components, you may need to get data from di, for this there is a hook ",(0,o.kt)("inlineCode",{parentName:"p"},"useDi")," and HoC ",(0,o.kt)("inlineCode",{parentName:"p"},"withDi")),(0,o.kt)("h3",{id:"usedi"},"useDi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type useDi = (deps: Record<string, string | Token>) => Record<string, any>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type useDi = (dep: string | Token) => any;\n")),(0,o.kt)("p",null,"A hook into which we can pass both an object with the required dependencies and an object with data will be returned to us, as well as a single token, where the result will be returned to us. When we call ",(0,o.kt)("inlineCode",{parentName:"p"},"useDi"),", we get data from di and if we don't find data in di, an error will occur."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { useDi } from '@tramvai/react';\n\nconst MyComponent = () => {\n  const { logger } = useDi({ logger: 'logger' }); // pass the object\n  const Region = useDi(regionToken); // pass a single token\n\n  logger.info('text');\n\n  return (\n    <div>\n      Component\n      <Region />\n    </div>\n  );\n};\n")),(0,o.kt)("h3",{id:"withdi"},"withDi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type withDi = (\n  deps: Record<string, string | Token>\n) => (wrapper: React.ReactElement<any>) => React.ReactElement<any>;\n")),(0,o.kt)("p",null,"A HoC that allows you to wrap any components, get data from ",(0,o.kt)("inlineCode",{parentName:"p"},"DI")," and pass the result with dependencies to the props of the component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { withDi } from '@tramvai/react';\n\n@withDi({ logger: LOGGER_TOKEN })\nclass BoxyPage extends Component {\n  render() {\n    this.props.logger.info('text');\n    return <div>Component</div>;\n  }\n}\n")),(0,o.kt)("h3",{id:"usedicontainer"},"useDiContainer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type useDiContainer = () => DI.Container;\n")),(0,o.kt)("p",null,"Getting an instance of a DI container that has been added to the application context."),(0,o.kt)("p",null,"It is better not to use this hook, as it is very low-level and is intended for developing new hooks"),(0,o.kt)("h2",{id:"error"},"Error"),(0,o.kt)("p",null,"To handle errors during rendering, React uses ",(0,o.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/error-boundaries.html#introducing-error-boundaries"},"Error Boundary"),". This package provides its own version of Error Boundary which will log an error through a generic logger and display a stub for the wrapped component if an error occurs."),(0,o.kt)("h3",{id:"errorboundary"},"ErrorBoundary"),(0,o.kt)("p",null,"Error Boundary component that monitors errors down the tree and, in case of a render error, will log an error and display the ",(0,o.kt)("inlineCode",{parentName:"p"},"fallbackComponent")," component (passed as a props, by default it is a FallbackError from this package) instead of the fallen render subtree."),(0,o.kt)("p",null,"You can override the ",(0,o.kt)("inlineCode",{parentName:"p"},"fallbackComponent")," through the ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR_BOUNDARY_FALLBACK_COMPONENT_TOKEN")," provider."),(0,o.kt)("h3",{id:"fallbackerror"},"FallbackError"),(0,o.kt)("p",null,"Component used by default as a stub for a subtree in which a render error occurred"),(0,o.kt)("h3",{id:"witherror"},"withError"),(0,o.kt)("p",null,"Hook wrapping component in ErrorBoundary."),(0,o.kt)("h2",{id:"lazy"},"lazy"),(0,o.kt)("p",null,"To dynamically import components with SSR support, there is a high order ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lazy } from '@tramvai/react';\n\nconst LazyComponent = lazy(() => import('./components/foo'), {\n  loading: <div>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...</div>,\n});\n\n<LazyComponent />;\n")))}u.isMDXComponent=!0}}]);