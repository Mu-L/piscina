"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1064],{5933:(e,n,r)=>{r.d(n,{TF:()=>a});var t=r(4848),s=r(8453);const a=()=>{const e={code:"code",pre:"pre",...(0,s.R)()};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",title:"workerWrapper.js",children:'const { workerData } = require(\'worker_threads\');\n\nif (workerData.fullpath.endsWith(".ts")) {\nrequire("ts-node").register();\n}\nmodule.exports = require(workerData.fullpath);\n'})})}},5889:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=r(4848),s=r(8453),a=r(1470),o=r(9365),i=r(5933);const c={id:"React Server Side Rendering",sidebar_position:12},l=void 0,d={id:"examples/React Server Side Rendering",title:"React Server Side Rendering",description:"This example explains how to use Piscina for server-side rendering (SSR) of React components. We'll compare a pooled version using Piscina with an unpooled version to highlight the benefits of using a thread pool for SSR.",source:"@site/docs/examples/react-ssr.mdx",sourceDirName:"examples",slug:"/examples/React Server Side Rendering",permalink:"/examples/React Server Side Rendering",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{id:"React Server Side Rendering",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Progress",permalink:"/examples/Progress"},next:{title:"Resource Limits",permalink:"/examples/Resource Limits"}},u={},p=[{value:"Pooled Version",id:"pooled-version",level:3},{value:"Unpooled Version",id:"unpooled-version",level:3},{value:"Benchmarking Results",id:"benchmarking-results",level:2},{value:"Pooled Version Result",id:"pooled-version-result",level:3},{value:"Unpooled Version Result",id:"unpooled-version-result",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This example explains how to use Piscina for server-side rendering (SSR) of React components. We'll compare a pooled version using Piscina with an unpooled version to highlight the benefits of using a thread pool for SSR."}),"\n",(0,t.jsx)(n.p,{children:"To get started, make sure you have the following dependencies installed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install fastify fastify-piscina react react-dom lorem-ipsum\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you are using TypeScript in your project, also install:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install -D typescript @types/react @types/react-dom @types/node\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The function in the worker file uses ",(0,t.jsx)(n.code,{children:"ReactDOMServer.renderToString()"})," to render two React components: ",(0,t.jsx)(n.code,{children:"Greeting"})," and ",(0,t.jsx)(n.code,{children:"Lorem"}),"."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="worker.js"',children:"'use strict';\n\nconst React = require('react');\nconst ReactDOMServer = require('react-dom/server');\nconst { Greeting, Lorem } = require('./components');\n\nmodule.exports = ({ name }) => {\n  return `\n  <!doctype html>\n    <html>\n    <body>\n    <div id=\"root\">${\n      ReactDOMServer.renderToString(React.createElement(Greeting, { name }))\n    }</div>\n    ${\n      ReactDOMServer.renderToString(React.createElement(Lorem))\n    }\n    <script src=\"/static/home.js\"><\/script>\n  </body>\n  </html>`;\n};\n"})})}),(0,t.jsx)(o.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="worker.ts"',children:"import React from 'react';\nimport ReactDOMServer from 'react-dom/server';\nimport { Greeting, Lorem } from './components';\n\nexport const filename = __filename;\n\ninterface WorkerInput {\n  name: string;\n}\n\nexport function renderPage({ name }: WorkerInput): string {\n  return `\n  <!doctype html>\n    <html>\n    <body>\n    <div id=\"root\">${\n      ReactDOMServer.renderToString(React.createElement(Greeting, { name }))\n    }</div>\n    ${\n      ReactDOMServer.renderToString(React.createElement(Lorem))\n    }\n    <script src=\"/static/home.js\"><\/script>\n  </body>\n  </html>`;\n}\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Here are the components used in this example:"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(o.A,{value:"Javascript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="components/greeting.js"',children:"'use strict';\n\nconst React = require('react');\n\nclass Greeting extends React.Component {\n  render () {\n    return React.createElement('div', null, 'hello ' + this.props.name);\n  }\n}\n\nmodule.exports = Greeting;\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="components/lorem.js"',children:"'use strict';\n\nconst React = require('react');\nconst { LoremIpsum } = require('lorem-ipsum');\n\nclass Paragraph extends React.Component {\n  #lorem;\n\n  constructor (props) {\n    super(props);\n    this.#lorem = new LoremIpsum({\n      sentencesPerParagraph: {\n        max: 8,\n        min: 4\n      },\n      wordsPerSentence: {\n        max: 16,\n        min: 4\n      }\n    });\n  }\n\n  render () {\n    return React.createElement('div', null, this.#lorem.generateParagraphs(1));\n  }\n}\n\nclass Lorem extends React.Component {\n  render () {\n    const children = [];\n    for (let n = 0; n < Math.floor(Math.random() * 50); n++) {\n      children.push(React.createElement(Paragraph, { key: n }));\n    }\n    return React.createElement('div', null, children);\n  }\n}\n\nmodule.exports = Lorem;\n"})})]}),(0,t.jsxs)(o.A,{value:"Typescript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="components/greeting.tsx"',children:"import React from 'react';\n\ninterface GreetingProps {\n  name: string;\n}\n\nclass Greeting extends React.Component<GreetingProps> {\n  render() {\n    return React.createElement('div', null, 'hello ' + this.props.name);\n  }\n}\n\nexport default Greeting;\n"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="components/lorem.tsx"',children:"import React from 'react';\nimport { LoremIpsum } from 'lorem-ipsum';\n\nclass Paragraph extends React.Component {\n  private lorem: LoremIpsum;\n\n  constructor(props: {}) {\n    super(props);\n    this.lorem = new LoremIpsum({\n      sentencesPerParagraph: {\n        max: 8,\n        min: 4\n      },\n      wordsPerSentence: {\n        max: 16,\n        min: 4\n      }\n    });\n  }\n\n  render() {\n    return React.createElement('div', null, this.lorem.generateParagraphs(1));\n  }\n}\n\nclass Lorem extends React.Component {\n  render() {\n    const children = [];\n    for (let n = 0; n < Math.floor(Math.random() * 50); n++) {\n      children.push(React.createElement(Paragraph, { key: n }));\n    }\n    return React.createElement('div', null, children);\n  }\n}\n\nexport default Lorem;\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"pooled-version",children:"Pooled Version"}),"\n",(0,t.jsxs)(n.p,{children:["In pooled version of the code, we set up a Fastify server with Piscina integration. We register the ",(0,t.jsx)(n.code,{children:"fastify-piscina"})," plugin, configuring it to use the ",(0,t.jsx)(n.code,{children:"worker.js"})," file with 6 threads. The root route (",(0,t.jsx)(n.code,{children:"/"}),") uses ",(0,t.jsx)(n.code,{children:"fastify.runTask()"})," to execute the rendering in a worker thread."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="pooled.js"',children:"'use strict';\n\nconst fastify = require('fastify')();\nconst { resolve } = require('path');\n\nfastify.register(require('fastify-piscina'), {\n  filename: resolve(__dirname, 'worker.js'),\n  execArgv: [],\n  minThreads: 6,\n  maxThreads: 6\n});\n\n// Declare a route\nfastify.get('/', async () => fastify.runTask({ name: 'James' }));\n\n// Run the server!\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    process.exit(1);\n  }\n};\nstart();\n\nprocess.on('SIGINT', () => {\n  const waitTime = fastify.piscina.waitTime;\n  console.log('\\nMax Queue Wait Time:', waitTime.max);\n  console.log('Mean Queue Wait Time:', waitTime.mean);\n  process.exit(0);\n});\n"})})}),(0,t.jsxs)(o.A,{value:"Typescript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="pooled.ts"',children:"\nimport { resolve } from 'path';\nimport { filename } from './worker';\n\nconst fastify = require('fastify')();\n\nfastify.register(require('fastify-piscina'), {\n  filename: resolve(__dirname, 'workerWrapper.js'),\n  workerData: { fullpath: filename },\n  execArgv: [],\n  minThreads: 6,\n  maxThreads: 6\n});\n\n// Declare a route\nfastify.get('/', async () => fastify.runTask({ name: 'James' }, { name: 'renderPage' }));\n\n// Run the server!\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    process.exit(1);\n  }\n};\nstart();\n\nprocess.on('SIGINT', () => {\n  const waitTime = (fastify as any).piscina.waitTime;\n  console.log('\\nMax Queue Wait Time:', waitTime.max);\n  console.log('Mean Queue Wait Time:', waitTime.mean);\n  process.exit(0);\n});\n"})}),(0,t.jsx)(i.TF,{})]})]}),"\n",(0,t.jsx)(n.h3,{id:"unpooled-version",children:"Unpooled Version"}),"\n",(0,t.jsxs)(n.p,{children:["In the unpooled version of the server, we perform the same rendering as the pooled version, but with no thread pool or worker management. The root route (",(0,t.jsx)(n.code,{children:"/"}),") renders the React components synchronously in the request handler."]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Javascript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="unpooled.js"',children:"'use strict';\n\nconst fastify = require('fastify')();\nconst React = require('react');\nconst ReactDOMServer = require('react-dom/server');\nconst { Greeting, Lorem } = require('./components');\n\n// Declare a route\nfastify.get('/', async () => {\n  const name = 'James';\n  return `\n  <!doctype html>\n    <html>\n    <body>\n    <div id=\"root\">${\n      ReactDOMServer.renderToString(React.createElement(Greeting, { name }))\n    }</div>\n    ${\n      ReactDOMServer.renderToString(React.createElement(Lorem))\n    }\n    <script src=\"/static/home.js\"><\/script>\n  </body>\n  </html>`;\n});\n\n// Run the server!\nconst start = async () => {\n  try {\n    await fastify.listen(3000);\n  } catch (err) {\n    process.exit(1);\n  }\n};\nstart();\n"})})}),(0,t.jsx)(o.A,{value:"Typescript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",metastring:'title="unpooled.ts"',children:"import fastify from 'fastify';\nimport React from 'react';\nimport ReactDOMServer from 'react-dom/server';\nimport { Greeting, Lorem } from './components';\n\nconst server = fastify();\n\n// Declare a route\nserver.get('/', async () => {\n  const name = 'James';\n  return `\n  <!doctype html>\n    <html>\n    <body>\n    <div id=\"root\">${\n      ReactDOMServer.renderToString(React.createElement(Greeting, { name }))\n    }</div>\n    ${\n      ReactDOMServer.renderToString(React.createElement(Lorem))\n    }\n    <script src=\"/static/home.js\"><\/script>\n  </body>\n  </html>`;\n});\n\n// Run the server!\nconst start = async () => {\n  try {\n    await server.listen(3000);\n  } catch (err) {\n    process.exit(1);\n  }\n};\nstart();\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Run either the pooled or unpooled version:"}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(o.A,{value:"Pooled",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"node pooled.js\n"})})}),(0,t.jsx)(o.A,{value:"Unpooled",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"node unpooled.js\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Access ",(0,t.jsx)(n.code,{children:"http://localhost:3000"})," in your browser to see the rendered page."]}),"\n",(0,t.jsx)(n.h2,{id:"benchmarking-results",children:"Benchmarking Results"}),"\n",(0,t.jsxs)(n.p,{children:["We used ",(0,t.jsx)(n.code,{children:"autocannon"})," to benchmark both the pooled and unpooled versions."]}),"\n",(0,t.jsx)(n.p,{children:"Install autocannon:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm i -g autocannon\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then benchmark the results by running the script below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"autocannon http://localhost:3000\n"})}),"\n",(0,t.jsx)(n.p,{children:"Here are the results:"}),"\n",(0,t.jsx)(n.h3,{id:"pooled-version-result",children:"Pooled Version Result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Running 10s test @ http://localhost:3000\n10 connections\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Stat    \u2502 2.5% \u2502 50%  \u2502 97.5% \u2502 99%   \u2502 Avg    \u2502 Stdev    \u2502 Max    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Latency \u2502 2 ms \u2502 4 ms \u2502 44 ms \u2502 63 ms \u2502 6.9 ms \u2502 10.98 ms \u2502 190 ms \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Stat      \u2502 1%     \u2502 2.5%   \u2502 50%     \u2502 97.5%   \u2502 Avg     \u2502 Stdev   \u2502 Min    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Req/Sec   \u2502 657    \u2502 657    \u2502 1,225   \u2502 2,067   \u2502 1,348.9 \u2502 454.88  \u2502 657    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Bytes/Sec \u2502 2.3 MB \u2502 2.3 MB \u2502 4.35 MB \u2502 7.12 MB \u2502 4.68 MB \u2502 1.55 MB \u2502 2.3 MB \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nReq/Bytes counts sampled once per second.\n# of samples: 10\n\n13k requests in 10.07s, 46.8 MB read\n"})}),"\n",(0,t.jsx)(n.h3,{id:"unpooled-version-result",children:"Unpooled Version Result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Running 10s test @ http://localhost:3000\n10 connections\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Stat    \u2502 2.5% \u2502 50%   \u2502 97.5% \u2502 99%   \u2502 Avg      \u2502 Stdev    \u2502 Max    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Latency \u2502 8 ms \u2502 22 ms \u2502 63 ms \u2502 75 ms \u2502 25.03 ms \u2502 14.78 ms \u2502 165 ms \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Stat      \u2502 1%     \u2502 2.5%   \u2502 50%     \u2502 97.5%   \u2502 Avg     \u2502 Stdev  \u2502 Min    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Req/Sec   \u2502 234    \u2502 234    \u2502 419     \u2502 590     \u2502 395.6   \u2502 127.26 \u2502 234    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Bytes/Sec \u2502 785 kB \u2502 785 kB \u2502 1.47 MB \u2502 1.97 MB \u2502 1.36 MB \u2502 439 kB \u2502 785 kB \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nReq/Bytes counts sampled once per second.\n# of samples: 10\n\n4k requests in 10.22s, 13.6 MB read\n"})}),"\n",(0,t.jsx)(n.p,{children:"The pooled version using Piscina offers several advantages for server-side rendering:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It handles significantly more requests per second (1,348.9 vs 395.6 on average)."}),"\n",(0,t.jsx)(n.li,{children:"It has lower latency (6.9ms vs 25.03ms on average)."}),"\n",(0,t.jsx)(n.li,{children:"It processes more data (4.68 MB/sec vs 1.36 MB/sec on average)."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can also check out this example on ",(0,t.jsx)(n.a,{href:"https://github.com/piscinajs/piscina/tree/current/examples/react-ssr",children:"github"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>R});var t=r(6540),s=r(4164),a=r(3104),o=r(6347),i=r(205),c=r(7485),l=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=p(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,u]=h({queryString:r,groupId:s}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=l??f;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=i[r].value;s!==t&&(l(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function b(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function R(e){const n=(0,g.A)();return(0,x.jsx)(b,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);