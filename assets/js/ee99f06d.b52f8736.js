"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),s=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,u=d["".concat(m,".").concat(k)]||d[k]||c[k]||i;return n?o.createElement(u,r(r({ref:t},l),{},{components:n})):o.createElement(u,r({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3873:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>s,toc:()=>l,default:()=>d});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],p={id:"dynamic-page",title:"Page with dynamic parameters"},m=void 0,s={unversionedId:"tutorials/pokedex-app/dynamic-page",id:"tutorials/pokedex-app/dynamic-page",title:"Page with dynamic parameters",description:"In this tutorial, we will create a page with detailed information about the pokemon, available at the url /pokemon/:name.",source:"@site/tmp-docs/tutorials/pokedex-app/05-dynamic-page.md",sourceDirName:"tutorials/pokedex-app",slug:"/tutorials/pokedex-app/dynamic-page",permalink:"/docs/tutorials/pokedex-app/dynamic-page",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/tutorials/pokedex-app/05-dynamic-page.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"dynamic-page",title:"Page with dynamic parameters"},sidebar:"sidebar",previous:{title:"Fetch data",permalink:"/docs/tutorials/pokedex-app/fetch-data"},next:{title:"Styling",permalink:"/docs/tutorials/pokedex-app/styling"}},l=[],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this tutorial, we will create a page with detailed information about the pokemon, available at the url ",(0,i.kt)("inlineCode",{parentName:"p"},"/pokemon/:name"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"pokeapi")," gives us information about the pokemon's elements, and its basic parameters, and we will try to display this information.\nTo create a url with dynamic parameters, the dynamic part of the path to the page component must be in square brackets, e.g. for the url ",(0,i.kt)("inlineCode",{parentName:"p"},"/pokemon/:name")," you have to create a component at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"routes/pokemon/[name]/index.tsx"),"."),(0,i.kt)("p",null,"\u231b Create empty page component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="routes/pokemon/[name]/index.tsx"',title:'"routes/pokemon/[name]/index.tsx"'},"import React from 'react';\n\nexport const PokemonView = () => {\n  return <>Hi! This is PokemonView component :)</>;\n};\n\nexport default PokemonView;\n")),(0,i.kt)("p",null,"After that, you can click on any of the pokemon on the homepage ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")," and after going to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/pokemon/bulbasaur/")," you will see the ",(0,i.kt)("inlineCode",{parentName:"p"},"PokemonView")," component."),(0,i.kt)("p",null,"It's time to download more pokemon information!\nThe service ",(0,i.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN")," will be used to get the dynamic parameters of the current route."),(0,i.kt)("p",null,"\u231b Add a new action to the pokemon entity to load data using dynamic parameters from the route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="entities/pokemon/model.ts"',title:'"entities/pokemon/model.ts"'},"// highlight-next-line\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n\nexport const fetchPokemonAction = createAction({\n  name: 'fetchPokemon',\n  fn: async (context, payload, deps) => {\n    // access to the `:name` parameter of the current route via PAGE_SERVICE_TOKEN\n    // highlight-next-line\n    const { name } = deps.pageService.getCurrentRoute().params;\n\n    // loading information about the pokemon\n    const pokemonResponse = await deps.pokeapiHttpClient.get<Pokemon>(`/pokemon/${name}`);\n\n    // save information about the pokemon in the store\n    context.dispatch(pokemonLoadedEvent(pokemonResponse.payload));\n  },\n  deps: {\n    pokeapiHttpClient: POKEAPI_HTTP_CLIENT,\n    // highlight-next-line\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n  conditions: {\n    // disable caching of the action, since it must be executed again for different name values\n    always: true,\n  },\n});\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can read more about the need to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"always")," condition to an action that depends on page parameters in ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/action#peculiarities"},"Action documentation")))),(0,i.kt)("p",null,"\u231b Connect action to a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/pokemon/index.tsx"',title:'"pages/pokemon/index.tsx"'},"import React from 'react';\n// highlight-next-line\nimport { fetchPokemonAction } from '~entities/pokemon';\n\nexport const PokemonView = () => {\n  return <>Hi! This is PokemonView component :)</>;\n};\n\n// highlight-next-line\nPokemonView.actions = [fetchPokemonAction];\n\nexport default PokemonView;\n")),(0,i.kt)("p",null,"Before render Pokemon data, it is worth extending our ",(0,i.kt)("inlineCode",{parentName:"p"},"Pokemon")," interface."),(0,i.kt)("p",null,"\u231b Complete the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pokemon")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="entities/pokemon/model.ts"',title:'"entities/pokemon/model.ts"'},"export type Pokemon = {\n  id: number;\n  name: string;\n  // highlight-start\n  stats: PokemonStat[];\n  types: PokemonType[];\n// highlight-end\n};\n\n// highlight-start\nexport type PokemonStat = {\n  // characteristic value\n  base_stat: number;\n  // characteristic name\n  stat: { name: string };\n};\n// highlight-end\n\n// highlight-start\nexport type PokemonType = {\n  // element type\n  type: { name: string };\n};\n// highlight-end\n")),(0,i.kt)("p",null,"To get ",(0,i.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN")," from the DI in the component, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDi")," hook."),(0,i.kt)("p",null,"\u231b Add code to get information about the pokemon in ",(0,i.kt)("inlineCode",{parentName:"p"},"PokemonView"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/pokemon/index.tsx"',title:'"pages/pokemon/index.tsx"'},"import React from 'react';\n// highlight-start\nimport { useStoreSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n// highlight-end\nimport { fetchPokemonAction } from '~entities/pokemon';\n\nexport const PokemonView = () => {\n  // highlight-start\n  // get PAGE_SERVICE_TOKEN from DI\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n  // access to the `:name` parameter of the current route via PAGE_SERVICE_TOKEN\n  const { name } = pageService.getCurrentRoute().params;\n  // get information about a specific pokemon\n  const pokemon = useStoreSelector(PokemonsStore, (pokemons) => pokemons[name]);\n  // highlight-end\n\n  return <>Hi! This is PokemonView component :)</>;\n}\n\nPokemonView.actions = [fetchPokemonAction];\n\nexport default PokemonView;\n")),(0,i.kt)("p",null,"\u231b And render all the data on the page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/pokemon/index.tsx"',title:'"pages/pokemon/index.tsx"'},"import React from 'react';\nimport { useStoreSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\n// highlight-next-line\nimport { Link } from '@tramvai/module-router';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n// highlight-next-line\nimport type { Pokemon, PokemonStat } from '~entities/pokemon';\nimport { fetchPokemonAction, PokemonsStore } from '~entities/pokemon';\n\n// highlight-start\n// utility to search for characteristics, will allow us to draw only some\nconst findStatByName = (\n  pokemon: Pokemon,\n  statKey: string\n): PokemonStat | undefined => {\n  return pokemon.stats.find((stat) => statKey === stat.stat.name);\n};\n// highlight-end\n\nexport const PokemonView = () => {\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n  const { name } = pageService.getCurrentRoute().params;\n  const pokemon = useStoreSelector(PokemonsStore, (pokemons) => pokemons[name]);\n\n  // highlight-start\n  // If there is no information about the pokemon, consider it to be loading\n  if (!pokemon) {\n    return <div>Loading...</div>;\n  }\n\n  const hpStat = findStatByName(pokemon, 'hp');\n  const attackStat = findStatByName(pokemon, 'attack');\n  const defenseStat = findStatByName(pokemon, 'defense');\n  const speedStat = findStatByName(pokemon, 'speed');\n\n  return (\n    <div>\n      <div>\n        <Link url=\"/\">Return to list</Link>\n      </div>\n      <img\n        alt={pokemon.name}\n        width={200}\n        height={200}\n        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}\n      />\n      <h2>{pokemon.name}</h2>\n      <div>\n        <p>Stats</p>\n        <ul>\n          {hpStat && <li>HP: {hpStat.base_stat}</li>}\n          {attackStat && <li>Attack: {attackStat.base_stat}</li>}\n          {defenseStat && <li>Defense: {defenseStat.base_stat}</li>}\n          {speedStat && <li>Speed: {speedStat.base_stat}</li>}\n        </ul>\n      </div>\n      <div>\n        <p>Types</p>\n        <ul>\n          {pokemon.types.map((type) => {\n            const typeKey = type.type.name;\n            return (\n              <li key={typeKey} data-type={typeKey}> {typeKey} </li>\n            );\n          })}\n        </ul>\n      </div>\n    </div>\n  );\n  // highlight-end\n}\n\nPokemonView.actions = [fetchPokemonAction];\n\nexport default PokemonView;\n")),(0,i.kt)("p",null,"Done!"),(0,i.kt)("p",null,"Now you can go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/pokemon/bulbasaur/")," page, where you will find detailed information about this wonderful creature :)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/tutorials/pokedex-app/styling"},"Next lesson"))))}d.isMDXComponent=!0}}]);