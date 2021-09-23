(self.webpackChunk=self.webpackChunk||[]).push([[776],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),a=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=a(n),m=i,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(y,p(p({ref:t},c),{},{components:n})):r.createElement(y,p({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,p=new Array(s);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var a=2;a<s;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5330:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>a,toc:()=>c,default:()=>d});var r=n(2122),i=n(9756),s=(n(7294),n(3905)),p=["components"],l={id:"http-client",title:"http-client"},o=void 0,a={unversionedId:"references/libs/http-client",id:"references/libs/http-client",isDocsHomePage:!1,title:"http-client",description:"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 HttpClient \u0434\u043b\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 API \u0432 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445",source:"@site/tmp-docs/references/libs/http-client.md",sourceDirName:"references/libs",slug:"/references/libs/http-client",permalink:"/docs/references/libs/http-client",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/http-client.md",version:"current",frontMatter:{id:"http-client",title:"http-client"},sidebar:"docs",previous:{title:"error-handlers",permalink:"/docs/references/libs/error-handlers"},next:{title:"is-modern-lib",permalink:"/docs/references/libs/is-modern-lib"}},c=[{value:"API",id:"api",children:[{value:"HttpClient",id:"httpclient",children:[]},{value:"HttpClientRequest",id:"httpclientrequest",children:[]},{value:"HttpClientResponse",id:"httpclientresponse",children:[]},{value:"HttpClientError",id:"httpclienterror",children:[]},{value:"ApiService",id:"apiservice",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u0410\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,s.kt)("inlineCode",{parentName:"p"},"HttpClient")," \u0434\u043b\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 API \u0432 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445"),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("h3",{id:"httpclient"},"HttpClient"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClient = {\n  // \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  request<P = any>(request: HttpClientRequest): Promise<HttpClientResponse<P>>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 GET \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  get<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 POST \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  post<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'body' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 PUT \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  put<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'body' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 DELETE \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  delete<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 HTTP \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e\n  fork(options?: HttpClientRequest, mergeOptionsConfig?: { replace?: boolean }): HttpClient;\n}\n")),(0,s.kt)("h3",{id:"httpclientrequest"},"HttpClientRequest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientRequest = {\n  // \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0439 url \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 path\n  url?: string;\n  // \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 url \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441 url\n  path?: string;\n  // \u0431\u0430\u0437\u043e\u0432\u044b\u0439 url, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c \u043f\u0435\u0440\u0435\u0434 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0438\u0437 `path`\n  baseUrl?: string;\n  // \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0435 HTTP \u043c\u0435\u0442\u043e\u0434\u044b - GET, POST, PUT, DELETE\n  method?: HttpMethod;\n  // \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u0441 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - json\n  requestType?: HttpContentType;\n  // \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0432 \u043e\u0442\u0432\u0435\u0442, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e - json\n  responseType?: HttpContentType;\n  // HTTP \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n  headers?: Record<string, any>;\n  // query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n  query?: Record<string, any>;\n  // \u0442\u0435\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n  body?: Record<string, any>;\n  // \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 ms\n  timeout?: number;\n  // \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 HTTP \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043b\u043e\u0433\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\n  silent?: boolean;\n  // \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u044d\u0448\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\n  cache?: boolean;\n  // \u0435\u0441\u043b\u0438 `abortPromise` \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0440\u0435\u0437\u043e\u043b\u0432\u043b\u0435\u043d, \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\n  abortPromise?: Promise<void>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n  modifyRequest?: (req: HttpClientRequest) => HttpClientRequest;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u0430\n  modifyResponse?: <P = any>(res: HttpClientResponse<P>) => HttpClientResponse<P>;\n  // \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043e\u0448\u0438\u0431\u043a\u0438\n  modifyError?: (error: HttpClientError, req: HttpClientRequest) => HttpClientError;\n  [key: string]: any;\n}\n")),(0,s.kt)("h3",{id:"httpclientresponse"},"HttpClientResponse"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientResponse<P = any> = {\n  // \u0442\u0435\u043b\u043e \u043e\u0442\u0432\u0435\u0442\u0430\n  payload: P;\n  // HTTP \u043a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430\n  status: number;\n  // HTTP \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u043e\u0442\u0432\u0435\u0442\u0430\n  headers: Record<string, any>;\n}\n")),(0,s.kt)("h3",{id:"httpclienterror"},"HttpClientError"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientError = Error & {\n  [key: string]: any;\n}\n")),(0,s.kt)("h3",{id:"apiservice"},"ApiService"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ApiService")," - \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0442\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 API,\n\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0443\u044e \u043b\u043e\u0433\u0438\u043a\u0443 \u0432 \u043c\u0435\u0442\u043e\u0434\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"request"),", \u043f\u043e\u0432\u0435\u0440\u0445 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."),(0,s.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u0435\u0440\u0432\u0438\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e \u043f\u0440\u0438 \u043e\u0448\u0438\u0431\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"class CustomApiService extends ApiService {\n  constructor({ httpClient }: { httpClient: HttpClient }) {\n    super(httpClient);\n  }\n\n  request<R = any>(request: HttpClientRequest): Promise<HttpClientResponse<R>> {\n    return this.httpClient.request(request).catch((error) => {\n      alert(error);\n    });\n  }\n}\n\nconst service = new CustomApiService({ httpClient });\n\nservice.request({ path: 'fake' }) // \u043f\u043e\u043a\u0430\u0436\u0435\u0442 alert\nservice.get('fake') // \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 alert\n")))}d.isMDXComponent=!0}}]);