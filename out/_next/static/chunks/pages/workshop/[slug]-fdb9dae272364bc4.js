(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{27076:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workshop/[slug]",function(){return n(21073)}])},21073:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return R},default:function(){return I}});var s=n(85893),r=n(67294),i=n(46079),a=n(11163),l=n(77533),o=n(11057),c=n(16323),d=n(78462),h=n(9875),p=n(79953),u=n(57922),x=n(60181),m=n(23508),g=n(93395);function j(e){let{pages:t,currentPage:n,handlePageChange:i}=e,[a,j]=r.useState({top:!1,left:!1,bottom:!1,right:!1}),f=(e,t)=>n=>{("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&j({...a,[e]:t})},v=(e=>{let t=e.filter(e=>void 0===e.parent),n=e.filter(e=>void 0!==e.parent),s=t.map(e=>(e.children=n.filter(t=>t.parent===e.title),e));return s})(t),b=e=>{let{pages:t}=e,[n,a]=r.useState(!1),l=()=>{a(!n)};return(0,s.jsxs)(r.Fragment,{children:[0==t.children.length&&(0,s.jsx)(h.ZP,{children:(0,s.jsx)(p.Z,{primary:t.title,className:"sidebar-item",onClick:()=>{i(event,t.index)},...t.active?{style:{color:"black"}}:{style:{color:"white"}}})}),t.children.length>0&&(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(h.ZP,{children:[(0,s.jsx)(p.Z,{primary:t.title,className:"sidebar-item",onClick:()=>{i(event,t.index)},...t.active?{style:{color:"black"}}:{style:{color:"white"}}}),(0,s.jsx)(g.Z,{onClick:l,children:n?(0,s.jsx)(x.Z,{onClick:l,sx:{cursor:"pointer",color:"white"}}):t.children.some(e=>e.active)?null:(0,s.jsx)(m.Z,{sx:{cursor:"pointer",color:"white"}})})]}),(0,s.jsx)(u.Z,{in:t.active||t.children.some(e=>e.active)||n,timeout:"auto",unmountOnExit:!0,children:(0,s.jsx)(d.Z,{component:"div",disablePadding:!0,children:t.children.map((e,t)=>(0,s.jsx)(h.ZP,{button:!0,className:"nested",onClick:()=>{i(event,e.index)},children:(0,s.jsx)(p.Z,{primary:e.title,className:"sidebar-subitem",...e.active?{style:{color:"black"}}:{style:{color:"white"}}})},t))})})]})]})};return r.useEffect(()=>{v.forEach((e,t)=>{e.index===n?e.active=!0:e.active=!1,e.children&&e.children.forEach((e,t)=>{e.index===n?e.active=!0:e.active=!1})})},[n]),(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)(o.Z,{color:"primary","aria-label":"open drawer",className:"sidebar-button",onClick:f("left",!0),children:[(0,s.jsx)(c.Z,{}),"Table of Contents"]}),(0,s.jsx)(l.ZP,{variant:"temporary",open:a.left,className:"drawer-left temporary",onClose:f("left",!1),ModalProps:{keepMounted:!0},children:(0,s.jsx)("nav",{className:"sidenav",children:(0,s.jsx)(d.Z,{children:v.map((e,t)=>(0,s.jsx)(b,{pages:e},t))})})}),(0,s.jsx)(l.ZP,{variant:"permanent",anchor:"left",open:a.left,onClose:f("left",!1),className:"drawer-left permanent",sx:{flexShrink:0,zIndex:1,display:{xs:"none",sm:"none",md:"none",xl:"block"}},children:(0,s.jsx)("nav",{style:{marginTop:"8rem"},className:"sidenav",children:(0,s.jsx)(d.Z,{children:v.map((e,t)=>(0,s.jsx)(b,{pages:e},t))})})})]})}var f=n(59966),v=n(53156),b=n(86243);n(4298);var w=n(72908),y=n(47376),k=n(19536),Z=n(19755);function N(e){let[t,i]=(0,r.useState)([]),[l,c]=r.useState(!1),d=(0,a.useRouter)(),h=e.currentHeader,p=()=>c(!1),u=e.content.content,x=e.content.title;(0,r.useEffect)(()=>{globalThis.jQuery=Z,window.addEventListener("keydown",e=>{"Escape"===e.key&&p()})},[p]);let m=function(e){let n=(0,b.n)(e),s=[];return n.props.children.reduce((e,n)=>("string"==typeof n||("h1"===n.type?(s.push([n]),t.push(n)):"h2"===n.type?(s.push([n]),t.push(n)):s[s.length-1].push(n)),e),[]),s}(u);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.Z,{className:"brutalist-button",onClick:function(){if("frontpage"===h.className)c(!0);else{let e=h.children[0].props.children.props.children[0],n=t.findIndex(function(t){return t.props.children[0]===e});d.push("/workshops/".concat(d.query.slug,"/?page=").concat(d.query.page,"&slideIndex=").concat(n+1),void 0,{shallow:!0,scroll:!1}),c(!0)}},children:[(0,s.jsx)(y.Z,{}),"Presentation Mode"]}),(0,s.jsx)(w.Z,{open:l,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,s.jsx)(()=>{let e=n(20931),t=e.Deck,r=e.Slide,i=e.Heading;return e.CodePane,(0,s.jsxs)(t,{style:{height:"100%",width:"100%",backgroundColor:"#fff"},children:[(0,s.jsxs)(r,{children:[(0,s.jsx)(o.Z,{onClick:p,style:{position:"absolute",width:"50px"},children:(0,s.jsx)(k.Z,{})}),(0,s.jsx)(i,{size:1,children:x})]}),m.map((e,t)=>(0,s.jsxs)(r,{children:[(0,s.jsx)(o.Z,{onClick:p,style:{position:"absolute",width:"50px"},children:(0,s.jsx)(k.Z,{})}),(0,s.jsx)("div",{className:"slides",style:{overflow:"auto",height:"100%"},children:e.map((e,t)=>"h1"===e.type||"h2"===e.type?(0,s.jsx)(i,{children:e.props.children},t):"CodeEditor"===e.type?void 0:(0,s.jsx)("div",{children:e},t))})]},t))]})},{})})]})})}var C=n(21023),S=n(93619),E=n(88078),P=n(30313),_=n(96214);function T(e){let t=e.language,n=e.text;e.setText;let i=e.open,a=e.setEditorOpen,[c,d]=(0,r.useState)(!1),h=()=>{a(!i),i?setTimeout(()=>{d(!c)},500):d(!c)};return(0,r.useEffect)(()=>{i&&d(!0)},[i]),(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("div",{className:"editor-button-container",children:(0,s.jsx)(o.Z,{"aria-label":"open drawer",className:"editor-button",onClick:h,style:{color:"#32c259"},children:(0,s.jsx)(_.Z,{})})}),(0,s.jsx)(l.ZP,{variant:"persistent",anchor:"right",open:i,className:"drawer-right",onClose:h,ModalProps:{keepMounted:!0},sx:{width:{xs:"100%",sm:"100%",md:"35%"},flexShrink:{xs:1,sm:0},"& .MuiDrawer-paper":{width:{xs:"100%",sm:"100%",md:"35%"},boxSizing:"border-box"},display:c?"block":"none"},children:(0,s.jsx)("div",{className:"drawer-editor",children:(0,s.jsx)(P.Z,{language:t,onChange:e=>{},defaultCode:n,handleOpenClose:h,...e})})})]})}var O=n(90948),F=n(46505);let M=(0,O.ZP)("main",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:n}=e;return{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginRight:0}}});var R=!0;function I(e){let{workshop:t,authors:n,uploads:l,facilitators:c}=e,d=(0,a.useRouter)(),{slug:h}=d.query,p=t.title,u=t.content,[x,m]=(0,r.useState)(!1),g=(0,f.Z)(t,{workshop:t,authors:n,uploads:l,facilitators:c},x,m),[b,w]=(0,r.useState)(!1),[y,k]=(0,r.useState)(""),[Z,P]=(0,r.useState)(!1),_=function(e){let n=(0,i.Z)(e,l,t,k,w,P),a=[];return n.props.children.reduce((e,t)=>("string"==typeof t||("h1"===t.type?a.push([t]):a[a.length-1].push(t)),e),[]),a.unshift(g),a.map((e,t)=>void 0!=e.props&&e.props.className.includes("frontpage")?g:(0,s.jsx)("div",{className:"page-content",children:e.map((e,t)=>(0,s.jsx)(r.Fragment,{children:e},t))},t))},[O,R]=(0,r.useState)(1),[I,q]=(0,r.useState)(_(u)),[z,H]=(0,r.useState)([]),[A,D]=(0,r.useState)(!1),[G,L]=(0,r.useState)([]),[X,Q]=(0,r.useState)(null);(0,r.useEffect)(()=>{let e=null,t=I.map((t,n)=>{let s,r;s=0===n?"Introduction":t.props.children[0].props.children.props.children[0];let i=t.props.children[0].props.children.type;return"h1"===i&&(e=s),"h2"===i&&(r=e),s={title:s,index:n+1,active:n+1===O,parent:r}});L(t)},[O]),(0,r.useEffect)(()=>{q(_(u)),R(1);let e=new URLSearchParams(window.location.search),t=Number(e.get("page"));t?(R(t),H(I[t-1]),D(!0)):(q(_(u)),R(1),D(!0))},[h]),(0,r.useEffect)(()=>{O?H(I[O-1]):H(I[0])},[I]),(0,r.useEffect)(()=>{z&&void 0!=z&&Q(z.props)},[z]);let U=e=>(0,s.jsxs)("div",{className:"pagination",children:[(0,s.jsxs)(o.Z,{className:"pagination-button",onClick:()=>W(event,Number(e)-1),disabled:1===e,children:[(0,s.jsx)(C.Z,{}),"Previous"]}),(0,s.jsx)(j,{pages:G,currentPage:e,handlePageChange:W}),(0,s.jsx)(N,{currentHeader:X,content:t,title:p}),(0,s.jsxs)(o.Z,{className:"pagination-button",onClick:()=>W(event,Number(e)+1),disabled:e===I.length,children:["Next",(0,s.jsx)(S.Z,{})]})]}),W=(e,t)=>{window.scrollTo({top:0,behavior:"smooth"});let n=Number(t);d.push("/workshop/".concat(h,"/?page=").concat(n),void 0,{shallow:!0,scroll:!1}),R(n),H(I[n-1])};return(0,s.jsxs)(v.Z,{style:{display:"flex"},children:[(0,s.jsxs)(M,{open:b,sx:{width:{xs:"100%",sm:0,md:b?"60%":"100%"}},children:[U(O),(0,s.jsx)("div",{className:"card-page",children:(0,s.jsxs)("div",{className:"workshop-container",children:[A?z:(0,s.jsxs)("div",{className:"skeleton-container",style:{width:"100%",height:"100%"},children:[(0,s.jsx)(E.Z,{variant:"rect",width:"100%",height:"50px"}),Array(u.split("\n").length).fill((0,s.jsx)(E.Z,{variant:"text",height:"100%",width:"100%"}))]}),U(O)]})})]}),t.programming_language&&(0,s.jsx)(T,{drawerWidth:"-30%",open:b,setEditorOpen:w,text:y,setText:k,askToRun:Z,setAskToRun:P,language:t.programming_language}),(0,s.jsx)(F.Z,{name:c,bio:"bio",facilitatorOpen:x,handleClose:()=>m(!1)})]})}}},function(e){e.O(0,[774,164,571,340,757,398,458,533,753,8,966,888,179],function(){return e(e.s=27076)}),_N_E=e.O()}]);