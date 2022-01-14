(self.webpackChunk=self.webpackChunk||[]).push([[7920],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7169:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>l,toc:()=>m,default:()=>u});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"file-system-pages",title:"File-System Pages"},p=void 0,l={unversionedId:"features/file-system-pages",id:"features/file-system-pages",isDocsHomePage:!1,title:"File-System Pages",description:"Experimental feature!",source:"@site/tmp-docs/features/file-system-pages.md",sourceDirName:"features",slug:"/features/file-system-pages",permalink:"/en/docs/features/file-system-pages",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/file-system-pages.md",version:"current",frontMatter:{id:"file-system-pages",title:"File-System Pages"},sidebar:"docs",previous:{title:"Static HTML Export",permalink:"/en/docs/features/static-html-export"},next:{title:"Child App",permalink:"/en/docs/features/child-app/child-app"}},m=[{value:"Explanation",id:"explanation",children:[{value:"Motivation",id:"motivation",children:[]},{value:"File-System Pages",id:"file-system-pages",children:[]},{value:"File-System Routing",id:"file-system-routing",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Pages",id:"pages",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Reducers",id:"reducers",children:[]},{value:"Components",id:"components",children:[]}]},{value:"How to",id:"how-to",children:[{value:"How to change layout component",id:"how-to-change-layout-component",children:[]},{value:"How to create static route with dynamic parameters",id:"how-to-create-static-route-with-dynamic-parameters",children:[]}]},{value:"Migration",id:"migration",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Experimental feature!")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"File-System Pages")," sets file naming conventions and allows you to easily connect page components with application routes, or even generate ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/references/modules/router#static-routes-in-the-application"},"static routes")," in your application."),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"By default, you need to provide page components with ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/concepts/bundle"},"bundles"),", then register this components for the corresponding routes, for example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create bundle with component (used ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/features/react#lazy"},"lazy")," for granular code splitting):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const commentsBundle = createBundle({\n    name: 'comments',\n    components: {\n        'comments-list': lazy(() => import('./pages/CommentsList')),\n    },\n});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create static route with this bundle and component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n    {\n        name: 'comments',\n        path: '/comments/',\n        config: {\n            bundle: 'comments',\n            pageComponent: 'comments-list',\n        },\n    },\n];\n")))),(0,r.kt)("p",null,"File-System Pages is designed to remove the first step, or even both steps, and make it easier to add new pages to the application."),(0,r.kt)("h3",{id:"file-system-pages"},"File-System Pages"),(0,r.kt)("p",null,"The first option is to automatically read page components from the file system and register them inside an application, without need to specify bundle.\nYou can use this components by unique name in ",(0,r.kt)("inlineCode",{parentName:"p"},"route.config.pageComponent")," property, and the component to be rendered for that route will be automatically wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy"),".\nThus, all routes with file-system pages will load only neccesary JS and CSS chunks."),(0,r.kt)("p",null,"For example, you create page components with this file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 comments.tsx\n")),(0,r.kt)("p",null,"This components will be available in the application with these names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@/pages/index\n@/pages/comments\n")),(0,r.kt)("p",null,"and you can create few static pages from them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n    {\n        name: 'main',\n        path: '/',\n        config: {\n            pageComponent: '@/pages/index',\n        },\n    },\n    {\n        name: 'comments',\n        path: '/comments/',\n        config: {\n            pageComponent: '@/pages/comments',\n        },\n    },\n];\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tinkoff/tramvai/-/tree/master/examples/fs-external-pages"},"Example application")),(0,r.kt)("h3",{id:"file-system-routing"},"File-System Routing"),(0,r.kt)("p",null,"Second option is less flexible, but fully automates the creation of routes in the application.\nStatic routes will be generated from file-system pages, and paths for this routes will be created based on paths to components, strictly conforming to naming conventions."),(0,r.kt)("p",null,"For example, you want to handle this urls by your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/\n/login/\n/comments/\n/comments/:id/\n")),(0,r.kt)("p",null,"In that case you need to create components with this file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 index.tsx\n    \u251c\u2500\u2500 login\n      \u2514\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 comments\n      \u251c\u2500\u2500 index.tsx\n      \u2514\u2500\u2500 [id]\n        \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"Where path with square brackets relates to dynamic parts of url."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"File for ",(0,r.kt)("inlineCode",{parentName:"p"},"/login/")," page must be named ",(0,r.kt)("inlineCode",{parentName:"p"},"login/index.tsx")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"login.tsx"),", because we must have strictly one way to convert url back to page component name.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tinkoff/tramvai/-/tree/master/examples/fs-routing"},"Example application")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Experimental feature File-System Pages hidden behind the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"commands.build.configurations.experiments.fileSystemPages.enable")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "your-app-name" : {\n      "commands": {\n        "build": {\n          "configurations": {\n            "experiments": {\n              "fileSystemPages": {\n                "enable": true,\n                "pagesDir": "pages",\n                "routesDir": "routes"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"enable": true')," - activates the feature")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"pagesDir": "pages"')," - default directory for ",(0,r.kt)("a",{parentName:"p",href:"#file-system-pages"},"File-System Pages"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"routesDir": "routes"')," - default directory for ",(0,r.kt)("a",{parentName:"p",href:"#file-system-routing"},"File-System Routing")))),(0,r.kt)("h3",{id:"pages"},"Pages"),(0,r.kt)("p",null,"You need to use default export in page components, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CommentsPage = () => <h1>Comments</h1>;\n\nexport default CommentsPage;\n")),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"Page components support ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/concepts/action#global-actions"},"global actions")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," static property, these actions will work as bundles actions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CommentsPage = () => <h1>Comments</h1>;\n\nCommentsPage.actions = [fetchCommentsListAction];\n\nexport default CommentsPage;\n")),(0,r.kt)("p",null,"This actions will be code-splitted with page component code."),(0,r.kt)("h3",{id:"reducers"},"Reducers"),(0,r.kt)("p",null,"Page components support ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/features/state/create-reducer"},"reducers")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," static property, these reducers will be registered in application store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CommentsPage = () => <h1>Comments</h1>;\n\nCommentsPage.reducers = [CommentsStore];\n\nexport default CommentsPage;\n")),(0,r.kt)("p",null,"This reducers will be code-splitted with page component code."),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("p",null,"Page components support additional React components in ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," static property, this components will be registered in the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CommentsPage = () => <h1>Comments</h1>;\n\nCommentsPage.components = {\n  'modal-box': () => <dialog>Modal Box</dialog>,\n};\n\nexport default CommentsPage;\n")),(0,r.kt)("p",null,"This components will be code-splitted with page component code."),(0,r.kt)("p",null,"You can directly access these components with ",(0,r.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDi } from '@tramvai/react';\nimport { PAGE_SERVICE } from '@tramvai/tokens-router';\n\nconst CommentsPage = () => {\n  const pageService = useDi(PAGE_SERVICE);\n  const ModalBox = pageService.getComponent('modal-box');\n \n  return (\n    <>\n      <h1>Comments</h1>\n      <ModalBox />\n    </>\n  )\n}\n")),(0,r.kt)("h2",{id:"how-to"},"How to"),(0,r.kt)("h3",{id:"how-to-change-layout-component"},"How to change layout component"),(0,r.kt)("p",null,"When use ",(0,r.kt)("a",{parentName:"p",href:"#file-system-pages"},"File-System Pages"),", at first, add layout component to page ",(0,r.kt)("inlineCode",{parentName:"p"},"components"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const CommentsPage = () => <h1>Comments</h1>;\n\nCommentsPage.components = {\n  'comments-layout': CommentsLayout,\n};\n\nexport default CommentsPage;\n")),(0,r.kt)("p",null,"then, add this layout to ",(0,r.kt)("inlineCode",{parentName:"p"},"layoutComponent")," property of appropriate route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n    {\n        name: 'comments',\n        path: '/comments/',\n        config: {\n            pageComponent: '@/pages/comments',\n            layoutComponent: 'comments-layout',\n        },\n    },\n];\n")),(0,r.kt)("p",null,"When use ",(0,r.kt)("a",{parentName:"p",href:"#file-system-routing"},"File-System Routing"),", at this moment you can't change the page layout."),(0,r.kt)("h3",{id:"how-to-create-static-route-with-dynamic-parameters"},"How to create static route with dynamic parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"#file-system-routing"},"File-System Routing")," example")),(0,r.kt)("p",null,"Wrap dynamic part of url in square brackets in file path."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"/comments/:id/")," create page component with this path ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/comments/[id]/index.tsx"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 pages\n    \u2514\u2500\u2500 comments\n      \u2514\u2500\u2500 [id]\n        \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"Dynamic parameter available in current route params."),(0,r.kt)("p",null,"In react components, use ",(0,r.kt)("inlineCode",{parentName:"p"},"useRoute")," hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRoute } from '@tramvai/module-router';\n\nconst Comment = () => {\n  const route = useRoute();\n\n  return (\n    <li>\n      Current comment id: {route.params.id}\n    </li>\n  );\n}\n")),(0,r.kt)("p",null,"In actions, use ",(0,r.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createAction } from '@tramvai/core';\n\nconst someAction = createAction({\n  name: 'someAction',\n  fn: (_, __, { pageService }) => {\n    const route = pageService.getCurrentRoute();\n    \n    console.log(`Current comment id: ${route.params.id}`);\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n")),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"If you want to migrate from bundles to file-system pages, there is few steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable ",(0,r.kt)("inlineCode",{parentName:"p"},"experiments.fileSystemPages.enable")," option in ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai.json"),", and change default folders for safety:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fileSystemPages": {\n    "enable": true,\n    "pagesDir": "new-fs-pages", // file-system pages directory\n    "routesDir": false // force disable file-system routing\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Split your bundles to components"),(0,r.kt)("p",{parentName:"li"},"from this bundle ",(0,r.kt)("inlineCode",{parentName:"p"},"src/bundles/someBundle.ts"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core';\nimport { lazy } from '@tramvai/react';\nimport { actionFoo, actionBar } from '../actions';\nimport { StoreFoo, StoreBar } from '../reducers';\nimport { CommonComponent } from '../components';\n\nconst someBundle = createBundle({\n  name: 'someBundle',\n  components: {\n    'pages/foo-page': lazy(() => import('../pages/Foo')),\n    'pages/bar-page': lazy(() => import('../pages/Bar')), \n    'components/common': CommonComponent,\n  },\n  actions: [actionFoo, actionBar],\n  reducers: [StoreFoo, StoreBar],\n});\n\nexport default someBundle;\n")),(0,r.kt)("p",{parentName:"li"},"you need to create two page components, ",(0,r.kt)("inlineCode",{parentName:"p"},"src/new-fs-pages/foo.tsx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src/new-fs-pages/bar.tsx"),", with this content:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { lazy } from '@tramvai/react';\nimport { actionFoo, actionBar } from '../actions';\nimport { StoreFoo, StoreBar } from '../reducers';\nimport { CommonComponent } from '../components';\n\n// the same for src/new-fs-pages/bar.tsx\nconst FooPage = () => {\n  return <h1>Foo Page</h1>;\n}\n\nFooPage.components = {\n    'components/common': CommonComponent,\n};\nFooPage.actions = [actionFoo, actionBar];\nFooPage.reducers = [StoreFoo, StoreBar];\n\nexport default FooPage;\n")),(0,r.kt)("p",{parentName:"li"},"then update your routes config from:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes = [\n    {\n        name: 'foo',\n        path: '/foo/',\n        config: {\n            bundle: 'sameBundle',\n            pageComponent: 'pages/foo-page',\n        },\n    },\n    {\n        name: 'bar',\n        path: '/bar/',\n        config: {\n            bundle: 'sameBundle',\n            pageComponent: 'pages/bar-page',\n        },\n    },\n]\n")),(0,r.kt)("p",{parentName:"li"},"to this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes = [\n    {\n        name: 'foo',\n        path: '/foo/',\n        config: {\n            pageComponent: '@/new-fs-pages/foo',\n        },\n    },\n    {\n        name: 'bar',\n        path: '/bar/',\n        config: {\n            pageComponent: '@/new-fs-pages/bar',\n        },\n    },\n]\n")),(0,r.kt)("p",{parentName:"li"},"and remove ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," property from ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp")))))}u.isMDXComponent=!0}}]);