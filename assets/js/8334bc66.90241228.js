"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6252],{5933:(e,t,n)=>{n.d(t,{TF:()=>s});var r=n(4848),a=n(8453);const s=()=>{const e={code:"code",pre:"pre",...(0,a.R)()};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",title:"workerWrapper.js",children:'const { workerData } = require(\'worker_threads\');\n\nif (workerData.fullpath.endsWith(".ts")) {\nrequire("ts-node").register();\n}\nmodule.exports = require(workerData.fullpath);\n'})})}},7313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(4848),a=n(8453),s=n(1470),i=n(9365),l=n(5933);const o={id:"Simple",sidebar_position:15},c=void 0,u={id:"examples/Simple",title:"Simple",description:"In this example, we create a Piscina instance that uses a worker file to perform a simple addition operation. The main script (index.js) creates the Piscina instance and runs a task, while the worker script (worker.js) defines the task to be executed.",source:"@site/docs/examples/simple.mdx",sourceDirName:"examples",slug:"/examples/Simple",permalink:"/examples/Simple",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{id:"Simple",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/examples/Server"},next:{title:"Simple Async",permalink:"/examples/Simple Async"}},d={},p=[];function m(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example, we create a Piscina instance that uses a worker file to perform a simple addition operation. The main script (",(0,r.jsx)(t.code,{children:"index.js"}),") creates the Piscina instance and runs a task, while the worker script (",(0,r.jsx)(t.code,{children:"worker.js"}),") defines the task to be executed."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(i.A,{value:"Javascript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="index.js"',children:"'use strict';\n\nconst Piscina = require('../..');\nconst { resolve } = require('path');\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, 'worker.js')\n});\n\n(async function () {\n  const result = await piscina.run({ a: 4, b: 6 });\n  console.log(result); // Prints 10\n})();\n"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="worker.js"',children:"'use strict';\n\nmodule.exports = ({ a, b }) => {\n  return a + b;\n};\n"})})]}),(0,r.jsxs)(i.A,{value:"Typescript",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="index.ts"',children:"import Piscina from 'piscina';\nimport { resolve } from 'path';\nimport { filename } from './worker';\n\nconst piscina = new Piscina({\n  filename: resolve(__dirname, 'workerWrapper.js'),\n  workerData: { fullpath: filename },\n});\n\n(async function () {\n  const result = await piscina.run({ a: 4, b: 6 });\n  console.log(result); // Prints 10\n})();\n"})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="worker.ts"',children:"export const filename = __filename;\n\ninterface AdditionParams {\n  a: number;\n  b: number;\n}\n\nexport default ({ a, b }: AdditionParams): number => {\n  return a + b;\n};\n"})}),(0,r.jsx)(l.TF,{})]})]}),"\n",(0,r.jsxs)(t.p,{children:["You can also check out this example on ",(0,r.jsx)(t.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/simple",children:"github"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),s=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),u=n(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);