"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[324],{5933:(e,n,r)=>{r.d(n,{TF:()=>s});var t=r(4848),a=r(8453);const s=()=>{const e={code:"code",pre:"pre",...(0,a.R)()};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",title:"workerWrapper.js",children:'const { workerData } = require(\'worker_threads\');\n\nif (workerData.fullpath.endsWith(".ts")) {\nrequire("ts-node").register();\n}\nmodule.exports = require(workerData.fullpath);\n'})})}},2180:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=r(4848),a=r(8453),s=(r(5933),r(1470)),i=r(9365);const o={id:"Named Tasks",sidebar_position:10},l=void 0,u={id:"examples/Named Tasks",title:"Named Tasks",description:"Piscina supports running named tasks within a single worker file. This example demonstrates how to use a dispatcher pattern to execute different operations based on the task name.",source:"@site/docs/examples/named.mdx",sourceDirName:"examples",slug:"/examples/Named Tasks",permalink:"/examples/Named Tasks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"Named Tasks",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"N-API Native Addon",permalink:"/examples/N-API Native Addon"},next:{title:"Progress",permalink:"/examples/Progress"}},c={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Piscina supports running named tasks within a single worker file. This example demonstrates how to use a dispatcher pattern to execute different operations based on the task name."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"'use strict';\n\nconst Piscina = require('piscina');\nconst { resolve } = require('path');\nconst { makeTask } = require('./helper');\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, 'worker.js')\n});\n\n(async function () {\n  const result = await Promise.all([\n    piscina.run(makeTask('add', 4, 6)),\n    piscina.run(makeTask('sub', 4, 6))\n  ]);\n  console.log(result);\n})();\n"})})}),(0,t.jsx)(i.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import Piscina from "piscina";\nimport { resolve } from "path";\nimport { filename } from "./worker";\nimport { makeTask } from "./helper";\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, "./workerWrapper.js"),\n  workerData: { fullpath: filename },\n});\n(async function () {\n  const result = await Promise.all([\n    piscina.run(makeTask(\'add\', 4, 6)),\n    piscina.run(makeTask(\'sub\', 4, 6))\n  ]);\n  console.log(result);\n})();\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"The worker file uses a dispatcher to handle different operations:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="worker.js"',children:"'use strict';\n\nconst { dispatcher } = require('./helper');\n\nmodule.exports = dispatcher({\n  add (a, b) { return a + b; },\n  sub (a, b) { return a - b; }\n});\n"})})}),(0,t.jsx)(i.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="worker.ts"',children:"import { dispatcher } from './helper';\n\nexport default dispatcher({\n  add (a: number, b: number): number { return a + b; },\n  sub (a: number, b: number): number { return a - b; }\n});\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"The helper file provides utility functions for creating tasks and dispatching them:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="helper.js"',children:"function makeTask (op, ...args) {\n  return { op, args };\n}\n\nfunction dispatcher (obj) {\n  return async ({ op, args }) => {\n    return await obj[op](...args);\n  };\n}\n\nmodule.exports = {\n  dispatcher,\n  makeTask\n};\n"})})}),(0,t.jsx)(i.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="helper.ts"',children:"type Task = {\n  op: string;\n  args: any[];\n};\n\nexport function makeTask (op: string, ...args: any[]): Task {\n  return { op, args };\n}\n\nexport function dispatcher (obj: Record<string, Function>) {\n  return async ({ op, args }: Task) => {\n    return await obj[op](...args);\n  };\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also check out this example on ",(0,t.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/named",children:"github"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),a=r(4164),s=r(3104),i=r(6347),o=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(k,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);