"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2122],{5933:(e,n,t)=>{t.d(n,{TF:()=>a});var r=t(4848),s=t(8453);const a=()=>{const e={code:"code",pre:"pre",...(0,s.R)()};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",title:"workerWrapper.js",children:'const { workerData } = require(\'worker_threads\');\n\nif (workerData.fullpath.endsWith(".ts")) {\nrequire("ts-node").register();\n}\nmodule.exports = require(workerData.fullpath);\n'})})}},3907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(4848),s=t(8453),a=t(1470),o=t(9365),i=t(5933);const l={id:"Stream-In",sidebar_position:17},c=void 0,u={id:"examples/Stream-In",title:"Stream-In",description:"Piscina can be effectively used in data processing pipelines, handling large volumes of data efficiently by leveraging worker threads and implementing proper flow control.",source:"@site/docs/examples/stream-in.mdx",sourceDirName:"examples",slug:"/examples/Stream-In",permalink:"/piscina/examples/Stream-In",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{id:"Stream-In",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Stream",permalink:"/piscina/examples/Stream"},next:{title:"Task Queue",permalink:"/piscina/examples/Task Queue"}},d={},p=[];function m(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Piscina can be effectively used in data processing pipelines, handling large volumes of data efficiently by leveraging worker threads and implementing proper flow control."}),"\n",(0,r.jsx)(n.p,{children:"The main script in the example below sets up a Piscina pool and a CSV stream, then processes each line of the CSV file through a worker thread."}),"\n",(0,r.jsx)(n.p,{children:"We implement flow control by pausing the stream when the Piscina queue reaches its maximum size and resuming it when the queue drains. This ensures that memory usage remains under control even when processing very large files."}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:"'use strict';\n\n// node index [maxQueue]\n// example: node index\n//   defaults to 100\n// example: node index 100\n// example: node index 500\n\nconst { resolve } = require('path');\nconst csv = require('csvtojson');\nconst Pool = require('piscina');\nconst { performance, PerformanceObserver } = require('perf_hooks');\nconst Progress = require('./progress');\n\nconst p = new PerformanceObserver((entries) => {\n  console.log(entries.getEntries()[0].duration);\n});\np.observe({ entryTypes: ['measure'] });\n\nconst maxQueue = Math.max(parseInt(process.argv[2] || 100), 50);\n\nconst pool = new Pool({\n  filename: resolve(__dirname, 'worker.js'),\n  maxQueue\n});\n\nconst stream = csv().fromFile('./data.csv');\n\npool.on('drain', () => {\n  if (stream.isPaused()) {\n    console.log('resuming...', pool.queueSize);\n    stream.resume();\n  }\n});\n\nconst progress = new Progress();\nprogress.on('finished', () => {\n  console.log(progress.message);\n});\n\nperformance.mark('A');\nstream\n  .on('data', (data) => {\n    const line = data.toString('utf8');\n    progress.incSubmitted();\n    pool.run(line)\n      .then(() => {\n        progress.incCompleted();\n      })\n      .catch((err) => {\n        progress.incFailed();\n        stream.destroy(err);\n      });\n    if (pool.queueSize === maxQueue) {\n      console.log('pausing...', pool.queueSize, pool.utilization);\n      stream.pause();\n    }\n  })\n  .on('error', (err) => {\n    console.log(err.message);\n    console.log('run: `node generate` to generate the sample data');\n  })\n  .on('end', () => {\n    // We are done submitting tasks\n    progress.done();\n    performance.mark('B');\n    performance.measure('A to B', 'A', 'B');\n  });\n\nprocess.on('exit', () => {\n  console.log('Mean Wait Time:', pool.waitTime.mean, 'ms');\n  console.log('Mean Run Time:', pool.runTime.mean, 'ms');\n});\n"})})}),(0,r.jsxs)(o.A,{value:"Typescript",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:"// node index [maxQueue]\n// example: node index\n//   defaults to 100\n// example: node index 100\n// example: node index 500\n\nimport { resolve } from 'path';\nimport csv from 'csvtojson';\nimport Pool  from 'piscina';\nimport { performance, PerformanceObserver } from 'perf_hooks';\nimport { filename } from './worker';\nimport Progress from './progress';\n\nconst p = new PerformanceObserver((entries) => {\n  console.log(entries.getEntries()[0].duration);\n});\np.observe({ entryTypes: ['measure'] });\n\nconst maxQueue = Math.max(parseInt(process.argv[2] || '100', 10), 50);\n\nconst pool = new Pool({\n  filename: resolve(__dirname, 'workerWrapper.js'),\n  workerData: { fullpath: filename },\n  maxQueue,\n});\n\nconst stream = csv().fromFile('./data.csv');\n\npool.on('drain', () => {\n  if (stream.isPaused()) {\n    console.log('resuming...', pool.queueSize);\n    stream.resume();\n  }\n});\n\nconst progress = new Progress();\nprogress.on('finished', () => {\n  console.log(progress.message);\n});\n\nperformance.mark('A');\nstream\n  .on('data', (data) => {\n    const line = data.toString('utf8');\n    progress.incSubmitted();\n    pool.run(line)\n      .then(() => {\n        progress.incCompleted();\n      })\n      .catch((err) => {\n        progress.incFailed();\n        stream.destroy(err);\n      });\n    if (pool.queueSize === maxQueue) {\n      console.log('pausing...', pool.queueSize, pool.utilization);\n      stream.pause();\n    }\n  })\n  .on('error', (err) => {\n    console.log(err.message);\n    console.log('run: `node generate` to generate the sample data');\n  })\n  .on('end', () => {\n    // We are done submitting tasks\n    progress.done();\n    performance.mark('B');\n    performance.measure('A to B', 'A', 'B');\n  });\n\nprocess.on('exit', () => {\n  console.log('Mean Wait Time:', pool.waitTime.mean, 'ms');\n  console.log('Mean Run Time:', pool.runTime.mean, 'ms');\n});\n"})}),(0,r.jsx)(i.TF,{})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The worker (",(0,r.jsx)(n.code,{children:"worker.js"}),") is a simple function that takes a line of data and returns its JSON stringified version."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="worker.js"',children:"module.exports = (data) => {\n  return JSON.stringify(data);\n};\n"})})}),(0,r.jsx)(o.A,{value:"Typescript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="worker.ts"',children:"export default function toJson(data: any): string {\n  return JSON.stringify(data);\n}\n\nexport const filename = __filename;\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["A custom ",(0,r.jsx)(n.code,{children:"Progress"})," class (",(0,r.jsx)(n.code,{children:"progress.js"}),") is used to track the progress of the task, emitting events and providing status messages."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="progress.js"',children:"'use strict';\nconst { EventEmitter } = require('events');\n\nclass Progress extends EventEmitter {\n  #tasksSubmitted = 0;\n  #tasksCompleted = 0;\n  #tasksFailed = 0;\n  #done = false;\n\n  done () {\n    this.#done = true;\n  }\n\n  incSubmitted () {\n    this.#tasksSubmitted++;\n  }\n\n  incCompleted () {\n    this.#tasksCompleted++;\n    if (this.#done && this.completed === this.#tasksSubmitted) {\n      process.nextTick(() => this.emit('finished'));\n    }\n  }\n\n  incFailed () {\n    this.#tasksFailed++;\n  }\n\n  get completed () {\n    return this.#tasksCompleted + this.#tasksFailed;\n  }\n\n  get message () {\n    return `${this.#tasksCompleted} of ${this.#tasksSubmitted} completed` +\n      ` ${((this.#tasksCompleted / this.#tasksSubmitted) * 100).toFixed(2)}%` +\n      ` [${this.#tasksFailed} failed]`;\n  }\n};\n\nmodule.exports = Progress;\n"})})}),(0,r.jsx)(o.A,{value:"Typescript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="progress.ts"',children:"import { EventEmitter } from 'events';\n\nclass Progress extends EventEmitter {\n  #tasksSubmitted = 0;\n  #tasksCompleted = 0;\n  #tasksFailed = 0;\n  #done = false;\n\n  done() {\n    this.#done = true;\n  }\n\n  incSubmitted() {\n    this.#tasksSubmitted++;\n  }\n\n  incCompleted() {\n    this.#tasksCompleted++;\n    if (this.#done && this.completed === this.#tasksSubmitted) {\n      process.nextTick(() => this.emit('finished'));\n    }\n  }\n\n  incFailed() {\n    this.#tasksFailed++;\n  }\n\n  get completed() {\n    return this.#tasksCompleted + this.#tasksFailed;\n  }\n\n  get message() {\n    return `${this.#tasksCompleted} of ${this.#tasksSubmitted} completed` +\n      ` ${((this.#tasksCompleted / this.#tasksSubmitted) * 100).toFixed(2)}%` +\n      ` [${this.#tasksFailed} failed]`;\n  }\n}\n\nexport default Progress;\n\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["A separate script (",(0,r.jsx)(n.code,{children:"generate.js"}),") is provided to generate sample CSV data for testing purposes."]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"Javascript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="generate.js"',children:"'use strict';\n\nconst { createWriteStream } = require('fs');\n\nconst out = createWriteStream('./data.csv');\n\nconst count = parseInt(process.argv[2] || '5000') || 5000;\n\nout.write('a,b,c,d,e,f,g\\n');\n\nfor (let n = 0; n < count; n++) {\n  out.write('1,2,3,4,5,6,7\\n');\n}\n\nout.end();\nconsole.log('done');\n\n"})})}),(0,r.jsx)(o.A,{value:"Typescript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="generate.ts"',children:"import { createWriteStream } from 'fs';\n\nconst out = createWriteStream('./data.csv');\n\nconst count = parseInt(process.argv[2] || '5000') || 5000;\n\nout.write('a,b,c,d,e,f,g\\n');\n\nfor (let n = 0; n < count; n++) {\n  out.write('1,2,3,4,5,6,7\\n');\n}\n\nout.end();\nconsole.log('done');\n\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can also check out this example on ",(0,r.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/es-module",children:"github"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),s=t(4164),a=t(3104),o=t(6347),i=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=h({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(k,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);