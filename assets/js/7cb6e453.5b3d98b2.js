"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(3117),r=n(7294),o=n(2389),i=n(9443);const l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(6681),p=n(6010);const d="tabItem_1uMI";function c(e){var t,n,a,o=e.lazy,i=e.block,c=e.defaultValue,u=e.values,m=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),y=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(k),x=w[0],C=w[1],S=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==x&&f.some((function(e){return e.value===E}))&&C(E)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==x&&(T(t),C(a),null!=m&&N(m,a))},H=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,p.Z)("tabs__item",d,{"tabs__item--active":x===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:H,onFocus:O,onClick:O},null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},1200:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>c,toc:()=>u,default:()=>h});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],p={id:"styling",title:"Styling"},d=void 0,c={unversionedId:"tutorials/pokedex-app/styling",id:"tutorials/pokedex-app/styling",title:"Styling",description:"For styling, we recommend using CSS Modules and CSS variables (powered by postcss).",source:"@site/tmp-docs/tutorials/pokedex-app/06-styling.md",sourceDirName:"tutorials/pokedex-app",slug:"/tutorials/pokedex-app/styling",permalink:"/docs/tutorials/pokedex-app/styling",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/tutorials/pokedex-app/06-styling.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"styling",title:"Styling"},sidebar:"sidebar",previous:{title:"Page with dynamic parameters",permalink:"/docs/tutorials/pokedex-app/dynamic-page"},next:{title:"Introduction to tramvai",permalink:"/docs/concepts/overview"}},u=[{value:"Conclusion",id:"conclusion",children:[],level:3}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For styling, we recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS Modules")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS variables")," (powered by ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss"),").\nIn this tutorial, we'll update the Header and decorate our ",(0,o.kt)("inlineCode",{parentName:"p"},"Pokedex")," pages a bit."),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component, replace the header with ",(0,o.kt)("strong",{parentName:"p"},"Pokedex")," and add a pokeball image."),(0,o.kt)("p",null,"\u231b Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/header/Header.tsx"',title:'"shared/header/Header.tsx"'},'import React from \'react\';\n\nexport const Header = () => (\n  <div className={styles.Header}>\n    <img\n      alt="pokeball"\n      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"\n      width={25}\n      height={25}\n    />\n    <h1>\n      Pokedex\n    </h1>\n  </div>\n);\n')),(0,o.kt)("p",null,"Let's work with CSS Modules on the example of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," component."),(0,o.kt)("p",null,"\u231b Add styles to the header:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"css",label:"Header.module.css",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="shared/header/Header.module.css"',title:'"shared/header/Header.module.css"'},".Header {\n  display: flex;\n  align-items: center;\n}\n\n.Header img {\n  margin-right: 5px;\n}\n"))),(0,o.kt)(l.Z,{value:"js",label:"Header.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/header/Header.tsx"',title:'"shared/header/Header.tsx"'},"import React from 'react';\n// highlight-next-line\nimport styles from './Header.module.css';\n\nexport const Header = () => (\n  // highlight-next-line\n  <div className={styles.Header}>\n    <img\n      alt=\"pokeball\"\n      src=\"https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg\"\n      width={25}\n      height={25}\n    />\n    <h1>\n      Pokedex\n    </h1>\n  </div>\n);\n")))),(0,o.kt)("p",null,"Let's try to change the fonts in our application.\nYou can add new resources to the pages of the application through the ",(0,o.kt)("inlineCode",{parentName:"p"},"RENDER_SLOTS")," token, alternative ways and examples can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/render"},"module render")," documentation."),(0,o.kt)("p",null,"\u231b Connect Lato from Google Fonts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," providers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.ts"',title:'"index.ts"'},"import {\n  RENDER_SLOTS,\n  ResourceType,\n  ResourceSlot,\n} from '@tramvai/tokens-render';\n\ncreateApp({\n  name: 'pokedex',\n  modules: [...modules],\n  providers: [\n    ...providers,\n    // highlight-start\n    {\n      provide: RENDER_SLOTS,\n      multi: true,\n      useValue: {\n        type: ResourceType.style,\n        slot: ResourceSlot.HEAD_CORE_STYLES,\n        payload: 'https://fonts.googleapis.com/css2?family=Lato&display=swap',\n      }\n    },\n    // highlight-end\n  ],\n  actions: [...actions],\n  bundles: {...bundles},\n});\n")),(0,o.kt)("p",null,"\u231b And replace the fonts with ",(0,o.kt)("inlineCode",{parentName:"p"},"Lato")," by connecting a new CSS at the entry point of the application:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"css",label:"global.module.css",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="global.module.css"',title:'"global.module.css"'},"html {\n  font-family: 'Lato', sans-serif;\n}\n"))),(0,o.kt)(l.Z,{value:"js",label:"index.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"// connect CSS at the beginning of the file, before any other imports\n// highlight-next-line\nimport './global.module.css';\n\ncreateApp({\n  name: 'pokedex',\n  modules: [...modules],\n  providers: [...providers],\n  actions: [...actions],\n  bundles: {...bundles},\n});\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more efficient font loading and no layout shifting after downloading the required font, we recommend keeping these fonts in the application itself, and adding ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," tags for the main fonts, for example:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const provider = {\n  provide: RENDER_SLOTS,\n  multi: true,\n  useValue: {\n    type: ResourceType.preloadLink,\n    slot: ResourceSlot.HEAD_CORE_SCRIPTS,\n    payload: 'https://fonts.gstatic.com/s/lato/v20/S6uyw4BMUTPHjx4wXiWtFCc.woff2',\n    attrs: {\n      as: 'font',\n      type: 'font/woff2',\n      crossOrigin: 'anonymous',\n    },\n  },\n};\n")))),(0,o.kt)("p",null,"It remains to add CSS variables, for demonstration we will add a variable with the primary color for headers, and use it in the header."),(0,o.kt)("p",null,"\u231b Add a CSS variable to the main stylesheet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="global.module.css"',title:'"global.module.css"'},"// highlight-start\n:root {\n  --color-header: hsl(215deg 85% 35%);\n}\n// highlight-end\n\nhtml {\n  font-family: 'Lato', sans-serif;\n}\n\n")),(0,o.kt)("p",null,"\u231b Use a new variable in ",(0,o.kt)("inlineCode",{parentName:"p"},"Header.module.css"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="shared/header/Header.module.css"',title:'"shared/header/Header.module.css"'},".Header {\n  display: flex;\n  align-items: center;\n}\n\n.Header img {\n  margin-right: 5px;\n}\n\n// highlight-start\n.Header h1 {\n  color: var(--color-header);\n}\n// highlight-end\n")),(0,o.kt)("p",null,"By default, tramvai has ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-custom-properties"},"postcss-custom-properties")," plugin, which can do fallback for CSS variables.\nUnfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss-loader")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader")," process the files one by one, and in our example the plugin will just cut variables from ",(0,o.kt)("inlineCode",{parentName:"p"},"global.module.css")," as not used. This behavior can be changed with option ",(0,o.kt)("inlineCode",{parentName:"p"},"preserve: true"),", but in this case the plugin will not perform its main functions."),(0,o.kt)("p",null,"An alternative option - add global variables directly to the plugin, through the property ",(0,o.kt)("inlineCode",{parentName:"p"},"importFrom"),", where you can pass a js or css file with a list of variables."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"An alternative for CSS variables is to use a variable syntax created specifically for CSS Modules, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md"},"documentation"),".\nBut such variables are completely static."))),(0,o.kt)("p",null,"\u231b Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss-custom-properties")," plugin settings in ",(0,o.kt)("inlineCode",{parentName:"p"},"postcss.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="postcss.js"',title:'"postcss.js"'},"module.exports = {\n  plugins: [\n    require('postcss-nested'),\n    require('postcss-modules-values-replace'),\n    require('postcss-custom-properties')({\n      // force the plugin to keep variables that it thinks are not used\n      // highlight-next-line\n      preserve: true,\n    }),\n    require('postcss-import'),\n    require('postcss-custom-media')({\n      preserve: false,\n    }),\n  ],\n};\n\n")),(0,o.kt)("p",null,"After refreshing the page, we will see the dark blue header `Pokedex'!"),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"That's all for now!"),(0,o.kt)("p",null,"We learned how to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," application, work with ",(0,o.kt)("inlineCode",{parentName:"p"},"depencency injection"),", routing and global state, load data and style the application."),(0,o.kt)("p",null,"You can familiarize yourself with framework features like ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/papi/introduction"},"API routing"),", try integration with ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/react-query"},"react-query"),", integrate our awesome test utilities for ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/tramvai/test/unit"},"unit")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/tramvai/test/integration"},"e2e")," testing into the application."))}h.isMDXComponent=!0}}]);