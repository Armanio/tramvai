(self.webpackChunk=self.webpackChunk||[]).push([[379],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=a,k=s["".concat(p,".").concat(d)]||s[d]||c[d]||i;return t?r.createElement(k,o(o({ref:n},m),{},{components:t})):r.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6285:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>s});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"bundle-optimization",title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430"},p=void 0,u={unversionedId:"guides/bundle-optimization",id:"guides/bundle-optimization",isDocsHomePage:!1,title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430",description:"@tramvai/cli \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 webpack \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f production \u0441\u0431\u043e\u0440\u043a\u0438 - \u043c\u0438\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430, \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f CSS \u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, code splitting, \u0445\u044d\u0448\u0438 \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u0438\u043a\u0438 - \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044d\u0442\u0430\u043f\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438.",source:"@site/tmp-docs/guides/bundle-optimization.md",sourceDirName:"guides",slug:"/guides/bundle-optimization",permalink:"/en/docs/guides/bundle-optimization",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/bundle-optimization.md",version:"current",frontMatter:{id:"bundle-optimization",title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430"},sidebar:"docs",previous:{title:"Creating a tramvai library",permalink:"/en/docs/guides/tramvai-library"},next:{title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",permalink:"/en/docs/guides/universal"}},m=[{value:"Code Splitting",id:"code-splitting",children:[{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 SplitChunksPlugin",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-splitchunksplugin",children:[]},{value:"Common Chunk",id:"common-chunk",children:[]},{value:"Granular Chunks",id:"granular-chunks",children:[]}]}],c={toc:m};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/cli/base"},"@tramvai/cli")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0438 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f production \u0441\u0431\u043e\u0440\u043a\u0438 - \u043c\u0438\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u043e\u0431\u0444\u0443\u0441\u043a\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430, \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f CSS \u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, code splitting, \u0445\u044d\u0448\u0438 \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u0430\u0442\u0438\u043a\u0438 - \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044d\u0442\u0430\u043f\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438."),(0,i.kt)("h2",{id:"code-splitting"},"Code Splitting"),(0,i.kt)("p",null,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e JavaScript \u043a\u043e\u0434\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u0430\u043c\u044b\u0439 \u0432\u0430\u0436\u043d\u044b\u0445 \u0432\u0435\u0449\u0435\u0439 \u0432 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u0447\u0435\u043a \u0432\u0445\u043e\u0434\u0430 \u043f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435 \u0431\u0430\u043d\u0434\u043b\u043e\u0432 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u0431\u0430\u043d\u043b\u043e\u0432 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u043e\u0443\u0442\u0438\u043d\u0433\u0430 / \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 - \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430. \u041f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0431\u0430\u043d\u0434\u043b\u043e\u0432 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0435\u0448\u0438\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/split-chunks-plugin/"},"SplitChunksPlugin")),(0,i.kt)("p",null,"Tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0440\u044f\u0434 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 - \u0435\u0434\u0438\u043d\u0430\u044f \u0442\u043e\u0447\u043d\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 (",(0,i.kt)("inlineCode",{parentName:"p"},"platform.js")," \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435), \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043c\u043f\u043e\u0440\u0442 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/concepts/bundle"},"bundle"),", \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0431\u043e\u0440\u043a\u0430 vendor \u0447\u0430\u043d\u043a\u0430. \u0414\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0438\u043c\u0435\u044e\u0449\u0435\u0433\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e tramvai \u0431\u0430\u043d\u0434\u043b\u043e\u0432 \u043f\u043e\u0434 \u0440\u0430\u0437\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0447\u0430\u043d\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"platform.js")," \u0441 \u043e\u0431\u0449\u0438\u043c \u043a\u043e\u0434\u043e\u043c \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430 \u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0438 \u0447\u0430\u043d\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"{bundleName}.js")," \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0434\u043b\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0414\u0443\u0431\u043b\u0438\u043a\u0430\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432 \u0447\u0430\u043d\u043a\u0430\u0445, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0434 tramvai \u0431\u0430\u043d\u0434\u043b\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b ui-kit), \u0438 \u044d\u0442\u043e\u0442 \u043a\u043e\u0434 \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0432 \u043e\u0431\u0449\u0438\u0435 \u0447\u0430\u043d\u043a\u0438."),(0,i.kt)("p",null,"CLI \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0442\u0440\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 - \u043e\u0434\u0438\u043d \u043e\u0431\u0449\u0438\u0439 common \u0447\u0430\u043d\u043a, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e granular \u0447\u0430\u043d\u043a\u043e\u0432, \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 SplitChunksPlugin."),(0,i.kt)("h3",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-splitchunksplugin"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 SplitChunksPlugin"),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c\u0435\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d tramvai \u0431\u0430\u043d\u0434\u043b \u043d\u0430 \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043b\u0438\u0431\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u044e\u0442 \u0431\u0430\u043d\u0434\u043b \u0434\u043b\u044f \u0434\u0435\u0441\u043a\u0442\u043e\u043f\u043d\u043e\u0439 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438, \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430, \u0438 \u0441\u0442\u043e\u0438\u0442 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},'"commonChunk": false'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "commonChunk": false\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u043e\u0447\u0435\u043c\u0443 \u043d\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c common \u0447\u0430\u043d\u043a, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u043c\u0435\u0448\u0430\u0435\u0442?")," \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u0434, \u043d\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0432 common \u0447\u0430\u043d\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u043e\u0434 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 page \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/how-to/how-create-async-component"},"@tramvai/react lazy"),", \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u0442.\u043a. \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0434\u0443\u0431\u043b\u0438\u043a\u0430\u0442\u044b \u0432 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0447\u0430\u043d\u043a\u0430\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446."),(0,i.kt)("h3",{id:"common-chunk"},"Common Chunk"),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430 \u0432 CLI \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0432\u0435\u0441\u044c \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434 \u0438\u0437 \u0431\u0430\u043d\u0434\u043b\u043e\u0432 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432 \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"common-chunk.js"),". \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u043a\u0430\u043a\u043e\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0430\u043d\u043a\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u043a\u043e\u0434, \u0447\u0442\u043e \u0431\u044b \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0435\u0433\u043e \u0432 common."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0431\u0430\u043d\u0434\u043b\u043e\u0432, ",(0,i.kt)("inlineCode",{parentName:"p"},"common-chunk.js")," \u043c\u043e\u0436\u0435\u0442 \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043e\u0433\u0440\u043e\u043c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435, \u0438 \u0441\u0442\u043e\u0438\u0442 \u043b\u0438\u0431\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber"),", \u043b\u0438\u0431\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e Granular Chunks. \u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0447\u0430\u043d\u043a\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "commonChunkSplitNumber": 5\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041a\u0430\u043a \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e ",(0,i.kt)("inlineCode",{parentName:"strong"},"commonChunkSplitNumber"),"?")," \u041a\u0430\u043a \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u0447\u0438\u0441\u043b\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0430\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber = bundles / 3")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"commonChunkSplitNumber = bundles / 2"),", \u0433\u0434\u0435 bundles - \u044d\u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e tramvai \u0431\u0430\u043d\u0434\u043b\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u043d\u043e \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e."),(0,i.kt)("h3",{id:"granular-chunks"},"Granular Chunks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.dev/granular-chunking-nextjs/"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0432 Next.js \u0438 Gatsby.js")),(0,i.kt)("p",null,"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"granularChunks"),", \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434 \u0432\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u043b\u043a\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432, \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430, \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043d\u0430 \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430. \u0411\u0430\u043b\u0430\u043d\u0441 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u0434 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f (\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e) \u0447\u0430\u043d\u043a\u0430\u043c\u0438 \u0432\u044b\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0447\u0430\u043d\u043a \u0441 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c, \u0438 \u0442\u0430\u043a\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442 \u043e\u0434\u043d\u043e\u0433\u043e \u043d\u0430 \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435, \u0434\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 \u0434\u0432\u0430 \u0447\u0430\u043d\u043a\u0430."),(0,i.kt)("p",null,"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438: \u043d\u0430 \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 js \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432, \u0434\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432, \u0447\u0442\u043e \u043d\u0435 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 HTTP/2; \u0438 \u043c\u0435\u043d\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f gzip/brotli \u0430\u0440\u0445\u0438\u0432\u0430\u0446\u0438\u044f, \u0447\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u0437\u0430\u043c\u0435\u0442\u043d\u043e \u043f\u043e \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044e \u0441 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430."),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,i.kt)("inlineCode",{parentName:"p"},"granularChunksSplitNumber")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u0449\u0438\u0445 \u0447\u0430\u043d\u043a\u043e\u0432 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"), \u0435\u0441\u043b\u0438 \u043f\u043e \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0445 \u0447\u0430\u043d\u043a\u043e\u0432:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "{appName}": {\n      "commands": {\n        "build": {\n          "configurations": {\n            "granularChunks": true,\n            "granularChunksSplitNumber": 3\n          }\n        }\n      }\n    }\n  }\n}\n')))}s.isMDXComponent=!0}}]);