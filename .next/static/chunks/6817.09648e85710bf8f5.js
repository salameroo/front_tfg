"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6817],{70723:function(e,t,r){r.r(t);var a=r(57437),s=r(44785);t.default=()=>{let e=async()=>{if(!(await fetch("".concat("https://backtfg-production-2112.up.railway.app","/sanctum/csrf-cookie"),{credentials:"include"})).ok)throw Error("Failed to fetch CSRF token")},t=async()=>{await e();try{let e=await fetch("".concat("https://backtfg-production-2112.up.railway.app","/api/logout"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.Z.get("auth_token"))},credentials:"include"});e.ok?(s.Z.remove("XSRF-TOKEN"),s.Z.remove("auth_token"),s.Z.remove("auth__token"),s.Z.remove("laravel_session"),window.location.href="".concat("https://www.cargram.asalamero.dawmor.cloud","/")):console.error("Failed to logout:",await e.json())}catch(e){console.error("An error occurred while logging out:",e)}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-8 text-white"}),(0,a.jsx)("button",{onClick:t,className:"px-6 py-3 font-bold text-black bg-yellow-500 hover:bg-green-500 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105",children:"Cerrar Sesi\xf3n"})]})}},24956:function(e,t,r){var a=r(57437),s=r(2265),o=r(44785),n=r(43153),l=r(91326),i=r(40468),d=r(80511),c=r(97594),u=r(60335),g=r(40166),h=r(58754),m=r(56604);r(9051),r(55291),t.Z=e=>{var t;let{postId:r,isOpen:p,onClose:x}=e,[f,y]=(0,s.useState)(null),[b,w]=(0,s.useState)(!0),[j,k]=(0,s.useState)(null),[v,N]=(0,s.useState)(null);(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat("https://backtfg-production-2112.up.railway.app","/api/user"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to fetch user");let t=await e.json();N(t.id)}catch(e){e instanceof Error?k(e.message):k("An unknown error occurred"),w(!1)}})()},[]),(0,s.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("https://backtfg-production-2112.up.railway.app","/api/posts/").concat(r),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to fetch post");let t=await e.json();y(t),w(!1)}catch(e){e instanceof Error?k(e.message):k("An unknown error occurred"),w(!1)}};null!==v&&e()},[v,r]);let C=async()=>{if(f)try{let e=await fetch("".concat("https://backtfg-production-2112.up.railway.app","/api/posts/").concat(r,"/like"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to like/unlike the post");let t=(await e.json()).liked?[...f.likes,{id:Date.now(),user_id:v,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}]:f.likes.filter(e=>e.user_id!==v);y({...f,likes:t})}catch(e){console.error("Error liking/unliking the post:",e)}},E=async e=>{if(f)try{let t=await fetch("".concat("https://backtfg-production-2112.up.railway.app","/api/posts/").concat(r,"/comment"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include",body:JSON.stringify({text:e})});if(!t.ok)throw Error("Failed to comment on the post");let a=await t.json();y({...f,comments:[...f.comments,a]})}catch(e){console.error("Error commenting on the post:",e)}};return b?(0,a.jsxs)(l.Z,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(d.Z,{variant:"body1",className:"ml-2",children:"Cargando..."})]}):j?(0,a.jsxs)("div",{children:["Error: ",j]}):f?(0,a.jsx)(c.Z,{open:p,onClose:x,"aria-labelledby":"post-modal-title","aria-describedby":"post-modal-description",children:(0,a.jsxs)(l.Z,{className:"post-details",sx:{p:4,maxWidth:800,margin:"auto",bgcolor:"background.paper",boxShadow:24,borderRadius:2},children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-2",children:f.title}),(0,a.jsx)("p",{className:"mb-2",children:f.content}),f.images.length>0&&(0,a.jsx)(n.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:f.images.map((e,t)=>(0,a.jsx)("div",{className:"relative w-full h-96",children:(0,a.jsx)("img",{src:"".concat("https://backtfg-production-2112.up.railway.app")+e.url,alt:f.title,className:"absolute top-0 left-0 w-full h-full object-cover cursor-pointer"})},t))}),(0,a.jsxs)("small",{className:"block mb-2 text-gray-600",children:["Por: ",(null===(t=f.user)||void 0===t?void 0:t.name)||"Usuario Desconocido"," el ",new Date(f.created_at).toLocaleString()]}),(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsx)(u.Z,{onClick:C,children:(0,a.jsx)(h.Z,{color:f.likes.some(e=>e.user_id===v)?"error":"secondary"})}),(0,a.jsxs)("span",{children:[f.likes.length," Likes"]}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(m.Z,{})}),(0,a.jsxs)("span",{children:[f.comments.length," Comentarios"]})]}),(0,a.jsxs)("div",{children:[f.comments.map(e=>{var t;return(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("strong",{children:[(null===(t=e.user)||void 0===t?void 0:t.name)||"Unknown",":"]})," ",e.text,(0,a.jsx)("small",{className:"block text-gray-500",children:new Date(e.created_at).toLocaleString()})]},e.id)}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),E(new FormData(e.currentTarget).get("comment")),e.currentTarget.reset()},children:[(0,a.jsx)(g.Z,{name:"comment",label:"Add a comment",variant:"outlined",fullWidth:!0,className:"mb-2"}),(0,a.jsx)("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Comentar"})]})]})]})}):(0,a.jsx)("div",{children:"Post not found"})}},86817:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(57437),s=r(2265),o=r(33980),n=r(99412),l=r(44785),i=r(38472),d=r(66648),c=r(24956),u=r(99060),g=r(70723);function h(){let[e,t]=(0,s.useState)(null),[r,h]=(0,s.useState)(""),[m,p]=(0,s.useState)(""),[x,f]=(0,s.useState)(""),[y,b]=(0,s.useState)([]),[w,j]=(0,s.useState)([]),[k,v]=(0,s.useState)([]),[N,C]=(0,s.useState)(!1),[E,S]=(0,s.useState)(!1),[Z,_]=(0,s.useState)(null);(0,s.useEffect)(()=>{i.Z.get("".concat("https://backtfg-production-2112.up.railway.app","/api/settings"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(e=>{let r=e.data;t(r),h(r.name),p(r.email),f(r.profile_photo),b(r.posts)}).catch(e=>{console.error("Error loading user data:",e)})},[]);let z=()=>{i.Z.put("".concat("https://backtfg-production-2112.up.railway.app","/api/settings"),{name:r,email:m,profile_photo:x},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(e=>{alert("Changes saved successfully!")}).catch(e=>{console.error("Error saving changes:",e),alert("Error saving changes. Please try again.")})},T=e=>{i.Z.post("".concat("https://backtfg-production-2112.up.railway.app","/api/unfollow"),{user_id:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(t=>{v(k.filter(t=>t.id!==e)),alert("Unfollowed successfully.")}).catch(e=>{console.error("Error unfollowing user:",e),alert("Error unfollowing user. Please try again.")})},A=e=>{i.Z.post("".concat("https://backtfg-production-2112.up.railway.app","/api/unfollow"),{follower_id:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(t=>{j(w.filter(t=>t.id!==e)),alert("Follower removed successfully.")}).catch(e=>{console.error("Error removing follower:",e),alert("Error removing follower. Please try again.")})},F=()=>{_(null)};return e?(0,a.jsxs)("div",{className:"w-full max-w-5xl mx-auto p-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4 w-full mx-auto",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-16 h-16 relative rounded-full overflow-hidden",children:(0,a.jsx)(d.default,{src:x||"/placeholder.svg",alt:r,layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"flex-1 grid gap-1",children:[(0,a.jsx)("div",{className:"text-lg font-medium text-gray-900 dark:text-white",children:r}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:m})]}),(0,a.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let t=e.target.files[0],r=new FormData;r.append("profile_photo",t),i.Z.post("".concat("https://backtfg-production-2112.up.railway.app","/api/upload-profile-photo"),r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(e=>{f(e.data.profile_photo),alert("Profile photo updated successfully!")}).catch(e=>{console.error("Error uploading profile photo:",e),alert("Error uploading profile photo. Please try again.")})}},className:"hidden",id:"profile-photo-upload"}),(0,a.jsx)("label",{htmlFor:"profile-photo-upload",className:"cursor-pointer inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",children:"Cambiar"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 grid grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:y.length}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Posts"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:e.followers_count}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Seguidores"}),(0,a.jsx)("button",{className:"mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600",onClick:()=>{i.Z.get("".concat("https://backtfg-production-2112.up.railway.app","/api/followers"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(e=>{j(e.data.followers),C(!0)}).catch(e=>{console.error("Error fetching followers:",e),alert("Error fetching followers. Please try again.")})},children:"Seguidores"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:e.following_count}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Siguiendo"}),(0,a.jsx)("button",{className:"mt-2 inline-flex items-center mx-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600",onClick:()=>{i.Z.get("".concat("https://backtfg-production-2112.up.railway.app","/api/following"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l.Z.get("auth_token"))}}).then(e=>{v(e.data.following),S(!0)}).catch(e=>{console.error("Error fetching following:",e),alert("Error fetching following. Please try again.")})},children:"Siguiendo"})]})]})]}),(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Nombre de usuario"}),(0,a.jsx)("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Actualiza el nombre de usuario que ser\xe1 mostrado en tu perfil."}),(0,a.jsx)("input",{type:"text",value:r,onChange:e=>h(e.target.value),className:"mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:z,children:"Guardar"})]}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Contrase\xf1a"}),(0,a.jsx)("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Actualiza tu contrase\xf1a para mantener segura tu cuenta."}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"current-password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Contrase\xf1a actual"}),(0,a.jsx)("input",{id:"current-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"new-password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Nueva Contrase\xf1a"}),(0,a.jsx)("input",{id:"new-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"confirm-password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300",children:"Confirmar Contrase\xf1a"}),(0,a.jsx)("input",{id:"confirm-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]})]}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:z,children:"Guardar"})]}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Email"}),(0,a.jsx)("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Actualiza tu email para estar sincronizado."}),(0,a.jsx)("input",{type:"email",value:m,onChange:e=>p(e.target.value),className:"mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:z,children:"Guardar"})]}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Posts"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4",children:y.map(e=>(0,a.jsx)(c.Z,{postId:e.id,isOpen:Z===e.id,onClose:F},e.id))})]})]})]}),N&&(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-lg",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Seguidores"}),(0,a.jsx)("ul",{children:w.map(e=>(0,a.jsxs)("li",{className:"flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)(o.qE,{className:"w-8 h-8",children:[(0,a.jsx)(o.F$,{alt:"@".concat(e.name),src:e.avatar||"/placeholder-user.jpg"}),(0,a.jsx)(o.Q5,{children:e.name[0]})]}),(0,a.jsx)("span",{className:"text-gray-900 dark:text-white",children:e.name})]}),(0,a.jsx)(n.z,{size:"sm",variant:"ghost",className:"bg-red-500 ml-2 hover:bg-red-700",onClick:()=>A(e.id),children:"Quitar"})]},e.id))}),(0,a.jsx)(n.z,{className:"mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",onClick:()=>C(!1),children:"Cerrar"})]})}),E&&(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-lg",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4 text-gray-900 dark:text-white",children:"Siguiendo"}),(0,a.jsx)("ul",{children:k.map(e=>(0,a.jsxs)("li",{className:"flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)(o.qE,{className:"w-8 h-8",children:[(0,a.jsx)(o.F$,{alt:"@".concat(e.name),src:e.avatar||"/placeholder-user.jpg"}),(0,a.jsx)(o.Q5,{children:e.name[0]})]}),(0,a.jsx)("span",{className:"text-gray-900 dark:text-white",children:e.name})]}),(0,a.jsx)(n.z,{size:"sm",variant:"ghost",className:"bg-red-500 ml-2 hover:bg-red-700",onClick:()=>T(e.id),children:"Dejar de seguir"})]},e.id))}),(0,a.jsx)(n.z,{className:"mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",onClick:()=>S(!1),children:"Cerrar"})]})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(g.default,{})})]}):(0,a.jsx)(u.Z,{})}},33980:function(e,t,r){r.d(t,{F$:function(){return i},Q5:function(){return d},qE:function(){return l}});var a=r(57437),s=r(2265),o=r(44458),n=r(37440);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.fC,{ref:t,className:(0,n.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});l.displayName=o.fC.displayName;let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.Ee,{ref:t,className:(0,n.cn)("aspect-square h-full w-full",r),...s})});i.displayName=o.Ee.displayName;let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.NY,{ref:t,className:(0,n.cn)("flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",r),...s})});d.displayName=o.NY.displayName},99412:function(e,t,r){r.d(t,{z:function(){return d}});var a=r(57437),s=r(2265),o=r(71538),n=r(12218),l=r(37440);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(i({variant:s,size:n,className:r})),ref:t,...c})});d.displayName="Button"},37440:function(e,t,r){r.d(t,{cn:function(){return o}});var a=r(44839),s=r(96164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}}]);