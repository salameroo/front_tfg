(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7737:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u}),s(6506),s(8643),s(8563),s(1506),s(5866);var r=s(3191),a=s(8716),n=s(7922),l=s.n(n),o=s(5231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let u=["",{children:["pages",{children:["site",{children:["messages",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6506)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\site\\messages\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8643)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\site\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,8563)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\site\\messages\\page.tsx"],c="/pages/site/messages/page",p={require:s,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/pages/site/messages/page",pathname:"/pages/site/messages",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},2900:(e,t,s)=>{Promise.resolve().then(s.bind(s,9261))},9261:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(326),a=s(3265),n=s(3337);let l=(0,a.default)(async()=>{},{loadableGenerated:{modules:["app\\pages\\site\\messages\\page.tsx -> @/components/vercel/component/messages"]},ssr:!1,loading:()=>r.jsx(n.Z,{})});function o(){return(0,r.jsxs)("div",{children:[r.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Tus Mensajes"}),r.jsx(l,{})]})}},3337:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(326);s(7577);let a=()=>r.jsx("div",{className:"flex items-center justify-center h-full",children:r.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})})},3265:(e,t,s)=>{"use strict";s.d(t,{default:()=>a.a});var r=s(3353),a=s.n(r)},3353:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let r=s(1174);s(326),s(7577);let a=r._(s(7028));function n(e,t){var s;let r={loading:e=>{let{error:t,isLoading:s,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,a.default)({...n,modules:null==(s=n.loadableGenerated)?void 0:s.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=s(4129);function a(e){let{reason:t,children:s}=e;throw new r.BailoutToCSRError(t)}},7028:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let r=s(326),a=s(7577),n=s(933),l=s(6618);function o(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},s=(0,a.lazy)(()=>t.loader().then(o)),u=t.loading;function d(e){let o=u?(0,r.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.PreloadCss,{moduleIds:t.modules}),(0,r.jsx)(s,{...e})]}):(0,r.jsx)(n.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(s,{...e})});return(0,r.jsx)(a.Suspense,{fallback:o,children:i})}return d.displayName="LoadableComponent",d}},6618:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return n}});let r=s(326),a=s(5403);function n(e){let{moduleIds:t}=e,s=(0,a.getExpectedRequestStore)("next/dynamic css"),n=[];if(s.reactLoadableManifest&&t){let e=s.reactLoadableManifest;for(let s of t){if(!e[s])continue;let t=e[s].files.filter(e=>e.endsWith(".css"));n.push(...t)}}return 0===n.length?null:(0,r.jsx)(r.Fragment,{children:n.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:s.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},6506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>n,default:()=>o});var r=s(8570);let a=(0,r.createProxy)(String.raw`C:\laragon\www\www_casa\www\react\front_tfg\app\pages\site\messages\page.tsx`),{__esModule:n,$$typeof:l}=a;a.default;let o=(0,r.createProxy)(String.raw`C:\laragon\www\www_casa\www\react\front_tfg\app\pages\site\messages\page.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,82,739,133,434,737],()=>s(7737));module.exports=r})();