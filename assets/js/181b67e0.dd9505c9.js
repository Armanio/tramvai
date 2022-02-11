"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8029],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2888:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var a=t(3117),o=t(102),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:2},l=void 0,c={unversionedId:"references/cli/config",id:"references/cli/config",title:"config",description:"@tramvai/cli requires that in the project root should exists config file named tramvai.json. This config should define projects that @tramvai/cli should handle.",source:"@site/tmp-docs/references/cli/config.md",sourceDirName:"references/cli",slug:"/references/cli/config",permalink:"/docs/references/cli/config",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/cli/config.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"base",permalink:"/docs/references/cli/base"},next:{title:"start",permalink:"/docs/references/cli/start"}},p=[{value:"config file format",id:"config-file-format",children:[],level:2},{value:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 JSON \u0441\u0445\u0435\u043c\u044b \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 IDE",id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-json-\u0441\u0445\u0435\u043c\u044b-\u0444\u0430\u0439\u043b\u0430-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-\u0432-ide",children:[],level:2},{value:"JSON schema validation and autocomplete in IDEs",id:"json-schema-validation-and-autocomplete-in-ides",children:[],level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f build \u044d\u0442\u0430\u043f\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0434\u043b\u044f-build-\u044d\u0442\u0430\u043f\u0430",children:[],level:2},{value:"Add new config parameters",id:"add-new-config-parameters",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," requires that in the project root should exists config file named ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json"),". This config should define projects that ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," should handle."),(0,r.kt)("h2",{id:"config-file-format"},"config file format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "react-app": {\n      "name": "new-app",\n      "root": "src",\n      "type": "application",\n      "commands": {\n        "build": {\n          "options": { ... },\n          "configurations": { ... }\n        },\n        "serve": {\n          "configurations": { ... }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projects")," - map of the projects that resides in the current repository. ",(0,r.kt)("inlineCode",{parentName:"li"},"@tramvai/cli")," supports many apps and packages inside single repository (so called monorepo concept).")),(0,r.kt)("h2",{id:"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-json-\u0441\u0445\u0435\u043c\u044b-\u0444\u0430\u0439\u043b\u0430-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438-\u0432-ide"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 JSON \u0441\u0445\u0435\u043c\u044b \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432 IDE"),(0,r.kt)("h2",{id:"json-schema-validation-and-autocomplete-in-ides"},"JSON schema validation and autocomplete in IDEs"),(0,r.kt)("p",null,"Link to the actual json schema for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"./node_modules/@tramvai/cli/schema.json")),(0,r.kt)("p",null,"The most simple way to add config validation and autocomplete is to add schema through field ",(0,r.kt)("inlineCode",{parentName:"p"},"$schema")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@tramvai/cli/schema.json",\n  "projects": {}\n}\n')),(0,r.kt)("p",null,"Another way is to add schema to the IDE settings:"),(0,r.kt)("p",null,"How to add schema to the ",(0,r.kt)("strong",{parentName:"p"},"JetBrains IDE")," you can find in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/json.html#ws_json_schema_add_custom"},"official docs"),". You also need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json")," as file path pattern in settings."),(0,r.kt)("p",null,"How to add schema to the ",(0,r.kt)("strong",{parentName:"p"},"VSCode")," you can find in the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings"},"official docs")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"New projects generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai new")," command already has field ",(0,r.kt)("inlineCode",{parentName:"p"},"$schema")," in their ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json")," config.")),(0,r.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438-\u0434\u043b\u044f-build-\u044d\u0442\u0430\u043f\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f build \u044d\u0442\u0430\u043f\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"commands": {\n  "build": {\n    "options": {\n      "vendor": "", // path to the vendor file. If not provided vendor bundle will not be generated\n      "polyfill": "", // path to the polyfill file with all of the required polyfills. If not provided vendor bundle will not be generated\n      "server": "src/server",  // path to the server entry point\n      "outputServer": "dist/server", // folder to output server bundle\n      "outputClient": "dist/client"  // folder to output client bundle\n    },\n    "configurations": {\n      "commonChunk": true, // enables generation common chunk that includes shared code between chunks\n      "commonChunkSplitNumber": 3, // number of different chunks that should link to code in order to put that code in commonChunk\n      "sourceMap": false, // is client sourcemaps are enabled\n      "sourceMapServer": false, // is server sourcemaps are enabled\n      "modern": true, // enable separate client bundle for the modern browsers only\n      "checkAsyncTs": false, // enables background type checks\n      "terserParallel": true, // enables parallel terser compression\n      "granularChunks": false, // enables splitting commonChunk to many independent pieces. It may significantly reduce js size on some pages\n      "granularChunksSplitNumber": 2, // number of duplicates before move code to the granular chunk\n      "generateDataQaTag": false, // @deprecated automatically generate unique id for react components\n      "definePlugin": { // replaces passed strings with passed values in the build time\n        "prod": {},\n        "dev": {}\n      },\n      "threadLoader": { // config for the multithread build process (https://webpack.js.org/loaders/thread-loader/).\n      },\n      "postcss": { // config for the postcss-loader\n        "cssLocalIdentName": "[hash:base64:5]", // specifies identifier for the css class names\n        "config": "postcss.config" // path to the postcss.config file\n      },\n      "alias": {}, // alias config. More details in the [docs](https://www.npmjs.com/package/babel-plugin-module-resolver)\n      "removeTypeofWindow": true, // enables babel plugin transform-define that will replace code `typeof window` to \'undefined\' or \'object\' depending on the environment\n      "dedupe": "equality" | "semver" | false, // controls the deduplication plugin\n      "svgo": {\n        "plugins": [{ "cleanupIDs": false }, { "collapseGroups": false }], // svgo plugins (https://github.com/svg/svgo#what-it-can-do)\n      },\n      "imageOptimization": { // config for the process of the image optimizations\n        enabled: true, // enable image optimization\n        options: {} // options for the detailed settings (https://github.com/tcoopman/image-webpack-loader#options)\n      }\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"add-new-config-parameters"},"Add new config parameters"),(0,r.kt)("p",null,"Config parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," are stored as TypeScript interface from which JSON Schema is generating. This schema is used for the config validation and applying config defaults, thanks to the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv"),"."))}m.isMDXComponent=!0}}]);