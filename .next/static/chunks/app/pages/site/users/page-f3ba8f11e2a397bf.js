(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5294],{2806:function(e,t,r){Promise.resolve().then(r.bind(r,7596))},7596:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var o=r(7437),a=r(2265),n=r(7818),s=r(166),l=r(2326),i=r(2436),c=r(9640),u=r(2649),d=r(6548),f=e=>{let{user:t,onFollowToggle:r}=e;return(0,o.jsxs)("div",{className:"border p-4 m-2 rounded-lg shadow-md flex justify-between items-center",children:[(0,o.jsxs)("div",{className:"flex items-center",children:[t.profile_photo&&(0,o.jsx)("img",{src:t.profile_photo,alt:"".concat(t.name,"'s profile"),className:"w-10 h-10 rounded-full mr-4"}),(0,o.jsx)("h3",{className:"text-lg font-bold",children:t.name})]}),(0,o.jsx)(d.Z,{onClick:()=>r(t.id,t.is_following),variant:"contained",color:t.is_following?"secondary":"primary",children:t.is_following?"Dejar de seguir":"Seguir"})]})},h=e=>{let{setResults:t}=e,[r,n]=(0,a.useState)(""),[d,h]=(0,a.useState)([]),[m,p]=(0,a.useState)(!1),g=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=async()=>{try{let e=r.trim();if(0===e.length){h([]),t([]);return}let o=await fetch("".concat("http://localhost:8000","/api/users/search?query=").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.Z.get("auth_token"))},credentials:"include"});if(!o.ok)throw Error("Failed to fetch search results");let a=await o.json();h(a.users),t(a.users)}catch(e){console.error("An error occurred while searching:",e)}};r.trim().length>0?e():t([])},[r,t]);let w=async(e,r)=>{try{let o=await fetch(r?"".concat("http://localhost:8000","/api/unfollow"):"".concat("http://localhost:8000","/api/follow"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(u.Z.get("auth_token"))},credentials:"include",body:JSON.stringify({user_id:e})});if(!o.ok){let e=await o.json();console.error("Failed to toggle follow status:",e.message);return}h(d.map(t=>t.id===e?{...t,is_following:!r}:t)),t(d.map(t=>t.id===e?{...t,is_following:!r}:t))}catch(e){console.error("An error occurred while toggling follow status:",e)}};return(0,o.jsxs)(c.E.div,{className:"flex flex-col items-center justify-center py-4 w-full top-2",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},children:[(0,o.jsx)(s.Z,{value:r,onChange:e=>{n(e.target.value)},onFocus:()=>p(!0),onBlur:e=>{g.current&&!g.current.contains(e.relatedTarget)&&p(!1)},placeholder:"Buscar...",variant:"outlined",className:"w-full max-w-md",InputProps:{startAdornment:(0,o.jsx)(l.Z,{position:"start",children:(0,o.jsx)(i.Z,{className:"text-gray-500"})})},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"gray",borderWidth:"2px",borderRadius:"0.5rem"},"&:hover fieldset":{borderColor:"blue"},"&.Mui-focused fieldset":{borderColor:"blue"},"& .MuiOutlinedInput-input":{padding:"0.5rem 1rem"}}}}),m&&(0,o.jsx)(c.E.div,{ref:g,className:"mt-4 w-full max-w-md",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},onMouseDown:e=>{g.current&&g.current.contains(e.target)&&e.preventDefault()},children:d.map(e=>(0,o.jsx)(f,{user:e,onFollowToggle:w},e.id))})]})},m=r(9060);let p=(0,n.default)(()=>Promise.all([r.e(6622),r.e(732),r.e(1973)]).then(r.bind(r,1973)),{loadableGenerated:{webpack:()=>[1973]},ssr:!1,loading:()=>(0,o.jsx)(m.Z,{})});var g=()=>{let[e,t]=(0,a.useState)([]);return(0,o.jsxs)("div",{className:"container mx-auto p-4",children:[(0,o.jsx)(h,{setResults:t}),(0,o.jsx)(p,{})]})}},9060:function(e,t,r){"use strict";var o=r(7437);r(2265),t.Z=()=>(0,o.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,o.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"})})}},function(e){e.O(0,[5856,4575,166,1635,2971,7023,1744],function(){return e(e.s=2806)}),_N_E=e.O()}]);