(self.webpackChunk=self.webpackChunk||[]).push([[9956],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6683:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>c});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],u={id:"react-query-usage",title:"Using @tramvai/react-query library"},s=void 0,l={unversionedId:"how-to/react-query-usage",id:"how-to/react-query-usage",isDocsHomePage:!1,title:"Using @tramvai/react-query library",description:"For @tramvai/react-query to work, you need to connect the @tramvai/module-react-query module to the application",source:"@site/tmp-docs/how-to/react-query-usage.md",sourceDirName:"how-to",slug:"/how-to/react-query-usage",permalink:"/docs/how-to/react-query-usage",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/react-query-usage.md",version:"current",frontMatter:{id:"react-query-usage",title:"Using @tramvai/react-query library"},sidebar:"docs",previous:{title:"react-query",permalink:"/docs/references/modules/react-query"},next:{title:"API",permalink:"/docs/features/react-query/api"}},p=[{value:"Basic example with createQuery and useQuery",id:"basic-example-with-createquery-and-usequery",children:[]},{value:"Preloading data on the server for useQuery",id:"preloading-data-on-the-server-for-usequery",children:[]},{value:"Sharing useQuery data between components",id:"sharing-usequery-data-between-components",children:[]},{value:"Passing parameters for the request",id:"passing-parameters-for-the-request",children:[]},{value:"Setting react-query parameters",id:"setting-react-query-parameters",children:[]},{value:"Failed requests",id:"failed-requests",children:[]},{value:"Using conditions for query",id:"using-conditions-for-query",children:[]},{value:"Basic example for createInfiniteQuery and useInfiniteQuery",id:"basic-example-for-createinfinitequery-and-useinfinitequery",children:[]},{value:"Basic example for createMutation and useMutation",id:"basic-example-for-createmutation-and-usemutation",children:[]}],d={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/react-query/api"},"@tramvai/react-query")," to work, you need to connect the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/modules/react-query"},"@tramvai/module-react-query")," module to the application"),(0,i.kt)("h2",{id:"basic-example-with-createquery-and-usequery"},"Basic example with createQuery and useQuery"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get<string>('api/base');\n\n    await new Promise((resolve) => setTimeout(resolve, 50));\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n\n"))))),(0,i.kt)("h2",{id:"preloading-data-on-the-server-for-usequery"},"Preloading data on the server for useQuery"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get<string>('api/base');\n    await new Promise((resolve) => setTimeout(resolve, 50));\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n\nComponent.actions = [query.prefetchAction()];\n\n"))))),(0,i.kt)("h2",{id:"sharing-usequery-data-between-components"},"Sharing useQuery data between components"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState, useEffect } from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get<string>('api/base');\n\n    await new Promise((resolve) => setTimeout(resolve, 5000));\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\nconst Child1 = () => {\n  const { isLoading, data } = useQuery(query);\n\n  return <div>Child1: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child2 = () => {\n  const { isLoading, data } = useQuery(query);\n\n  return <div>Child2: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child3 = () => {\n  const { isLoading, data } = useQuery(query);\n\n  return <div>Child3: {isLoading ? 'loading...' : data}</div>;\n};\n\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const [child2, setChild2Visible] = useState(false);\n  const [child3, setChild3Visible] = useState(false);\n\n  useEffect(() => {\n    setTimeout(() => {\n      setChild2Visible(true);\n    }, 3000);\n\n    setTimeout(() => {\n      setChild3Visible(true);\n    }, 7000);\n  }, []);\n\n  return (\n    <>\n      <Child1 />\n      {child2 && <Child2 />}\n      {child3 && <Child3 />}\n    </>\n  );\n}\n\n"))))),(0,i.kt)("h2",{id:"passing-parameters-for-the-request"},"Passing parameters for the request"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { useState, useEffect } from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: (parameter: string) => ['api-group', parameter],\n  fn: async (parameter, { apiClient }) => {\n    console.log(`request to ${parameter}`);\n    const { payload } = await apiClient.get<string>(`api/group/${parameter}`);\n\n    await new Promise((resolve) => setTimeout(resolve, 5000));\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\nconst Child1 = () => {\n  const { isLoading, data } = useQuery(query, 'test-1');\n\n  return <div>Child1: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child2 = () => {\n  const { isLoading, data } = useQuery(query, 'test-1');\n\n  return <div>Child2: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child3 = () => {\n  const { isLoading, data } = useQuery(query, 'test-2');\n\n  return <div>Child3: {isLoading ? 'loading...' : data}</div>;\n};\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const [child2, setChild2Visible] = useState(false);\n  const [child3, setChild3Visible] = useState(false);\n\n  useEffect(() => {\n    setTimeout(() => {\n      setChild2Visible(true);\n    }, 3000);\n\n    setTimeout(() => {\n      setChild3Visible(true);\n    }, 7000);\n  }, []);\n\n  return (\n    <>\n      <Child1 />\n      {child2 && <Child2 />}\n      {child3 && <Child3 />}\n    </>\n  );\n}\n\n"))))),(0,i.kt)("h2",{id:"setting-react-query-parameters"},"Setting react-query parameters"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: 'time',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get<string>('api/time');\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n  queryOptions: {\n    refetchOnWindowFocus: true,\n    refetchOnMount: true,\n  },\n});\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data } = useQuery(\n    query.fork({\n      refetchInterval: 2000,\n      refetchIntervalInBackground: false,\n    })\n  );\n\n  return <div>{data}</div>;\n}\n\n"))))),(0,i.kt)("h2",{id:"failed-requests"},"Failed requests"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get('api/fail');\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n  queryOptions: {\n    retryDelay: 500,\n  },\n});\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data, isLoading, isError, error } = useQuery(query);\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (isError) {\n    return <div>error: {error.message}</div>;\n  }\n\n  return <div>{data}</div>;\n}\n\n"))))),(0,i.kt)("h2",{id:"using-conditions-for-query"},"Using conditions for query"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\nimport { TAPI_ROLES } from '@tinkoff/roles';\n\nconst query = createQuery({\n  key: 'base',\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get('api/auth');\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n  conditions: {\n    requiredCoreRoles: [TAPI_ROLES.REGISTERED],\n  },\n});\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data = 'no-data', isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n\n"))))),(0,i.kt)("h2",{id:"basic-example-for-createinfinitequery-and-useinfinitequery"},"Basic example for createInfiniteQuery and useInfiniteQuery"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createInfiniteQuery, useInfiniteQuery } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\ninterface Response {\n  nextPage?: number;\n  list: string[];\n}\n\nconst query = createInfiniteQuery({\n  key: 'list',\n  fn: async (_, start = 0, { apiClient }) => {\n    const { payload } = await apiClient.get<Response>('api/list', {\n      query: {\n        count: 30,\n        start,\n      },\n    });\n\n    return payload;\n  },\n  getNextPageParam: (page: Response) => {\n    return page.nextPage;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n  infiniteQueryOptions: {},\n});\n\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(query);\n\n  if (isLoading) {\n    return <>loading...</>;\n  }\n\n  return (\n    <div>\n      <div>\n        {data!.pages.map((page) => {\n          return page.list.map((entry) => {\n            return <div key={entry}>{entry}</div>;\n          });\n        })}\n      </div>\n      {hasNextPage && (\n        <button type=\"button\" onClick={() => fetchNextPage()}>\n          Load more\n        </button>\n      )}\n    </div>\n  );\n}\n\n"))))),(0,i.kt)("h2",{id:"basic-example-for-createmutation-and-usemutation"},"Basic example for createMutation and useMutation"),(0,i.kt)("p",null,(0,i.kt)("details",null,(0,i.kt)("summary",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import React from 'react';\nimport { createMutation, useMutation } from '@tramvai/react-query';\nimport { TINKOFF_API_SERVICE } from '@tramvai/module-api-clients';\n\nconst mutation = createMutation({\n  key: 'post',\n  fn: async (_, data: string, { apiClient }) => {\n    const { payload } = await apiClient.post('api/post', {\n      body: {\n        data,\n      },\n    });\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { isLoading, mutate } = useMutation(mutation);\n\n  if (isLoading) {\n    return <>loading...</>;\n  }\n\n  return (\n    <button type=\"button\" onClick={() => mutate('test')}>\n      Send data\n    </button>\n  );\n}\n\n"))))))}c.isMDXComponent=!0}}]);