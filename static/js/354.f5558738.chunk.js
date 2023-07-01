/*! For license information please see 354.f5558738.chunk.js.LICENSE.txt */
(self.webpackChunkcommand_project_frontend_task_pro=self.webpackChunkcommand_project_frontend_task_pro||[]).push([[354],{6009:function(e,n,r){"use strict";r.r(n),r.d(n,{CustomDialog:function(){return o}});var t=r(5289),o=(0,r(3457).Z)(t.Z)({"& .MuiPaper-root":{backgroundColor:"black",maxWidth:"350px",padding:"24px",margin:"0px"},"& .MuiDialogContent-root":{padding:"0px"}})},3354:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _n}});var t,o=r(4165),a=r(5861),i=r(9439),c=r(7689),s=r(168),d=r(9256),p=d.ZP.div(t||(t=(0,s.Z)(["\n  height: 100vh;\n\n  /* background-color: var(--sidebarBgColor); */\n\n  @media screen and (min-width: 375px) {\n    // width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n    width: 1440px;\n    display: flex;\n  }\n"]))),l=r(184);var u,g,h,m,_,x,j,f,v,b,k=function(e){var n=e.children;return(0,l.jsx)(p,{children:n})},y=r(2791),w=r(9434),Z=r(4396),C=r(6476),I=r(7609),P=d.ZP.div(u||(u=(0,s.Z)(["\n  position: relative;\n"]))),O=d.ZP.div(g||(g=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* background-color: red; */\n\n  width: 68px;\n  height: 21px;\n\n  color: var(--themeTitleTextColor);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  cursor: pointer;\n\n  transition: opacity var(--transition_data);\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),B=d.ZP.ul(h||(h=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100px;\n  height: 107px;\n  box-sizing: border-box;\n  padding: 18px 44px 18px 18px;\n  border-radius: 8px;\n  border: 1px solid var(--greenGreenBlueColor);\n  background-color: var(--themeListBgColor);\n  box-shadow: var(--boxShadow);\n"]))),L=d.ZP.li(m||(m=(0,s.Z)(["\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  cursor: pointer;\n  color: var(\n    --","\n  );\n  transition: opacity var(--transition_data);\n\n  &:hover {\n    /* color: orange; */\n    opacity: 0.7;\n  }\n"])),(function(e){return e.theme===e.children.toLowerCase()?"greenGreenBlueColor":"popupTextColor"})),E=d.ZP.svg(_||(_=(0,s.Z)(["\n  /* margin-left: 4px; */\n  width: 16px;\n  height: 16px;\n  stroke: var(--themeTitleTextColor);\n  fill: none;\n"]))),S=function(){var e=(0,w.I0)(),n=(0,y.useState)(!1),r=(0,i.Z)(n,2),t=r[0],o=r[1],a=(0,y.useState)((0,w.v9)(Z.$L)),c=(0,i.Z)(a,2),s=c[0],d=c[1];(0,y.useEffect)((function(){document.body.setAttribute("data-theme",s)}),[s]);var p=function(n){e((0,C.BU)(n)),d(n),o(!1)};return(0,l.jsxs)(P,{children:[(0,l.jsxs)(O,{onClick:function(){return o(!t)},children:["Theme",(0,l.jsx)(E,{"aria-label":"theme-select icon",children:(0,l.jsx)("use",{href:I.Z+"#icon-arrow-down"})})]}),t&&(0,l.jsxs)(B,{children:[(0,l.jsx)(L,{theme:s,onClick:function(){return p("light")},children:"Light"}),(0,l.jsx)(L,{theme:s,onClick:function(){return p("dark")},children:"Dark"}),(0,l.jsx)(L,{theme:s,onClick:function(){return p("violet")},children:"Violet"})]})]})},z=d.ZP.div(x||(x=(0,s.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 68px;\n  background-color: var(--headerBgColor);\n\n  position: relative;\n  .header-burger {\n    position: absolute;\n    left: 32px;\n    cursor: pointer;\n    display: none;\n  }\n  @media screen and (max-width: 768px) {\n    .header-burger {\n      display: block;\n      fill: #161616;\n\n    }\n  }\n"]))),M=(d.ZP.div(j||(j=(0,s.Z)(["\n  \n"]))),["title","titleId"]);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},T.apply(this,arguments)}function D(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function H(e,n){var r=e.title,t=e.titleId,o=D(e,M);return y.createElement("svg",T({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},o),r?y.createElement("title",{id:t},r):null,f||(f=y.createElement("path",{d:"M4 16H28",stroke:"var(--iconEyeColor)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),v||(v=y.createElement("path",{d:"M4 8H28",stroke:"var(--iconEyeColor)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})),b||(b=y.createElement("path",{d:"M4 24H28",stroke:"var(--iconEyeColor)",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var N,A,W,U,F=y.forwardRef(H),R=(r.p,d.ZP.div(N||(N=(0,s.Z)(["\n  display: flex;\n  margin-right: 24px;\n  align-items: center;\n  color: var(--primaryTextColor);\n  font-size: 14px;\n  margin-left: 14px;\n"])))),G=d.ZP.div(A||(A=(0,s.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  margin-left: 8px;\n  overflow: hidden;\n  background-color: var(--boardBgColor);\n  text-align: center;\n"]))),Q=d.ZP.img(W||(W=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 0 0;\n\n"]))),V=d.ZP.svg(U||(U=(0,s.Z)(["\n  width: 26px;\n  height: 26px;\n  margin-top: 9px;\n  fill: var(--defaultUserColor);\n"]))),J=r(471),$=r(4477),q=function(){var e=(0,w.v9)(Z.dy),n=e.name,r=e.avatarURL,t=(0,w.I0)();return(0,l.jsxs)(R,{children:[(0,l.jsx)("p",{children:n}),(0,l.jsx)(G,{onClick:function(){t((0,J.m)($.s))},children:r?(0,l.jsx)(Q,{src:r,alt:"user avatar"}):(0,l.jsx)(V,{"aria-label":"user-default icon",children:(0,l.jsx)("use",{href:I.Z+"#icon-user-default"})})})]})},K=function(e){var n=e.onBurgerClick;return(0,l.jsxs)(z,{children:[(0,l.jsx)("div",{className:"header-burger",onClick:n,children:(0,l.jsx)(F,{})}),(0,l.jsx)(S,{}),(0,l.jsx)(q,{})]})};var X,Y,ee,ne,re,te,oe,ae,ie,ce,se,de,pe,le,ue,ge,he,me,_e=r.p+"static/media/logo.b1359900ecfd4020ac0aa38f78f79245.svg",xe=d.ZP.div(X||(X=(0,s.Z)(["\n    color: #FFFFFF;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n"]))),je=d.ZP.div(Y||(Y=(0,s.Z)(["\n margin-right: 8px;\n"]))),fe=d.ZP.h3(ee||(ee=(0,s.Z)(["\n color: var(--addAnotherColumnIconBgColor);\n font-size: 16px;\n font-weight: 600;\n"]))),ve=function(e){var n=e.goHome;return(0,l.jsxs)(xe,{onClick:n,children:[(0,l.jsx)(je,{children:(0,l.jsx)("img",{src:_e,alt:"sidebar logo"})}),(0,l.jsx)(fe,{children:"Task Pro"})]})},be=(d.ZP.div(ne||(ne=(0,s.Z)(["\n  color: inherit;\n"]))),d.ZP.div(re||(re=(0,s.Z)(["\n  margin-top: 64px;\n"])))),ke=d.ZP.span(te||(te=(0,s.Z)(["\n  margin-bottom: 8px;\n      color: var(--addAnotherColumnIconBgColor);\n      font-size: 12px;\n      display: block;\n"]))),ye=d.ZP.div(oe||(oe=(0,s.Z)(["\n color: var(--addAnotherColumnIconBgColor);\n    margin-right: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px 0;\n    font-size: 14px;\n    border-top: 1px solid var(--currentProjBgColor);\n    border-bottom: 1px solid var(--currentProjBgColor);\n"]))),we=d.ZP.button(ae||(ae=(0,s.Z)(["\n width: 40px;\n      height: 36px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 20px;\n      border-radius: 6px;\n      background: #BEDBB0;\n      line-height: 1;\n      color: #121212;\n"]))),Ze=d.ZP.ul(ie||(ie=(0,s.Z)(["\n  margin-top: 40px;\n    margin-bottom: 40px;\n"]))),Ce=(d.ZP.div(ce||(ce=(0,s.Z)(['\n  padding: 20px 20px 20px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    color: rgba(255,255,255,0.5);\n    position: relative;\n    overflow: hidden;\n    path{\n      stroke: rgba(255,255,255,0.5);\n    };\n    path.selected{\n      color: rgba(255,255,255,1);\n      stroke: rgba(255,255,255,1);\n    };\n    :after{\n      content: "";\n        width: 4px;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        right: 0;\n        background: #BEDBB0;\n        border-bottom-left-radius: 2px;\n        border-top-left-radius: 2px;\n    }\n']))),d.ZP.div(se||(se=(0,s.Z)(["\n display: flex;\n      align-items: center;\n"])))),Ie=(d.ZP.div(de||(de=(0,s.Z)(["\n margin-right: 8px;\n      display: inline-block;\n"]))),d.ZP.ul(pe||(pe=(0,s.Z)(["\n display: flex;\n      align-items: center;\n      li{\n        cursor:pointer;\n      }\n      li:last-child{\n        margin-left: 8px;\n      }\n"])))),Pe=d.ZP.p(le||(le=(0,s.Z)(["\n line-height: 21px;\n font-weight: 500;\n font-size: 14px;\n"]))),Oe=d.ZP.h3(ue||(ue=(0,s.Z)(["\n line-height: 21px;\n font-weight: 500;\n font-size: 14px;\n"]))),Be=r(1413),Le=r(1134),Ee=["#icon-project","#icon-star","#icon-loading","#icon-puzzle-piece","#icon-container","#icon-lightning","#icon-colors","#icon-hexagon"],Se=[{id:1,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-1.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-1_2x.jpg"},{id:2,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-2.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-2_2x.jpg"},{id:3,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-3.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-3_2x.jpg"},{id:4,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-4.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-4_2x.jpg"},{id:5,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-5.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-5_2x.jpg"},{id:6,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-6.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-6_2x.jpg"},{id:7,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-7.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-7_2x.jpg"},{id:8,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-8.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-8_2x.jpg"},{id:9,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-9.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-9_2x.jpg"},{id:10,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-10.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-10_2x.jpg"},{id:11,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-11.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-11_2x.jpg"},{id:12,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-12.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-12_2x.jpg"},{id:13,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-13.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-13_2x.jpg"},{id:14,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-14.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-14_2x.jpg"},{id:15,backgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_28/c_crop,h_28,w_28/v1687378707/command_project_task_pro_images/desktop/bg-image-15.jpg",retinaBackgroundImage:"https://res.cloudinary.com/dxhypjavs/image/upload/c_scale,h_56/c_crop,h_56,w_56/v1687378707/command_project_task_pro_images/desktop/bg-image-15_2x.jpg"}],ze=r(449),Me=r(6009).CustomDialog,Te=function(e){var n=e.isOpen,r=e.onClose,t=e.type,o=void 0===t?"create":t,a=e.handleUpdateBoard,i=(0,Le.cI)(),c=i.register,s=i.handleSubmit,d=i.reset,p=(0,w.I0)();return(0,l.jsx)(Me,{open:n,onClose:r,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"create"===o?"New board":"Edit board"}),(0,l.jsxs)("form",{onSubmit:s((function(e){"create"===o?p((0,ze.Z5)(e)):"edit"===o&&(console.log("update"),console.log(e),a(e)),d(),r()})),children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",(0,Be.Z)({type:"text"},c("title")))}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Icons"}),Ee.map((function(e,n){return(0,l.jsxs)("label",{children:[(0,l.jsx)("input",(0,Be.Z)((0,Be.Z)({type:"radio",value:e},c("dashboardIcon")),{},{style:{display:"none"}})),(0,l.jsx)("svg",{width:18,height:18,stroke:"rgba(255, 255, 255, 0.5)",children:(0,l.jsx)("use",{href:I.Z+e,width:18,height:18})})]},n)}))]}),(0,l.jsx)("div",{children:Se.map((function(e,n){return(0,l.jsxs)("label",{children:[(0,l.jsx)("input",(0,Be.Z)((0,Be.Z)({type:"radio",value:e.id},c("background")),{},{style:{display:"none"}})),(0,l.jsx)("img",{srcSet:"".concat(e.backgroundImage," 1x, ").concat(e.retinaBackgroundImage," 2x"),alt:""})]},n)}))}),(0,l.jsx)("button",{type:"submit",children:"create"===o?"Create":"Edit"})]})]})})},De=function(e){e.onCreateNew;var n=(0,y.useState)(!1),r=(0,i.Z)(n,2),t=r[0],o=r[1],a=function(){o((function(e){return!e}))};return(0,l.jsxs)(ye,{children:[(0,l.jsxs)(Oe,{children:["Create a ",(0,l.jsx)("br",{})," new board"]}),(0,l.jsx)(we,{onClick:a,type:"button",children:"+"}),(0,l.jsx)(Te,{isOpen:t,onClose:a})]})},He=r(1087),Ne=["title","titleId"];function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Ae.apply(this,arguments)}function We(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Ue(e,n){var r=e.title,t=e.titleId,o=We(e,Ne);return y.createElement("svg",Ae({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},o),r?y.createElement("title",{id:t},r):null,ge||(ge=y.createElement("path",{d:"M6 2H10",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),he||(he=y.createElement("path",{d:"M2 4H14",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),me||(me=y.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var Fe,Re=y.forwardRef(Ue),Ge=(r.p,["title","titleId"]);function Qe(){return Qe=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},Qe.apply(this,arguments)}function Ve(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Je(e,n){var r=e.title,t=e.titleId,o=Ve(e,Ge);return y.createElement("svg",Qe({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},o),r?y.createElement("title",{id:t},r):null,Fe||(Fe=y.createElement("path",{d:"M1.66675 14.3334L5.36626 12.9105C5.60289 12.8195 5.7212 12.774 5.83189 12.7146C5.93022 12.6618 6.02395 12.6009 6.11211 12.5324C6.21136 12.4554 6.301 12.3658 6.48027 12.1865L14.0001 4.66671C14.7365 3.93033 14.7365 2.73642 14.0001 2.00004C13.2637 1.26366 12.0698 1.26366 11.3334 2.00004L3.8136 9.51985C3.63433 9.69912 3.5447 9.78876 3.46768 9.88801C3.39926 9.97617 3.33835 10.0699 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6339L1.66675 14.3334ZM1.66675 14.3334L3.03883 10.766C3.13701 10.5107 3.1861 10.3831 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0864C5.6132 12.2798 5.7099 12.3765 5.72913 12.4772C5.74593 12.5652 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3334Z",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var $e,qe,Ke,Xe,Ye,en=y.forwardRef(Je),nn=(r.p,function(e){var n=e.title,r=e.id,t=(e.background,e.dashboardIcon),o=(e.icon,e.onUpdate),a=e.activeBoardId,c=e.setActiveBoardId,s=e.onDelete,d=a===r,p=(0,y.useState)(!1),u=(0,i.Z)(p,2),g=u[0],h=u[1],m=function(){h((function(e){return!e}))};return(0,l.jsxs)("div",{className:d?"active":"",children:[(0,l.jsx)(He.OL,{to:r,children:(0,l.jsxs)(Ce,{onClick:function(){c(r)},children:[(0,l.jsx)("svg",{width:18,height:18,stroke:"rgba(255, 255, 255, 0.5)",children:(0,l.jsx)("use",{href:I.Z+t})}),(0,l.jsx)(Pe,{children:n})]})}),d&&(0,l.jsxs)(Ie,{children:[(0,l.jsxs)("li",{onClick:function(){console.log("Edit projects board")},children:[(0,l.jsx)("button",{type:"button",onClick:m,children:(0,l.jsx)(en,{})}),(0,l.jsx)(Te,{isOpen:g,onClose:m,type:"edit",handleUpdateBoard:function(e){o(r,e)}})]}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{type:"button",onClick:function(){return s(r)},children:(0,l.jsx)(Re,{})})})]})]})}),rn=r(3831),tn=function(){var e=(0,w.I0)(),n=(0,w.v9)(rn.g),r=(0,w.v9)((function(e){return e.dashboard.isLoading})),t=(0,y.useState)(null),c=(0,i.Z)(t,2),s=c[0],d=c[1],p=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(r){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,ze.rH)(r));case 2:e((0,ze.Qh)());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(r,t){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,ze.yl)({boardId:r,board:t}));case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();return r?(0,l.jsx)("div",{children:"Loading..."}):(0,l.jsx)(Ze,{children:n&&n.map((function(e){return(0,l.jsx)(nn,{title:e.title,id:e._id,background:e.background,dashboardIcon:e.dashboardIcon,activeBoardId:s,setActiveBoardId:d,onDelete:p,onUpdate:u},e._id)}))})},on=function(e){var n=e.onCreateNew;return(0,l.jsx)(be,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(ke,{children:"My boards"}),(0,l.jsx)(De,{onCreateNew:n}),(0,l.jsx)(tn,{})]})})},an=r(6745),cn=function(){var e=(0,w.I0)();return(0,l.jsxs)(an.im,{children:[(0,l.jsx)(an.Ei,{src:"https://res.cloudinary.com/dxhypjavs/image/upload/v1687412198/command_project_task_pro_images/additionally/flowerpot.png",alt:"cactus"}),(0,l.jsxs)(an.xv,{children:["If you need help with ",(0,l.jsx)(an.TR,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,l.jsxs)(an.zx,{onClick:function(){e((0,J.m)($.v))},children:[(0,l.jsx)(an.JO,{"aria-label":"icon close",width:"18",height:"18",children:(0,l.jsx)("use",{href:I.Z+"#icon-help-circle"})}),(0,l.jsx)(an.ci,{children:"Need help?"})]})]})},sn=d.ZP.button($e||($e=(0,s.Z)(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  /* position: absolute; */\n  bottom: 24px;\n  left: 24px;\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n"]))),dn=(d.ZP.div(qe||(qe=(0,s.Z)(["\n  margin-right: 14px;\n"]))),function(e){var n=e.onClickLogout;return(0,l.jsxs)(sn,{type:"button",onClick:n,children:[(0,l.jsx)("svg",{"aria-label":"icon logout",width:"32",height:"32",children:(0,l.jsx)("use",{href:I.Z+"#icon-logout"})}),"Log out"]})}),pn=d.ZP.div(Ke||(Ke=(0,s.Z)(["\n  min-width: 260px;\n  width: 260px;\n  height: 100vh;\n  background-color: var(--sidebarBgColor);\n  color: #fff;\n  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;\n  @media screen and (max-width: 768px) {\n    position: fixed;\n    left: -260px;\n    top: 64px;\n    &.visible {\n      left: 0;\n    }\n  }\n"]))),ln=d.ZP.div(Xe||(Xe=(0,s.Z)(["\n margin-left: 24px;\n"]))),un=(d.ZP.p(Ye||(Ye=(0,s.Z)(["\n margin-top: 60px;\n"]))),r(1694)),gn=r.n(un),hn=function(e){var n=e.isNeedHelp,r=void 0===n||n,t=e.shouldShowSidebar,o=void 0===t||t,a=(0,c.s0)(),i=(0,w.I0)(),s=gn()("",{visible:o});return(0,l.jsx)(pn,{className:s,children:(0,l.jsxs)(ln,{children:[(0,l.jsx)(ve,{goHome:function(e){e.stopPropagation(),e.preventDefault(),a("/home")}}),(0,l.jsx)(on,{}),r&&(0,l.jsx)(cn,{}),(0,l.jsx)(dn,{onClickLogout:function(){console.log("Logout"),i((0,C.ni)())}})]})})},mn=r(9991),_n=function(){var e=(0,w.I0)(),n=(0,y.useState)(!1),r=(0,i.Z)(n,2),t=r[0],s=r[1];return(0,y.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e((0,ze.Qh)());case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,l.jsxs)(k,{children:[(0,l.jsx)(hn,{shouldShowSidebar:t}),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(K,{onBurgerClick:function(){s(!t)}})}),(0,l.jsx)(y.Suspense,{fallback:(0,l.jsx)("div",{children:(0,l.jsx)(mn.a,{})}),children:(0,l.jsx)(c.j3,{})})]})}},3831:function(e,n,r){"use strict";r.d(n,{g:function(){return t},u:function(){return o}});var t=function(e){return e.dashboard.dashboards},o=function(e,n){var r=e.dashboard.dashboards.find((function(e){return e._id===n}));return r?r.columns:[]}},1694:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=354.f5558738.chunk.js.map