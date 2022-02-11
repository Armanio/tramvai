"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8479],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||p;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3548:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>c,default:()=>m});var n=r(3117),a=r(102),p=(r(7294),r(3905)),o=["components"],i={},s=void 0,l={unversionedId:"references/tramvai/test/puppeteer",id:"references/tramvai/test/puppeteer",title:"puppeteer",description:"Set of helpers for using puppeteer in the integration tests",source:"@site/tmp-docs/references/tramvai/test/puppeteer.md",sourceDirName:"references/tramvai/test",slug:"/references/tramvai/test/puppeteer",permalink:"/docs/references/tramvai/test/puppeteer",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/test/puppeteer.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"mocks",permalink:"/docs/references/tramvai/test/mocks"},next:{title:"react",permalink:"/docs/references/tramvai/test/react"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"How To",id:"how-to",children:[{value:"Tests in browser",id:"tests-in-browser",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Set of helpers for using ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer"},"puppeteer")," in the integration tests"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("inlineCode",{parentName:"p"},"puppeter")," should be installed separately")),(0,p.kt)("h2",{id:"installation"},"Installation"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-puppeteer\n")),(0,p.kt)("h2",{id:"how-to"},"How To"),(0,p.kt)("h3",{id:"tests-in-browser"},"Tests in browser"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"Puppeteer")," runs tests in headless Chrome browser, documentation can be found on ",(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"official site")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"import { startCli } from '@tramvai/test-integration';\nimport { initPuppeteer, wrapPuppeteerPage } from '@tramvai/test-puppeteer';\n\nbeforeAll(async () => {\n  app = await startCli('bootstrap', {\n    env: {\n      SOME_ENV: 'test',\n    },\n  });\n}, 80000);\n\nafterAll(() => {\n  return app.close();\n});\n\nit('puppeteer', async () => {\n  const { browser } = await initPuppeteer(app.serverUrl);\n\n  const page = await browser.newPage();\n  const wrapper = wrapPuppeteerPage(page);\n\n  await page.goto(app.serverUrl);\n\n  expect(\n    await page.$eval('.application', (node) => (node as HTMLElement).innerText)\n  ).toMatchInlineSnapshot(`\"Main Page click link\"`);\n\n  await wrapper.router.navigateWithReload('./second');\n\n  expect(\n    await page.$eval('.application', (node) => (node as HTMLElement).innerText)\n  ).toMatchInlineSnapshot(`\"Second Page click link\"`);\n\n  await browser.close();\n});\n")))}m.isMDXComponent=!0}}]);