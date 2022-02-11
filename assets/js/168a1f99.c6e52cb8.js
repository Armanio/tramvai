"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return n?i.createElement(u,r(r({ref:t},s),{},{components:n})):i.createElement(u,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1028:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,toc:()=>s,default:()=>m});var i=n(3117),a=n(102),o=(n(7294),n(3905)),r=["components"],l={id:"di",title:"Dependency Injection",sidebar_position:2},c=void 0,d={unversionedId:"concepts/di",id:"concepts/di",title:"Dependency Injection",description:"Tramvai is based on a DI system that contains information about dependencies, connections between them, and already created instances of dependencies.",source:"@site/tmp-docs/concepts/di.md",sourceDirName:"concepts",slug:"/concepts/di",permalink:"/docs/concepts/di",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/concepts/di.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"di",title:"Dependency Injection",sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction to tramvai",permalink:"/docs/concepts/overview"},next:{title:"Provider",permalink:"/docs/concepts/provider"}},s=[{value:"Concepts",id:"concepts",children:[],level:2},{value:"Features",id:"features",children:[{value:"Dynamic Initialization",id:"dynamic-initialization",children:[],level:3},{value:"Replacing implementations",id:"replacing-implementations",children:[],level:3},{value:"Checking the availability of the implementation of all dependencies",id:"checking-the-availability-of-the-implementation-of-all-dependencies",children:[],level:3}],level:2},{value:"Using DI",id:"using-di",children:[{value:"In modules",id:"in-modules",children:[],level:3},{value:"In createApp",id:"in-createapp",children:[],level:3},{value:"In actions",id:"in-actions",children:[],level:3}],level:2},{value:"Container A",id:"container-a",children:[{value:"Root container",id:"root-container",children:[],level:3},{value:"Container is a child",id:"container-is-a-child",children:[],level:3}],level:2},{value:"Additional material",id:"additional-material",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tramvai is based on a ",(0,o.kt)("inlineCode",{parentName:"p"},"DI")," system that contains information about dependencies, connections between them, and already created instances of dependencies."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/provider"},"Provider")," - Token implementation in DI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/provider"},"Tokens")," - provider identifier in DI system and at the same time its interface"),(0,o.kt)("li",{parentName:"ul"},"Container - storage with all providers and their implementations")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"dynamic-initialization"},"Dynamic Initialization"),(0,o.kt)("p",null,"Providers are initialized only if the code got an instance using the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," method from the di container or if the provider was specified as a",(0,o.kt)("inlineCode",{parentName:"p"}," deps")," dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"module"),". In other cases, the provider will not be created and initialized."),(0,o.kt)("p",null,"This feature allows us to register providers in any order and replace implementations."),(0,o.kt)("h3",{id:"replacing-implementations"},"Replacing implementations"),(0,o.kt)("p",null,"In some cases, the basic implementation of the functionality may not be suitable for us, and to solve this problem, we can override the implementation of the providers. For example, the current logger from the common-module is not suitable for us and we want to replace it, for this we need to drop a new implementation for the token into the providers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\ncreateApp({\n  modules: [CommonModule],\n  providers: [\n    provide({\n      provide: LOGGER_TOKEN,\n      useValue: console,\n    }),\n  ],\n});\n")),(0,o.kt)("p",null,"After that, we will replace the implementation of",(0,o.kt)("inlineCode",{parentName:"p"}," LOGGER_TOKEN"),", which was declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonModule"),", with a native object ",(0,o.kt)("inlineCode",{parentName:"p"},"console")),(0,o.kt)("h3",{id:"checking-the-availability-of-the-implementation-of-all-dependencies"},"Checking the availability of the implementation of all dependencies"),(0,o.kt)("p",null,"When initializing the provider, the availability of all dependencies is automatically checked if no dependency was found and the provider is not optional, an exception is thrown in development mode."),(0,o.kt)("h2",{id:"using-di"},"Using DI"),(0,o.kt)("h3",{id:"in-modules"},"In modules"),(0,o.kt)("p",null,"Passing an array to the ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," parameter that will be added when the application is initialized in DI. ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/module"},"More about modules")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"@Module({\n  providers: [\n    // ...\n  ],\n})\nexport class MyModule {}\n")),(0,o.kt)("h3",{id:"in-createapp"},"In createApp"),(0,o.kt)("p",null,"You can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," array to ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/tramvai/core#createApp"},"createApp"),", which will have the highest priority and will overwrite the implementations of the modules and core interfaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"createApp({\n  providers: [\n    // ...\n  ],\n});\n")),(0,o.kt)("h3",{id:"in-actions"},"In actions"),(0,o.kt)("p",null,"To get provider implementations, you can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," object when creating an action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"createAction({\n  name: 'action',\n  fn: (context, payload, deps) => {\n    deps.logger.error('ERROR');\n  },\n  deps: {\n    logger: 'logger',\n  },\n});\n")),(0,o.kt)("h2",{id:"container-a"},"Container A"),(0,o.kt)("p",null,"container that stores a list of registered providers in the application, as well as instances of provider implementations that have already been created."),(0,o.kt)("h3",{id:"root-container"},"Root container"),(0,o.kt)("p",null,"Top-level global container that contains all registered providers and global singletons that live as long as the application lives."),(0,o.kt)("h3",{id:"container-is-a-child"},"Container is a child"),(0,o.kt)("p",null,"A DI instance created for each client (user who sent a request to the server) that inherits from the container root. But it allows you to create and store your own class instances. Which can contain private information about the client and at the same time, this information will not leak to other clients, for example, a link to the actual Request object."),(0,o.kt)("p",null,"Consumer di is created and lives on while we respond to the client. As soon as we answered, consumer di is deleted and all private information is cleared. This does not require manual cleaning and deletion of the di container or its dependencies. This work is based on the fact that when responding to the client, the reference to the context and the DI container is lost. Then the GC will delete everything from memory."),(0,o.kt)("h2",{id:"additional-material"},"Additional material"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Video explaining why DI is needed and why you should use it ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ETyltCwtQHs"},"Part 1")," ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RwLWYB9C2Tc"},"Part 2")),(0,o.kt)("li",{parentName:"ul"},"Release of the devshakhta which is dedicated to DI and why is it needed ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3NgWwzwDeTQ"},"https://www.youtube.com/watch?v=3NgWwzwDeTQ"))))}m.isMDXComponent=!0}}]);