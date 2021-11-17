(self.webpackChunk=self.webpackChunk||[]).push([[2688],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(k,o(o({ref:n},d),{},{components:t})):i.createElement(k,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3307:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>u});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o=["components"],l={id:"tramvai-library",title:"Creating a tramvai library"},p=void 0,s={unversionedId:"guides/tramvai-library",id:"guides/tramvai-library",isDocsHomePage:!1,title:"Creating a tramvai library",description:"Adding a new library or module to the tramvai repository is detailed in the Contribute section",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/tramvai-library.md",sourceDirName:"guides",slug:"/guides/tramvai-library",permalink:"/en/docs/guides/tramvai-library",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/tramvai-library.md",version:"current",frontMatter:{id:"tramvai-library",title:"Creating a tramvai library"},sidebar:"docs",previous:{title:"Static HTML Export",permalink:"/en/docs/features/static-html-export"},next:{title:"Bundle optimization",permalink:"/en/docs/guides/bundle-optimization"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Package name",id:"package-name",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Build",id:"build",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Adding a new library or module to the ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," repository is detailed in the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/contribute/contribute"},"Contribute section")),(0,r.kt)("p",null,"This guide contains a set of tips for developing individual ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," packages in application repositories,\nalso, many teams maintain separate monoreps with common packages for a number of applications, divided into different repositories."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Let's consider all important cases using the example of creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," module.\nLet's say the module will provide a new HTTP client to work with the Github ",(0,r.kt)("inlineCode",{parentName:"p"},"API"),"."),(0,r.kt)("h3",{id:"package-name"},"Package name"),(0,r.kt)("p",null,"It is highly discouraged to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai-tinkoff")," scopes outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," repository.\nIf our application is called ",(0,r.kt)("inlineCode",{parentName:"p"},"tincoin"),", you can, for example, select one of these scopes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tincoin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tramvai-tincoin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@tincoin-core"))),(0,r.kt)("p",null,"For modules, the prefix is \u200b\u200busually ",(0,r.kt)("inlineCode",{parentName:"p"},"module-"),", for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai-tincoin/module-github-api-client")),(0,r.kt)("h3",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"The choice of a versioning strategy is entirely yours.\nWe definitely recommend following ",(0,r.kt)("inlineCode",{parentName:"p"},"semver"),", and we can recommend using ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/concepts/versioning"},"unified versioning")," if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you support monorep with core libraries"),(0,r.kt)("li",{parentName:"ul"},"these libraries can be linked"),(0,r.kt)("li",{parentName:"ul"},"and these packages are used in applications all together (or most of them)")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Dealing with library dependencies is not an easy task, and there is no ideal solution, but there are a number of tips to make it easier to manage dependencies.\nThe best place to start is by dividing dependencies into different types:"),(0,r.kt)("h4",{id:"framework"},"Framework"),(0,r.kt)("p",null,"Examples of such dependencies are ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"react-dom"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/*")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai-tinkoff/*"),".\nIf we write ",(0,r.kt)("inlineCode",{parentName:"p"},"babel")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint")," plugin, it can be ",(0,r.kt)("inlineCode",{parentName:"p"},"@babel/core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,r.kt)("p",null,"Typically, an end user, such as a ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," application, is required to install a dependency framework,\nwithout them it simply won't work."),(0,r.kt)("p",null,"Therefore, our library should set them to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", with the most free versions, for example, if the package is tied to the basic functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai"),", and uses React hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peerDependencies": {\n    "@tramvai/core": "*",\n    "react": ">=16.8",\n    "react-dom": ">=16.8"\n  }\n}\n')),(0,r.kt)("h4",{id:"singleton"},"Singleton"),(0,r.kt)("p",null,"A number of dependencies must be strictly one in the application.\nAny duplicates are a minus. increase the weight of the application bundle, but libraries such as ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@tinkoff/logger")," require a single copy in our application."),(0,r.kt)("p",null,"For them, the rule applies as with the framework, you need to install them in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", with the most free versions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peerDependencies": {\n    "@tinkoff/logger": "*"\n  }\n}\n')),(0,r.kt)("h4",{id:"popular"},"Popular"),(0,r.kt)("p",null,"Many packages are popular enough that chances are they are already being used in the final application.\nAn example of such dependencies is - ",(0,r.kt)("inlineCode",{parentName:"p"},"date-fns"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lru-cache"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@tinkoff/dippy")),(0,r.kt)("p",null,"For them, the rule applies as with the framework, you need to install them in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", with the most free versions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "peerDependencies": {\n    "@tinkoff/dippy": "*",\n    "date-fns": ">=2",\n    "lru-cache": "*"\n  }\n}\n')),(0,r.kt)("h4",{id:"specific"},"Specific"),(0,r.kt)("p",null,"Let's say our new tramvai module delivers unique functionality to the application that requires a third-party library (or even another package in your monorepo)"),(0,r.kt)("p",null,"If we are developing a service to work with the Github API, it might be the ",(0,r.kt)("inlineCode",{parentName:"p"},"@octokit/rest")," package."),(0,r.kt)("p",null,"In this case, you need to put the library in ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", and you can leave the standard range using ",(0,r.kt)("inlineCode",{parentName:"p"},"^"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@octokit/rest": "^18.0.0"\n  }\n}\n')),(0,r.kt)("h4",{id:"development"},"Development"),(0,r.kt)("p",null,"A dependency may be involved in building your package - for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"rollup")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/build"),".\nThe dependency is required to run library tests.\nThe dependency contains the taipings required for the build."),(0,r.kt)("p",null,"In all these cases, even if either is already in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is worth adding a more specific version to ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@tramvai/build": "^2.5.0",\n    "@types/react": "^17.0.0",\n    "react": "^17.0.0"\n  }\n}\n')),(0,r.kt)("h4",{id:"exclusion"},"Exclusion"),(0,r.kt)("p",null,"Of course, there are exceptional cases."),(0,r.kt)("p",null,"For example, tramvai provides many test utilities where all the main ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai")," dependencies were in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),".\nAs soon as these utilities began to be used not in repositories with applications, but in monoreps with core packages, the problem of missing dependencies appeared, and we moved almost everything from ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")),(0,r.kt)("p",null,"Proceed according to the situation and always think about the usability of your product :)"),(0,r.kt)("h3",{id:"build"},"Build"),(0,r.kt)("p",null,"It is assumed that the final assembly of packages in the context of the application will be done by ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli"),".\nTherefore, to publish packages written in ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),", it suffices to use",(0,r.kt)("inlineCode",{parentName:"p"}," tsc"),", and publish many compiled ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," and",(0,r.kt)("inlineCode",{parentName:"p"}," .d.ts")," files."),(0,r.kt)("p",null,"But building packages into bundles before publishing, for example via ",(0,r.kt)("inlineCode",{parentName:"p"},"rollup")," or",(0,r.kt)("inlineCode",{parentName:"p"}," @tramvai/build"),", gives a number of possibilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"preliminary tree-shaking will cut off all unnecessary, this will have a positive effect on the assembly of the application"),(0,r.kt)("li",{parentName:"ul"},"you can make several bundles for different environments, in CJS or ES modules formats"),(0,r.kt)("li",{parentName:"ul"},"you can make a separate bundle for the browser build, separate for the server one - top for libraries with SSR support")),(0,r.kt)("p",null,"Detailed documentation on using ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/build")," is available in ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/tools/build"},"documentation")))}u.isMDXComponent=!0}}]);