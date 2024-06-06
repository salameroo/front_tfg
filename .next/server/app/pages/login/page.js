(()=>{var e={};e.id=343,e.ids=[343],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5614:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),a(6640),a(8563),a(1506),a(5866);var r=a(3191),s=a(8716),n=a(7922),i=a.n(n),l=a(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let c=["",{children:["pages",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6640)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\login\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,8563)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1506)),"C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\laragon\\www\\www_casa\\www\\react\\front_tfg\\app\\pages\\login\\page.tsx"],p="/pages/login/page",m={require:a,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/pages/login/page",pathname:"/pages/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5887:(e,t,a)=>{Promise.resolve().then(a.bind(a,4519))},1542:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},6789:()=>{},5425:()=>{},4519:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(326),s=a(7577),n=a(4723),i=a(4064),l=a(7256),o=a(6562),c=a(4786),d=a(1726),p=a(45),m=a(434);let x=l.z.object({email:l.z.string().email({message:"Must be a valid email"}),password:l.z.string()});function g(){let[e,t]=(0,s.useState)(!1),[a,l]=(0,s.useState)(""),{register:g,handleSubmit:u,reset:h,formState:{errors:w}}=(0,n.cI)({resolver:(0,i.F)(x)}),f=async()=>{if(!(await fetch("http://localhost:8000/sanctum/csrf-cookie",{credentials:"include"})).ok)throw Error("Failed to fetch CSRF token")},y=async e=>{if(await f(),o.Z.get("auth_token"))window.location.href="http://localhost:3000/pages/site/dashboard";else try{t(!0);let a=await fetch("http://localhost:8000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}),r=await a.json();a.ok?(o.Z.set("auth_token",r.auth_token,{expires:7,path:""}),window.location.href="http://localhost:3000/pages/site/settings"):l("Error: "+(r.message||"Failed to login.")),t(!1),h()}catch(e){l("An error occurred while processing your request."),t(!1)}};return r.jsx("form",{onSubmit:u(y),className:"flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950",children:(0,r.jsxs)("div",{className:"mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800",children:[(0,r.jsxs)("div",{className:"space-y-2 text-center",children:[r.jsx("h1",{className:"text-3xl font-bold",children:"Bienvenido a Cargram"}),r.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Inicie sesi\xf3n para continuar"})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Correo electronico"}),(0,r.jsxs)("div",{className:"flex items-center border rounded px-3 py-2",children:[r.jsx(c.Z,{className:"mr-2 text-gray-400"}),r.jsx("input",{className:"appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",id:"email",type:"email",placeholder:"Tu correo electronico",...g("email")})]}),w.email&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:w.email?.message})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Contrase\xf1a"}),(0,r.jsxs)("div",{className:"flex items-center border rounded px-3 py-2",children:[r.jsx(d.Z,{className:"mr-2 text-gray-400"}),r.jsx("input",{className:"appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",id:"password",type:"password",placeholder:"Contrase\xf1a segura",...g("password")})]}),w.password&&r.jsx("p",{className:"text-red-500 text-xs mt-1",children:w.password?.message})]}),a&&r.jsx("div",{className:"text-red-500 text-xs mt-1",children:a}),r.jsx("button",{className:"w-full bg-black text-white hover:bg-gray-900 py-2 px-4 rounded",disabled:e,type:"submit",children:e?"Signing In...":(0,r.jsxs)(r.Fragment,{children:[r.jsx(p.Z,{className:"mr-2"}),"Iniciar Sesi\xf3n"]})}),r.jsx("div",{className:"flex items-center justify-between",children:r.jsx(m.default,{href:"#",className:"text-sm font-medium text-gray-500 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",prefetch:!1,children:"Contrase\xf1a olvidada?"})})]}),(0,r.jsxs)("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400",children:["A\xfan sin cuenta?"," ",r.jsx(m.default,{href:"/pages/register",className:"font-medium text-gray-900 underline hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300",prefetch:!1,children:"Registrarse"})]})]})})}let u=function(){return r.jsx("div",{className:"bg-grey-lighter min-h-screen flex flex-col",children:r.jsx(g,{})})}},45:(e,t,a)=>{"use strict";var r=a(9618);t.Z=void 0;var s=r(a(1133)),n=a(326);t.Z=(0,s.default)((0,n.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send")},1506:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,metadata:()=>i});var r=a(9510),s=a(7366),n=a.n(s);a(4025);let i={title:"CarGram",description:"Made by Angel Salamero"};function l({children:e}){return(0,r.jsxs)("html",{lang:"es",className:n().className,style:{height:"100%"},children:[r.jsx("head",{children:r.jsx("link",{href:"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",rel:"stylesheet"})}),r.jsx("body",{className:"text-black bg-gray-200 h-full m-0 md:bg-gray-200",children:r.jsx("div",{className:"flex h-full min-h-screen flex-col md:flex-row md:overflow-hidden bg-gray-200 dark:bg-gray-900 transition-colors duration-300",children:r.jsx("main",{className:"flex-grow md:overflow-y-auto",children:e})})})]})}},8563:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n,metadata:()=>s});var r=a(9510);let s={title:"CarGram",description:"Angel's final project",favicon:"./favicon.ico"};function n({children:e}){return r.jsx("div",{className:"",children:e})}},6640:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=a(8570);let s=(0,r.createProxy)(String.raw`C:\laragon\www\www_casa\www\react\front_tfg\app\pages\login\page.tsx`),{__esModule:n,$$typeof:i}=s;s.default;let l=(0,r.createProxy)(String.raw`C:\laragon\www\www_casa\www\react\front_tfg\app\pages\login\page.tsx#default`)},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(6621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4025:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[948,82,739,133,434,980],()=>a(5614));module.exports=r})();