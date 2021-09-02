(self.webpackChunk=self.webpackChunk||[]).push([[9841],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8042:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>c});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),l=["components"],o={id:"client-hints",title:"client-hints"},s=void 0,p={unversionedId:"references/modules/client-hints",id:"references/modules/client-hints",isDocsHomePage:!1,title:"client-hints",description:"\u041c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0442.\u043f.",source:"@site/tmp-docs/references/modules/client-hints.md",sourceDirName:"references/modules",slug:"/references/modules/client-hints",permalink:"/docs/references/modules/client-hints",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/client-hints.md",version:"current",frontMatter:{id:"client-hints",title:"client-hints"},sidebar:"docs",previous:{title:"cache-warmup",permalink:"/docs/references/modules/cache-warmup"},next:{title:"common",permalink:"/docs/references/modules/common"}},d=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442",children:[{value:"1. \u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"1-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:[]},{value:"2. \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u044f",id:"2-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043c\u043e\u0434\u0443\u043b\u044f",children:[]}]},{value:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b",id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b",children:[{value:"USER_AGENT_TOKEN",id:"user_agent_token",children:[]}]},{value:"\u0421\u0442\u043e\u0440\u044b",id:"\u0441\u0442\u043e\u0440\u044b",children:[{value:"userAgent",id:"useragent",children:[]},{value:"media",id:"media",children:[]}]},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 media \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0435",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0435",children:[{value:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0440\u0430\u0431\u043e\u0442\u044b Client Hints",id:"\u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c-\u0440\u0430\u0431\u043e\u0442\u044b-client-hints",children:[]}]}],u={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0442.\u043f."),(0,a.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0432-\u043f\u0440\u043e\u0435\u043a\u0442"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442"),(0,a.kt)("h3",{id:"1-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"},"1. \u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"@tramvai/module-client-hints")," \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/module-client-hints\n")),(0,a.kt)("p",null,"\u0438\u043b\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-client-hints\n")),(0,a.kt)("h3",{id:"2-\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u043c\u043e\u0434\u0443\u043b\u044f"},"2. \u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u044f"),(0,a.kt)("p",null,"\u041d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ClientHintsModule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ClientHintsModule } from '@tramvai/module-client-hints';\n\ncreateApp({\n  modules: [ClientHintsModule],\n});\n")),(0,a.kt)("h2",{id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b"},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b"),(0,a.kt)("h3",{id:"user_agent_token"},"USER_AGENT_TOKEN"),(0,a.kt)("p",null,"\u041e\u0431\u044a\u0435\u043a\u0442 - \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u044e\u0437\u0435\u0440-\u0430\u0433\u0435\u043d\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/libs/user-agent"},"@tinkoff/user-agent"),". \u041f\u0430\u0440\u0441\u0438\u043d\u0433 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u043c\u0430\u0446\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,a.kt)("h2",{id:"\u0441\u0442\u043e\u0440\u044b"},"\u0421\u0442\u043e\u0440\u044b"),(0,a.kt)("h3",{id:"useragent"},"userAgent"),(0,a.kt)("p",null,"\u0421\u0442\u043e\u0440 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u044e\u0437\u0435\u0440-\u0430\u0433\u0435\u043d\u0442\u0430."),(0,a.kt)("h3",{id:"media"},"media"),(0,a.kt)("p",null,"\u0421\u0442\u043e\u0440 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 \u043c\u0435\u0434\u0438\u0430-\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0438\u043f\u0435 \u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 \u044d\u043a\u0440\u0430\u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),(0,a.kt)("h4",{id:"api-\u0434\u043b\u044f-\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438-media"},"API \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 media"),(0,a.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u0442\u043e\u0440\u0435 media:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Media = {\n  width: number;\n  height: number;\n  isTouch: boolean;\n  retina: boolean;\n  supposed?: boolean;\n  synchronized?: boolean;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fromClientHints(media: Media): boolean")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u043a\u043e\u0433\u0434\u0430 media \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isSupposed(media: Media): boolean")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u043a\u043e\u0433\u0434\u0430 media \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u043e User-Agent, \u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isRetina(media: Media): boolean")," - \u0432\u043e\u0432\u0437\u0440\u0430\u0449\u0430\u0435\u0442 true, \u043a\u043e\u0433\u0434\u0430 \u043f\u043b\u043e\u0442\u043d\u043e\u0441\u0442\u044c \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 2 \u0438\u043b\u0438 \u0432\u044b\u0448\u0435"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMedia(): Media")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u0430 media"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useFromClientHints(): boolean")," - \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 fromClientHints \u0438\u0437 \u0441\u0442\u043e\u0440\u0430 media"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useIsSupposed(): boolean")," - \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 isSupposed \u0438\u0437 \u0441\u0442\u043e\u0440\u0430 media"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useIsRetina(): boolean")," - \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 isRetina \u0438\u0437 \u0441\u0442\u043e\u0440\u0430 media"),(0,a.kt)("h2",{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0440\u0430\u0431\u043e\u0442\u044b-\u0441-media-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435-\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0435"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 media \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,a.kt)("p",null,"\u041e\u0434\u043d\u0430 \u0438\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c SSR - \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u044d\u043a\u0440\u0430\u043d\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0448\u0438\u0440\u0438\u043d\u044b \u044d\u043a\u0440\u0430\u043d\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0443\u0437\u043d\u0430\u0442\u044c \u0442\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0438 \u043d\u0435 \u0438\u043c\u0435\u0435\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0443. \u0415\u0441\u043b\u0438 \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f SEO, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d\u044b \u0438\u043b\u0438 \u0441\u043f\u0438\u043d\u043d\u0435\u0440\u044b, \u043d\u043e \u044d\u0442\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043d\u0435 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432."),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c Client Hints \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 cookies \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u044d\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u0445\u043e\u0434\u0430\u0445 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("h3",{id:"\u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c-\u0440\u0430\u0431\u043e\u0442\u044b-client-hints"},"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u0440\u0430\u0431\u043e\u0442\u044b Client Hints"),(0,a.kt)("h4",{id:"\u043f\u0435\u0440\u0432\u044b\u0439-\u0437\u0430\u0445\u043e\u0434-\u043d\u0430-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"},"\u041f\u0435\u0440\u0432\u044b\u0439 \u0437\u0430\u0445\u043e\u0434 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043c\u043e\u0434\u0443\u043b\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0438\u043f \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e User-Agent, \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435")," \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0432 \u0441\u0442\u043e\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435 \u0441 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"media")," \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1024,\n  height: 768,\n  isTouch: false,\n  retina: false,\n  supposed: true,\n  synchronized: false,\n};\n")),(0,a.kt)("p",null,"\u041d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u044f\u0441\u044c \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"supposed: true"),", \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435")," \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0441\u0442\u043e\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),", \u0432\u044b\u0437\u044b\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e, \u0434\u043b\u044f \u0448\u0438\u0440\u043e\u043a\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0430, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"media")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1920,\n  height: 1080,\n  isTouch: false,\n  retina: true,\n  supposed: false,\n  synchronized: false,\n};\n")),(0,a.kt)("p",null,"\u041f\u043e\u043a\u0430 \u043c\u044b \u0438\u043c\u0435\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized: false"),", ",(0,a.kt)("strong",{parentName:"p"},"\u043d\u0435\u043b\u044c\u0437\u044f")," \u043f\u043e\u043b\u0430\u0433\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),' \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u0442.\u043a. \u044d\u0442\u043e \u0432\u044b\u0437\u043e\u0432\u0435\u0442 "\u0441\u043a\u0430\u0447\u043e\u043a" \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.'),(0,a.kt)("h4",{id:"\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439-\u0437\u0430\u0445\u043e\u0434-\u043d\u0430-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"},"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0445\u043e\u0434 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u0437 cookies, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized")," \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u043e\u0434\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),", \u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u0435\u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440\u0430 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1920,\n  height: 1080,\n  isTouch: false,\n  retina: true,\n  supposed: false,\n  synchronized: true,\n};\n")),(0,a.kt)("h4",{id:"\u0438\u0442\u043e\u0433\u0438"},"\u0418\u0442\u043e\u0433\u0438"),(0,a.kt)("p",null,"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u044d\u043a\u0440\u0430\u043d\u0430:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, ",(0,a.kt)("strong",{parentName:"p"},"\u043d\u0435\u043b\u044c\u0437\u044f")," \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u0437\u0430\u0445\u043e\u0434\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044e\u0437\u0435\u0440\u0443 \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044f \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d \u043f\u0440\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"supposed: true"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"synchronized: true")))),(0,a.kt)("p",null,"\u0420\u0435\u0446\u0435\u043f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043a\u0435\u043b\u0435\u0442\u043e\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437, \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const isSupposed = useIsSupposed();\n\n  if (isSupposed) {\n    return <AdaptiveSliderSkeleton />;\n  }\n\n  return <AdaptiveSlider />;\n};\n")),(0,a.kt)("p",null,"\u0420\u0435\u0446\u0435\u043f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0434 desktop \u0438 mobile \u043f\u0440\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u0445:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const media = useMedia();\n  const fromClientHints = useFromClientHints();\n\n  let Block = AdaptiveBlock;\n\n  if (fromClientHints) {\n    Block = media.width >= 1024 ? DesktopBlock : MobileBlock;\n  }\n\n  return <Block />;\n};\n")))}c.isMDXComponent=!0}}]);