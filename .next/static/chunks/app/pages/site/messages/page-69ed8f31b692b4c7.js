(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9165],{9444:function(e,t,n){Promise.resolve().then(n.bind(n,1840))},1840:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var l=n(7437),r=n(7818),u=n(9060);let o=(0,r.default)(()=>Promise.all([n.e(5856),n.e(1616),n.e(8690),n.e(9398)]).then(n.bind(n,9398)),{loadableGenerated:{webpack:()=>[9398]},ssr:!1,loading:()=>(0,l.jsx)(u.Z,{})});function s(){return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h1",{className:"text-2xl text-center font-bold mb-4",children:"Tus Mensajes"}),(0,l.jsx)(o,{})]})}},9060:function(e,t,n){"use strict";var l=n(7437);n(2265),t.Z=()=>(0,l.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,l.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})})},7818:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var l=n(551),r=n.n(l)},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(9920);n(7437),n(2265);let r=l._(n(148));function u(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let u={...l,...t};return(0,r.default)({...u,modules:null==(n=u.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let l=n(7437),r=n(2265),u=n(912),o=n(1481);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},n=(0,r.lazy)(()=>t.loader().then(s)),d=t.loading;function a(e){let s=d?(0,l.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(u.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(r.Suspense,{fallback:s,children:i})}return a.displayName="LoadableComponent",a}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return u}});let l=n(7437),r=n(8512);function u(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),u=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));u.push(...t)}}return 0===u.length?null:(0,l.jsx)(l.Fragment,{children:u.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}}},function(e){e.O(0,[2971,7023,1744],function(){return e(e.s=9444)}),_N_E=e.O()}]);