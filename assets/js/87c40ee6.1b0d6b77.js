"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3985],{5933:(e,n,r)=>{r.d(n,{TF:()=>s});var t=r(4848),a=r(8453);const s=()=>{const e={code:"code",pre:"pre",...(0,a.R)()};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",title:"workerWrapper.js",children:'const { workerData } = require(\'worker_threads\');\n\nif (workerData.fullpath.endsWith(".ts")) {\nrequire("ts-node").register();\n}\nmodule.exports = require(workerData.fullpath);\n'})})}},7717:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var t=r(4848),a=r(8453),s=r(1470),i=r(9365),o=r(5933);const l={id:"Resource Limits",sidebar_position:12},c=void 0,u={id:"examples/Resource Limits",title:"Resource Limits",description:"Piscina allows you to set resource limits on worker threads to prevent them from consuming excessive memory. The example below will show you how to configure and use resource limits to handle out-of-memory scenarios.",source:"@site/docs/examples/resource-limit.mdx",sourceDirName:"examples",slug:"/examples/Resource Limits",permalink:"/piscina/examples/Resource Limits",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"Resource Limits",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"React Server Side Rendering",permalink:"/piscina/examples/React Server Side Rendering"},next:{title:"Scrypt",permalink:"/piscina/examples/Scrypt"}},d={},m=[];function p(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Piscina allows you to set resource limits on worker threads to prevent them from consuming excessive memory. The example below will show you how to configure and use resource limits to handle out-of-memory scenarios."}),"\n",(0,t.jsx)(n.p,{children:"The main file sets up a Piscina instance with specific resource limits:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxOldGenerationSizeMb"}),": Limits the maximum size of the old generation in the V8 heap to 16 MB."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"maxYoungGenerationSizeMb"}),": Limits the maximum size of the young generation in the V8 heap to 4 MB."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"codeRangeSizeMb"}),": Limits the size of the code range to 16 MB."]}),"\n"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"'use strict';\n\nconst Piscina = require('piscina');\nconst { resolve } = require('path');\nconst { strictEqual } = require('assert');\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, 'worker.js'),\n  resourceLimits: {\n    maxOldGenerationSizeMb: 16,\n    maxYoungGenerationSizeMb: 4,\n    codeRangeSizeMb: 16\n  }\n});\n\n(async function () {\n  try {\n    await piscina.run();\n  } catch (err) {\n    console.log('Worker terminated due to resource limits');\n    strictEqual(err.code, 'ERR_WORKER_OUT_OF_MEMORY');\n  }\n})();\n"})})}),(0,t.jsxs)(i.A,{value:"Typescript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:"import Piscina from 'piscina';\nimport { resolve } from 'path';\nimport { strictEqual } from 'assert';\nimport { filename } from './worker';\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, 'workerWrapper.js'),\n  workerData: { fullpath: filename },\n  resourceLimits: {\n    maxOldGenerationSizeMb: 16,\n    maxYoungGenerationSizeMb: 4,\n    codeRangeSizeMb: 16\n  }\n});\n\n(async function () {\n  try {\n    await piscina.run({}, { name: 'memoryLeak' });\n  } catch (err) {\n    console.log('Worker terminated due to resource limits');\n    strictEqual((err as any).code, 'ERR_WORKER_OUT_OF_MEMORY');\n  }\n})();\n"})}),(0,t.jsx)(o.TF,{})]})]}),"\n",(0,t.jsx)(n.p,{children:"The worker file contains a function that deliberately causes a memory leak by creating an infinitely growing array. This will eventually exceed the memory limits set in the main file."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="worker.js"',children:"'use strict';\n\nmodule.exports = () => {\n  const array = [];\n  while (true) {\n    array.push([array]);\n  }\n};\n"})})}),(0,t.jsx)(i.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="worker.ts"',children:"export const filename = __filename;\n\nexport function memoryLeak(): void {\n  const array: any[] = [];\n  while (true) {\n    array.push([array]);\n  }\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You can also check out this example on ",(0,t.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/resourceLimits",children:"github"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),a=r(4164),s=r(3104),i=r(6347),o=r(205),l=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=m(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);