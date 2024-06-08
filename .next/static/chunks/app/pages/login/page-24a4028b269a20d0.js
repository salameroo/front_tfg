(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4343],{7344:function(e,t,n){Promise.resolve().then(n.bind(n,9872))},9872:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(7437),i=n(2265),o=n(9343),a=n(1014),l=n(9772),s=n(2649),c=n(1243),u=n(9778),d=n(559),f=n(7138);let m=l.z.object({email:l.z.string().email({message:"Must be a valid email"}),password:l.z.string()});function h(){var e,t;let[n,l]=(0,i.useState)(!1),[h,p]=(0,i.useState)(""),{register:x,handleSubmit:v,reset:g,formState:{errors:y}}=(0,o.cI)({resolver:(0,a.F)(m)}),Z=async e=>{if(s.Z.get("auth_token"))window.location.href="".concat("http://localhost:3000","/pages/site/settings");else try{l(!0);let t=await fetch("".concat("http://localhost:8000","/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}),n=await t.json();t.ok?(s.Z.set("auth_token",n.auth_token,{expires:7,path:""}),window.location.href="".concat("http://localhost:3000","/pages/site/settings")):p("Error: "+(n.message||"Failed to login.")),l(!1),g()}catch(e){p("An error occurred while processing your request."),l(!1)}};return(0,i.useEffect)(()=>{if(h){let e=setTimeout(()=>{p("")},7e3);return()=>{clearTimeout(e)}}},[h]),(0,r.jsx)("form",{onSubmit:v(Z),className:"flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950",children:(0,r.jsxs)("div",{className:"mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800",children:[(0,r.jsxs)("div",{className:"space-y-2 text-center",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold",children:"Bienvenido a Cargram"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"Inicia sesi\xf3n para continuar"})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Correo electronico"}),(0,r.jsxs)("div",{className:"flex items-center border rounded px-3 py-2",children:[(0,r.jsx)(c.Z,{className:"mr-2 text-gray-400"}),(0,r.jsx)("input",{className:"appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",id:"email",type:"email",placeholder:"Tu correo electronico",...x("email")})]}),y.email&&(0,r.jsx)("p",{className:"text-red-500 text-xs mt-1",children:null===(e=y.email)||void 0===e?void 0:e.message})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Contrase\xf1a"}),(0,r.jsxs)("div",{className:"flex items-center border rounded px-3 py-2",children:[(0,r.jsx)(u.Z,{className:"mr-2 text-gray-400"}),(0,r.jsx)("input",{className:"appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",id:"password",type:"password",placeholder:"Contrase\xf1a segura",...x("password")})]}),y.password&&(0,r.jsx)("p",{className:"text-red-500 text-xs mt-1",children:null===(t=y.password)||void 0===t?void 0:t.message})]}),h&&(0,r.jsx)("div",{className:"text-red-500 text-xs mt-1",children:h}),(0,r.jsx)("button",{className:"w-full bg-black text-white hover:bg-gray-900 py-2 px-4 rounded",disabled:n,type:"submit",children:n?"Signing In...":(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{className:"mr-2"}),"Iniciar Sesi\xf3n"]})}),(0,r.jsx)("div",{className:"flex items-center justify-between",children:(0,r.jsx)(f.default,{href:"#",className:"text-sm font-medium text-gray-500 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",prefetch:!1,children:"Contrase\xf1a olvidada?"})})]}),(0,r.jsxs)("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400",children:["A\xfan sin cuenta?"," ",(0,r.jsx)(f.default,{href:"/pages/register",className:"font-medium text-gray-900 underline hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300",prefetch:!0,children:"Registrarse"})]})]})})}var p=function(){return(0,r.jsx)("div",{className:"bg-grey-lighter min-h-screen flex flex-col",children:(0,r.jsx)(h,{})})}},1243:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var i=r(n(9118)),o=n(7437);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email")},9778:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var i=r(n(9118)),o=n(7437);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z"}),"Lock")},559:function(e,t,n){"use strict";var r=n(3963);t.Z=void 0;var i=r(n(9118)),o=n(7437);t.Z=(0,i.default)((0,o.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send")},9118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4381)},9018:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(2988),i=n(2265),o=n(3950),a=n(4839),l=n(6259),s=n(2272),c=n(8510),u=n(8024),d=n(4535),f=n(7542);function m(e){return(0,f.ZP)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(7437);let p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],x=e=>{let{color:t,fontSize:n,classes:r}=e,i={root:["root","inherit"!==t&&"color".concat((0,s.Z)(t)),"fontSize".concat((0,s.Z)(n))]};return(0,l.Z)(i,m,r)},v=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color".concat((0,s.Z)(n.color))],t["fontSize".concat((0,s.Z)(n.fontSize))]]}})(e=>{var t,n,r,i,o,a,l,s,c,u,d,f,m;let{theme:h,ownerState:p}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:p.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=h.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=h.transitions)||null==(r=r.duration)?void 0:r.shorter}),fontSize:({inherit:"inherit",small:(null==(i=h.typography)||null==(o=i.pxToRem)?void 0:o.call(i,20))||"1.25rem",medium:(null==(a=h.typography)||null==(l=a.pxToRem)?void 0:l.call(a,24))||"1.5rem",large:(null==(s=h.typography)||null==(c=s.pxToRem)?void 0:c.call(s,35))||"2.1875rem"})[p.fontSize],color:null!=(u=null==(d=(h.vars||h).palette)||null==(d=d[p.color])?void 0:d.main)?u:({action:null==(f=(h.vars||h).palette)||null==(f=f.action)?void 0:f.active,disabled:null==(m=(h.vars||h).palette)||null==(m=m.action)?void 0:m.disabled,inherit:void 0})[p.color]}}),g=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:s,color:u="inherit",component:d="svg",fontSize:f="medium",htmlColor:m,inheritViewBox:g=!1,titleAccess:y,viewBox:Z="0 0 24 24"}=n,b=(0,o.Z)(n,p),j=i.isValidElement(l)&&"svg"===l.type,N=(0,r.Z)({},n,{color:u,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:g,viewBox:Z,hasSvgAsChild:j}),S={};g||(S.viewBox=Z);let w=x(N);return(0,h.jsxs)(v,(0,r.Z)({as:d,className:(0,a.Z)(w.root,s),focusable:"false",color:m,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},S,b,j&&l.props,{ownerState:N,children:[j?l.props.children:l,y?(0,h.jsx)("title",{children:y}):null]}))});function y(e,t){function n(n,i){return(0,h.jsx)(g,(0,r.Z)({"data-testid":"".concat(t,"Icon"),ref:i},n,{children:e}))}return n.muiName=g.muiName,i.memo(i.forwardRef(n))}g.muiName="SvgIcon"},576:function(e,t,n){"use strict";var r=n(1227);t.Z=r.Z},4381:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return i.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return l.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return c.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return h.Z},unstable_useId:function(){return p},unsupportedProp:function(){return x},useControlled:function(){return v.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return y.Z},useIsFocusVisible:function(){return Z.Z}});var r=n(5960),i=n(2272),o=n(4559).Z,a=n(9018),l=n(576),s=function(e,t){return()=>null},c=n(9633),u=n(9645),d=n(8095);n(2988);var f=function(e,t){return()=>null},m=n(9969).Z,h=n(8632),p=n(674).Z,x=function(e,t,n,r,i){return null},v=n(7088),g=n(6182),y=n(909),Z=n(9261);let b={configure:e=>{r.Z.configure(e)}}},9633:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2265),i=function(e,t){var n,i;return r.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(i=e.type)||null==(i=i._payload)||null==(i=i.value)?void 0:i.muiName)}},9645:function(e,t,n){"use strict";var r=n(5694);t.Z=r.Z},8095:function(e,t,n){"use strict";var r=n(3076);t.Z=r.Z},7088:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2265),i=function(e){let{controlled:t,default:n,name:i,state:o="value"}=e,{current:a}=r.useRef(void 0!==t),[l,s]=r.useState(n),c=r.useCallback(e=>{a||s(e)},[]);return[a?t:l,c]}},8632:function(e,t,n){"use strict";var r=n(8017);t.Z=r.Z},1227:function(e,t,n){"use strict";function r(e,t=166){let n;function r(...i){clearTimeout(n),n=setTimeout(()=>{e.apply(this,i)},t)}return r.clear=()=>{clearTimeout(n)},r}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[231,5856,4085,2971,7023,1744],function(){return e(e.s=7344)}),_N_E=e.O()}]);