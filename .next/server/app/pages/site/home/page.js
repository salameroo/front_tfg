(()=>{var e={};e.id=453,e.ids=[453],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},837:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,originalPathname:()=>p,pages:()=>d,routeModule:()=>f,tree:()=>u}),r(1655),r(8643),r(8563),r(1506),r(5866);var s=r(3191),n=r(8716),a=r(7922),o=r.n(a),i=r(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["pages",{children:["site",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1655)),"C:\\Users\\gabri\\Desktop\\Repos\\front_tfg\\app\\pages\\site\\home\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8643)),"C:\\Users\\gabri\\Desktop\\Repos\\front_tfg\\app\\pages\\site\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8563)),"C:\\Users\\gabri\\Desktop\\Repos\\front_tfg\\app\\pages\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"C:\\Users\\gabri\\Desktop\\Repos\\front_tfg\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\gabri\\Desktop\\Repos\\front_tfg\\app\\pages\\site\\home\\page.tsx"],p="/pages/site/home/page",c={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/pages/site/home/page",pathname:"/pages/site/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},8615:(e,t,r)=>{Promise.resolve().then(r.bind(r,6094))},6094:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(326);let n=(0,r(3265).default)(async()=>{},{loadableGenerated:{modules:["app\\pages\\site\\home\\page.tsx -> @/components/Seguidores/feed"]},ssr:!1}),a=()=>s.jsx("div",{className:"container mx-auto p-4",children:s.jsx(n,{})})},3265:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var s=r(3353),n=r.n(s)},3353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let s=r(1174);r(326),r(7577);let n=s._(r(7028));function a(e,t){var r;let s={loading:e=>{let{error:t,isLoading:r,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e);let a={...s,...t};return(0,n.default)({...a,modules:null==(r=a.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=r(4129);function n(e){let{reason:t,children:r}=e;throw new s.BailoutToCSRError(t)}},7028:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let s=r(326),n=r(7577),a=r(933),o=r(6618);function i(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},u=function(e){let t={...l,...e},r=(0,n.lazy)(()=>t.loader().then(i)),u=t.loading;function d(e){let i=u?(0,s.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,l=t.ssr?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.PreloadCss,{moduleIds:t.modules}),(0,s.jsx)(r,{...e})]}):(0,s.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,s.jsx)(r,{...e})});return(0,s.jsx)(n.Suspense,{fallback:i,children:l})}return d.displayName="LoadableComponent",d}},6618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let s=r(326),n=r(5403);function a(e){let{moduleIds:t}=e,r=(0,n.getExpectedRequestStore)("next/dynamic css"),a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,s.jsx)(s.Fragment,{children:a.map(e=>(0,s.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},1655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>i});var s=r(8570);let n=(0,s.createProxy)(String.raw`C:\Users\gabri\Desktop\Repos\front_tfg\app\pages\site\home\page.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let i=(0,s.createProxy)(String.raw`C:\Users\gabri\Desktop\Repos\front_tfg\app\pages\site\home\page.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,82,838,687,357],()=>r(837));module.exports=s})();