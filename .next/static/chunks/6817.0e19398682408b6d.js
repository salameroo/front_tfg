"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6817],{4956:function(e,t,r){var a=r(7437),s=r(2265),o=r(2649),l=r(3153),n=r(1326),i=r(468),d=r(511),c=r(7594),m=r(335),h=r(166),u=r(9678),g=r(6604);r(9051),r(5291),t.Z=e=>{var t;let{postId:r,isOpen:x,onClose:p}=e,[f,b]=(0,s.useState)(null),[y,j]=(0,s.useState)(!0),[v,w]=(0,s.useState)(null),[N,k]=(0,s.useState)(null);(0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat("http://localhost:8000","/api/user"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to fetch user");let t=await e.json();k(t.id)}catch(e){e instanceof Error?w(e.message):w("An unknown error occurred"),j(!1)}})()},[]),(0,s.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://localhost:8000","/api/posts/").concat(r),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to fetch post");let t=await e.json();b(t),j(!1)}catch(e){e instanceof Error?w(e.message):w("An unknown error occurred"),j(!1)}};null!==N&&e()},[N,r]);let C=async()=>{if(f)try{let e=await fetch("".concat("http://localhost:8000","/api/posts/").concat(r,"/like"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include"});if(!e.ok)throw Error("Failed to like/unlike the post");let t=(await e.json()).liked?[...f.likes,{id:Date.now(),user_id:N,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}]:f.likes.filter(e=>e.user_id!==N);b({...f,likes:t})}catch(e){console.error("Error liking/unliking the post:",e)}},E=async e=>{if(f)try{let t=await fetch("".concat("http://localhost:8000","/api/posts/").concat(r,"/comment"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.Z.get("auth_token"))},credentials:"include",body:JSON.stringify({text:e})});if(!t.ok)throw Error("Failed to comment on the post");let a=await t.json();b({...f,comments:[...f.comments,a]})}catch(e){console.error("Error commenting on the post:",e)}};return y?(0,a.jsxs)(n.Z,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh",children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(d.Z,{variant:"body1",className:"ml-2",children:"Cargando..."})]}):v?(0,a.jsxs)("div",{children:["Error: ",v]}):f?(0,a.jsx)(c.Z,{open:x,onClose:p,"aria-labelledby":"post-modal-title","aria-describedby":"post-modal-description",children:(0,a.jsxs)(n.Z,{className:"post-details",sx:{p:4,maxWidth:800,margin:"auto",bgcolor:"background.paper",boxShadow:24,borderRadius:2},children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-2",children:f.title}),(0,a.jsx)("p",{className:"mb-2",children:f.content}),f.images.length>0&&(0,a.jsx)(l.Z,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:f.images.map((e,t)=>(0,a.jsx)("div",{className:"relative w-full h-96",children:(0,a.jsx)("img",{src:"".concat("http://localhost:8000")+e.url,alt:f.title,className:"absolute top-0 left-0 w-full h-full object-cover cursor-pointer"})},t))}),(0,a.jsxs)("small",{className:"block mb-2 text-gray-600",children:["Por: ",(null===(t=f.user)||void 0===t?void 0:t.name)||"Usuario Desconocido"," el ",new Date(f.created_at).toLocaleString()]}),(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsx)(m.Z,{onClick:C,children:(0,a.jsx)(u.Z,{color:f.likes.some(e=>e.user_id===N)?"error":"secondary"})}),(0,a.jsxs)("span",{children:[f.likes.length," Likes"]}),(0,a.jsx)(m.Z,{children:(0,a.jsx)(g.Z,{})}),(0,a.jsxs)("span",{children:[f.comments.length," Comentarios"]})]}),(0,a.jsxs)("div",{children:[f.comments.map(e=>{var t;return(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("strong",{children:[(null===(t=e.user)||void 0===t?void 0:t.name)||"Unknown",":"]})," ",e.text,(0,a.jsx)("small",{className:"block text-gray-500",children:new Date(e.created_at).toLocaleString()})]},e.id)}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),E(new FormData(e.currentTarget).get("comment")),e.currentTarget.reset()},children:[(0,a.jsx)(h.Z,{name:"comment",label:"Add a comment",variant:"outlined",fullWidth:!0,className:"mb-2"}),(0,a.jsx)("button",{type:"submit",className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Comentar"})]})]})]})}):(0,a.jsx)("div",{children:"Post not found"})}},6817:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(7437),s=r(2265),o=r(3980),l=r(9412),n=r(2649),i=r(8472),d=r(6648),c=r(4956),m=r(9060);function h(){let[e,t]=(0,s.useState)(null),[r,h]=(0,s.useState)(""),[u,g]=(0,s.useState)(""),[x,p]=(0,s.useState)(""),[f,b]=(0,s.useState)([]),[y,j]=(0,s.useState)([]),[v,w]=(0,s.useState)([]),[N,k]=(0,s.useState)(!1),[C,E]=(0,s.useState)(!1),[Z,S]=(0,s.useState)(null);(0,s.useEffect)(()=>{i.Z.get("".concat("http://localhost:8000","/api/settings"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(e=>{let r=e.data;t(r),h(r.name),g(r.email),p(r.profile_photo),b(r.posts)}).catch(e=>{console.error("Error loading user data:",e)})},[]);let _=()=>{i.Z.put("".concat("http://localhost:8000","/api/settings"),{name:r,email:u,profile_photo:x},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(e=>{alert("Changes saved successfully!")}).catch(e=>{console.error("Error saving changes:",e),alert("Error saving changes. Please try again.")})},z=e=>{i.Z.post("".concat("http://localhost:8000","/api/unfollow"),{user_id:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(t=>{w(v.filter(t=>t.id!==e)),alert("Unfollowed successfully.")}).catch(e=>{console.error("Error unfollowing user:",e),alert("Error unfollowing user. Please try again.")})},F=e=>{i.Z.post("".concat("http://localhost:8000","/api/unfollow"),{follower_id:e},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(t=>{j(y.filter(t=>t.id!==e)),alert("Follower removed successfully.")}).catch(e=>{console.error("Error removing follower:",e),alert("Error removing follower. Please try again.")})},T=()=>{S(null)};return e?(0,a.jsxs)("div",{className:"w-full max-w-5xl mx-auto p-4",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4 md:col-span-1",children:[(0,a.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-16 h-16 relative rounded-full overflow-hidden",children:(0,a.jsx)(d.default,{src:x||"/placeholder.svg",alt:r,layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"flex-1 grid gap-1",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:r}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:u})]}),(0,a.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let t=e.target.files[0],r=new FormData;r.append("profile_photo",t),i.Z.post("".concat("http://localhost:8000","/api/upload-profile-photo"),r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(e=>{p(e.data.profile_photo),alert("Profile photo updated successfully!")}).catch(e=>{console.error("Error uploading profile photo:",e),alert("Error uploading profile photo. Please try again.")})}},className:"hidden",id:"profile-photo-upload"}),(0,a.jsx)("label",{htmlFor:"profile-photo-upload",className:"cursor-pointer inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",children:"Edit Profile"})]}),(0,a.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 grid grid-cols-3 gap-4",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:f.length}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Posts"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:e.followers_count}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Followers"}),(0,a.jsx)("button",{className:"mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600",onClick:()=>{i.Z.get("".concat("http://localhost:8000","/api/followers"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(e=>{j(e.data.followers),k(!0)}).catch(e=>{console.error("Error fetching followers:",e),alert("Error fetching followers. Please try again.")})},children:"View Followers"})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:e.following_count}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400 text-sm",children:"Following"}),(0,a.jsx)("button",{className:"mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600",onClick:()=>{i.Z.get("".concat("http://localhost:8000","/api/following"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n.Z.get("auth_token"))}}).then(e=>{w(e.data.following),E(!0)}).catch(e=>{console.error("Error fetching following:",e),alert("Error fetching following. Please try again.")})},children:"View Following"})]})]})]}),(0,a.jsxs)("div",{className:"space-y-6 md:col-span-2",children:[(0,a.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Username"}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:"Update your username to be displayed on your profile."}),(0,a.jsx)("input",{type:"text",value:r,onChange:e=>h(e.target.value),className:"mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:_,children:"Save"})]}),(0,a.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Password"}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:"Update your password to secure your account."}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"current-password",className:"block text-sm font-medium text-gray-700",children:"Current Password"}),(0,a.jsx)("input",{id:"current-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"new-password",className:"block text-sm font-medium text-gray-700",children:"New Password"}),(0,a.jsx)("input",{id:"new-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{htmlFor:"confirm-password",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),(0,a.jsx)("input",{id:"confirm-password",type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})]})]}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:_,children:"Save"})]}),(0,a.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Email"}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:"Update your email address to receive notifications."}),(0,a.jsx)("input",{type:"email",value:u,onChange:e=>g(e.target.value),className:"mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"}),(0,a.jsx)("button",{type:"button",className:"mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800",onClick:_,children:"Save"})]}),(0,a.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-6",children:[(0,a.jsx)("div",{className:"text-lg font-medium",children:"Posts"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4",children:f.map(e=>(0,a.jsx)(c.Z,{postId:e.id,isOpen:Z===e.id,onClose:T},e.id))})]})]})]}),N&&(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-lg",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Followers"}),(0,a.jsx)("ul",{children:y.map(e=>(0,a.jsxs)("li",{className:"flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)(o.qE,{className:"w-8 h-8",children:[(0,a.jsx)(o.F$,{alt:"@".concat(e.name),src:e.avatar||"/placeholder-user.jpg"}),(0,a.jsx)(o.Q5,{children:e.name[0]})]}),(0,a.jsx)("span",{children:e.name})]}),(0,a.jsx)(l.z,{size:"sm",variant:"ghost",onClick:()=>F(e.id),children:"Remove"})]},e.id))}),(0,a.jsx)(l.z,{className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>k(!1),children:"Close"})]})}),C&&(0,a.jsx)("div",{className:"fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-lg",children:[(0,a.jsx)("h2",{className:"text-xl font-bold mb-4",children:"Following"}),(0,a.jsx)("ul",{children:v.map(e=>(0,a.jsxs)("li",{className:"flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)(o.qE,{className:"w-8 h-8",children:[(0,a.jsx)(o.F$,{alt:"@".concat(e.name),src:e.avatar||"/placeholder-user.jpg"}),(0,a.jsx)(o.Q5,{children:e.name[0]})]}),(0,a.jsx)("span",{children:e.name})]}),(0,a.jsx)(l.z,{size:"sm",variant:"ghost",onClick:()=>z(e.id),children:"Unfollow"})]},e.id))}),(0,a.jsx)(l.z,{className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>E(!1),children:"Close"})]})})]}):(0,a.jsx)(m.Z,{})}},3980:function(e,t,r){r.d(t,{F$:function(){return i},Q5:function(){return d},qE:function(){return n}});var a=r(7437),s=r(2265),o=r(4458),l=r(7440);let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.fC,{ref:t,className:(0,l.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...s})});n.displayName=o.fC.displayName;let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.Ee,{ref:t,className:(0,l.cn)("aspect-square h-full w-full",r),...s})});i.displayName=o.Ee.displayName;let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(o.NY,{ref:t,className:(0,l.cn)("flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800",r),...s})});d.displayName=o.NY.displayName},9412:function(e,t,r){r.d(t,{z:function(){return d}});var a=r(7437),s=r(2265),o=r(1538),l=r(2218),n=r(7440);let i=(0,l.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",{variants:{variant:{default:"bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",destructive:"bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",outline:"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",ghost:"hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",link:"text-gray-900 underline-offset-4 hover:underline dark:text-gray-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:d=!1,...c}=e,m=d?o.g7:"button";return(0,a.jsx)(m,{className:(0,n.cn)(i({variant:s,size:l,className:r})),ref:t,...c})});d.displayName="Button"},7440:function(e,t,r){r.d(t,{cn:function(){return o}});var a=r(4839),s=r(6164);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}}]);