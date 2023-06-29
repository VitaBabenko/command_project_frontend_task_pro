/*! For license information please see 65.13b80f5f.chunk.js.LICENSE.txt */
(self.webpackChunkcommand_project_frontend_task_pro=self.webpackChunkcommand_project_frontend_task_pro||[]).push([[65],{8065:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return ne}});var t,o=r(4165),i=r(5861),a=r(9439),l=r(7689),s=r(168),c=r(7e3),d=c.ZP.div(t||(t=(0,s.Z)(["\n  height: 100vh;\n\n  /* background-color: var(--sidebarBgColor); */\n\n  @media screen and (min-width: 375px) {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n    display: flex;\n  }\n"]))),u=r(184);var p,h,f,x,g,b,v,j,m,Z,k=function(n){var e=n.children;return(0,u.jsx)(d,{children:e})},w=r(2791),y=r(9434),C=r(4396),P=r(6476),O=r(7609),L=c.ZP.div(p||(p=(0,s.Z)(["\n  position: relative;\n"]))),B=c.ZP.div(h||(h=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* background-color: red; */\n\n  width: 68px;\n  height: 21px;\n\n  color: var(--themeTitleTextColor);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  cursor: pointer;\n\n  transition: opacity var(--transition_data);\n\n  &:hover {\n    opacity: 0.7;\n  }\n"]))),I=c.ZP.ul(f||(f=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100px;\n  height: 107px;\n  box-sizing: border-box;\n  padding: 18px 44px 18px 18px;\n  border-radius: 8px;\n  border: 1px solid var(--greenGreenBlueColor);\n  background-color: var(--themeListBgColor);\n  box-shadow: var(--boxShadow);\n"]))),S=c.ZP.li(x||(x=(0,s.Z)(["\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  cursor: pointer;\n  color: var(\n    --","\n  );\n  transition: opacity var(--transition_data);\n\n  &:hover {\n    /* color: orange; */\n    opacity: 0.7;\n  }\n"])),(function(n){return n.theme===n.children.toLowerCase()?"greenGreenBlueColor":"popupTextColor"})),_=c.ZP.svg(g||(g=(0,s.Z)(["\n  /* margin-left: 4px; */\n  width: 16px;\n  height: 16px;\n  stroke: var(--themeTitleTextColor);\n  fill: none;\n"]))),E=function(){var n=(0,y.I0)(),e=(0,w.useState)(!1),r=(0,a.Z)(e,2),t=r[0],o=r[1],i=(0,w.useState)((0,y.v9)(C.$L)),l=(0,a.Z)(i,2),s=l[0],c=l[1];(0,w.useEffect)((function(){document.body.setAttribute("data-theme",s)}),[s]);var d=function(e){n((0,P.BU)(e)),c(e),o(!1)};return(0,u.jsxs)(L,{children:[(0,u.jsxs)(B,{onClick:function(){return o(!t)},children:["Theme",(0,u.jsx)(_,{"aria-label":"theme-select icon",children:(0,u.jsx)("use",{href:O.Z+"#icon-arrow-down"})})]}),t&&(0,u.jsxs)(I,{children:[(0,u.jsx)(S,{theme:s,onClick:function(){return d("light")},children:"Light"}),(0,u.jsx)(S,{theme:s,onClick:function(){return d("dark")},children:"Dark"}),(0,u.jsx)(S,{theme:s,onClick:function(){return d("violet")},children:"Violet"})]})]})},z=c.ZP.div(b||(b=(0,s.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 68px;\n  background-color: var(--headerBgColor);\n\n  position: relative;\n\n  .header-burger {\n    position: absolute;\n    left: 32px;\n    cursor: pointer;\n    display: none;\n  }\n\n  @media screen and (max-width: 768px) {\n    .header-burger {\n      display: block;\n    }\n  }\n"]))),T=c.ZP.div(v||(v=(0,s.Z)(["\n  display: flex;\n  margin-right: 24px;\n  align-items: center;\n  color: var(--primaryTextColor);\n  font-size: 14px;\n  margin-left: 14px;\n"]))),N=c.ZP.div(j||(j=(0,s.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 4px;\n  margin-left: 8px;\n  overflow: hidden;\n  background-color: var(--boardBgColor);\n  text-align: center;\n"]))),D=c.ZP.img(m||(m=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 0 0;\n\n"]))),A=c.ZP.svg(Z||(Z=(0,s.Z)(["\n  width: 26px;\n  height: 26px;\n  margin-top: 9px;\n  fill: var(--defaultUserColor);\n"]))),F=function(){var n=(0,y.v9)(C.dy),e=n.name,r=n.avatarURL;return(0,u.jsxs)(T,{children:[(0,u.jsx)("p",{children:e}),(0,u.jsx)(N,{children:r?(0,u.jsx)(D,{src:r,alt:"user avatar"}):(0,u.jsx)(A,{"aria-label":"user-default icon",children:(0,u.jsx)("use",{href:O.Z+"#icon-user-default"})})})]})},M=function(){console.log("click on burger")},H=function(){return(0,u.jsxs)(z,{children:[(0,u.jsx)("div",{className:"header-burger",onClick:M}),(0,u.jsx)(E,{}),(0,u.jsx)(F,{})]})};var U,W,R,G,V,J,Q,$,q,K,X,Y,nn,en,rn,tn,on,an=r.p+"static/media/logo.b1359900ecfd4020ac0aa38f78f79245.svg",ln=c.ZP.div(U||(U=(0,s.Z)(["\n    color: #FFFFFF;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n"]))),sn=c.ZP.div(W||(W=(0,s.Z)(["\n margin-right: 8px;\n"]))),cn=c.ZP.h3(R||(R=(0,s.Z)(["\n color: var(--addAnotherColumnIconBgColor)\n"]))),dn=function(n){var e=n.goHome;return(0,u.jsxs)(ln,{onClick:e,children:[(0,u.jsx)(sn,{children:(0,u.jsx)("img",{src:an,alt:"sidebar logo"})}),(0,u.jsx)(cn,{children:"Task Pro"})]})},un=(c.ZP.div(G||(G=(0,s.Z)(["\n  color: inherit;\n"]))),c.ZP.div(V||(V=(0,s.Z)(["\n  margin-top: 64px;\n"])))),pn=c.ZP.span(J||(J=(0,s.Z)(["\n  margin-bottom: 8px;\n      color: var(--addAnotherColumnIconBgColor);\n      font-size: 12px;\n      display: block;\n"]))),hn=c.ZP.div(Q||(Q=(0,s.Z)(["\n color: var(--addAnotherColumnIconBgColor);\n    margin-right: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 14px 0;\n    font-size: 14px;\n    border-top: 1px solid var(--currentProjBgColor);\n    border-bottom: 1px solid var(--currentProjBgColor);\n"]))),fn=c.ZP.button($||($=(0,s.Z)(["\n width: 40px;\n      height: 36px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 20px;\n      border-radius: 6px;\n      background: #BEDBB0;\n      line-height: 1;\n      color: #121212;\n"]))),xn=c.ZP.ul(q||(q=(0,s.Z)(["\n  margin-top: 40px;\n    margin-bottom: 40px;\n"]))),gn=(c.ZP.div(K||(K=(0,s.Z)(['\n  padding: 20px 20px 20px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    color: rgba(255,255,255,0.5);\n    position: relative;\n    overflow: hidden;\n    path{\n      stroke: rgba(255,255,255,0.5);\n    };\n    path.selected{\n      color: rgba(255,255,255,1);\n      stroke: rgba(255,255,255,1);\n    };\n    :after{\n      content: "";\n        width: 4px;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        right: 0;\n        background: #BEDBB0;\n        border-bottom-left-radius: 2px;\n        border-top-left-radius: 2px;\n    }\n']))),c.ZP.div(X||(X=(0,s.Z)(["\n display: flex;\n      align-items: center;\n"])))),bn=c.ZP.div(Y||(Y=(0,s.Z)(["\n margin-right: 8px;\n      display: inline-block;\n"]))),vn=c.ZP.ul(nn||(nn=(0,s.Z)(["\n display: flex;\n      align-items: center;\n      li{\n        cursor:pointer;\n      }\n      li:last-child{\n        margin-left: 8px;\n      }\n"]))),jn=c.ZP.p(en||(en=(0,s.Z)(["\n line-height: 1;\n"]))),mn=function(n){var e=n.onCreateNew;return(0,u.jsxs)(hn,{children:[(0,u.jsxs)("h3",{children:["Create a ",(0,u.jsx)("br",{})," new board"]}),(0,u.jsx)(fn,{onClick:e,type:"button",children:"+"})]})},Zn=r(1087),kn=["title","titleId"];function wn(){return wn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},wn.apply(this,arguments)}function yn(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function Cn(n,e){var r=n.title,t=n.titleId,o=yn(n,kn);return w.createElement("svg",wn({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),r?w.createElement("title",{id:t},r):null,rn||(rn=w.createElement("path",{d:"M6 2H10",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),tn||(tn=w.createElement("path",{d:"M2 4H14",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),on||(on=w.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var Pn,On=w.forwardRef(Cn),Ln=(r.p,["title","titleId"]);function Bn(){return Bn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},Bn.apply(this,arguments)}function In(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function Sn(n,e){var r=n.title,t=n.titleId,o=In(n,Ln);return w.createElement("svg",Bn({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},o),r?w.createElement("title",{id:t},r):null,Pn||(Pn=w.createElement("path",{d:"M1.66675 14.3334L5.36626 12.9105C5.60289 12.8195 5.7212 12.774 5.83189 12.7146C5.93022 12.6618 6.02395 12.6009 6.11211 12.5324C6.21136 12.4554 6.301 12.3658 6.48027 12.1865L14.0001 4.66671C14.7365 3.93033 14.7365 2.73642 14.0001 2.00004C13.2637 1.26366 12.0698 1.26366 11.3334 2.00004L3.8136 9.51985C3.63433 9.69912 3.5447 9.78876 3.46768 9.88801C3.39926 9.97617 3.33835 10.0699 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6339L1.66675 14.3334ZM1.66675 14.3334L3.03883 10.766C3.13701 10.5107 3.1861 10.3831 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0864C5.6132 12.2798 5.7099 12.3765 5.72913 12.4772C5.74593 12.5652 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3334Z",stroke:"white",strokeOpacity:.5,strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var _n,En,zn,Tn,Nn,Dn=w.forwardRef(Sn),An=(r.p,function(n){var e=n.title,r=n.id,t=(n.handleDashboardClick,n.background,n.dashboardIcon,n.icon),o=n.isSelected;return(0,u.jsxs)("div",{children:[(0,u.jsx)(Zn.OL,{to:r,children:(0,u.jsxs)(gn,{children:[t&&(0,u.jsx)(bn,{children:(0,u.jsx)(t,{})}),(0,u.jsx)(jn,{children:e})]})}),o&&(0,u.jsxs)(vn,{children:[(0,u.jsx)("li",{onClick:function(){console.log("Edit projects board")},children:(0,u.jsx)(Dn,{})}),(0,u.jsx)("li",{onClick:function(){console.log("Delete project board")},children:(0,u.jsx)(On,{})})]})]})}),Fn=r(3831),Mn=function(){var n=(0,y.v9)(Fn.g),e=(0,y.v9)((function(n){return n.dashboard.isLoading})),r=(0,l.s0)();if(e)return(0,u.jsx)("div",{children:"Loading..."});var t=function(n){r("/boards/".concat(n))};return(0,u.jsx)(xn,{children:n&&n.map((function(n){return console.log(n),(0,u.jsx)(An,{handleDashboardClick:t,title:n.title,id:n._id,background:n.background,dashboardIcon:n.dashboardIcon},n._id)}))})},Hn=function(n){var e=n.onCreateNew;return(0,u.jsx)(un,{children:(0,u.jsxs)("div",{children:[(0,u.jsx)(pn,{children:"My boards"}),(0,u.jsx)(mn,{onCreateNew:e}),(0,u.jsx)(Mn,{})]})})},Un=r(6745),Wn=r(471),Rn=r(4477),Gn=function(){var n=(0,y.I0)();return(0,u.jsxs)(Un.im,{children:[(0,u.jsx)(Un.Ei,{src:"https://res.cloudinary.com/dxhypjavs/image/upload/v1687412198/command_project_task_pro_images/additionally/flowerpot.png",alt:"cactus"}),(0,u.jsxs)(Un.xv,{children:["If you need help with ",(0,u.jsx)("a",{href:"*",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,u.jsxs)(Un.zx,{onClick:function(){n((0,Wn.m)(Rn.v))},children:[(0,u.jsx)(Un.JO,{"aria-label":"icon close",width:"18",height:"18",children:(0,u.jsx)("use",{href:O.Z+"#icon-help-circle"})}),(0,u.jsx)(Un.ci,{children:"Need help?"})]})]})},Vn=c.ZP.button(_n||(_n=(0,s.Z)(["\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  /* position: absolute; */\n  bottom: 24px;\n  left: 24px;\n  cursor: pointer;\n  border: none;\n  background-color: inherit;\n"]))),Jn=(c.ZP.div(En||(En=(0,s.Z)(["\n  margin-right: 14px;\n"]))),function(n){var e=n.onClickLogout;return(0,u.jsxs)(Vn,{type:"button",onClick:e,children:[(0,u.jsx)("svg",{"aria-label":"icon logout",width:"32",height:"32",children:(0,u.jsx)("use",{href:O.Z+"#icon-logout"})}),"Log out"]})}),Qn=c.ZP.div(zn||(zn=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 260px;\n  height: 100%;\n  background-color: var(--sidebarBgColor);\n  color: #fff;\n  transition: left cubic-bezier(0.15, 0.84, 1, 1) 0.219s;\n\n  @media screen and (max-width: 768px) {\n    left: -260px;\n    &.visible {\n      left: 0;\n    }\n  }\n"]))),$n=c.ZP.div(Tn||(Tn=(0,s.Z)(["\n margin-left: 24px;\n"]))),qn=(c.ZP.p(Nn||(Nn=(0,s.Z)(["\n margin-top: 60px;\n"]))),r(449)),Kn=r(1694),Xn=r.n(Kn),Yn=function(n){var e=n.isNeedHelp,r=void 0===e||e,t=n.shouldShowSidebar,o=void 0===t||t,i=(0,l.s0)(),a=(0,y.I0)(),s={title:"test dshboard2",background:"testUrl",dashboardIcon:"testIcon"},c=Xn()("",{visible:o});return(0,u.jsx)(Qn,{className:c,children:(0,u.jsxs)($n,{children:[(0,u.jsx)(dn,{goHome:function(n){n.stopPropagation(),n.preventDefault(),i("/home")}}),(0,u.jsx)(Hn,{onCreateNew:function(){a((0,qn.Z5)(s)),console.log("Create new project")}}),r&&(0,u.jsx)(Gn,{}),(0,u.jsx)(Jn,{onClickLogout:function(){console.log("Logout"),a((0,P.ni)())}})]})})},ne=function(){var n=(0,y.I0)(),e=(0,w.useState)(!0),r=(0,a.Z)(e,2),t=r[0],s=r[1];return(0,w.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,qn.Qh)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,u.jsxs)(k,{children:[(0,u.jsx)(Yn,{shouldShowSidebar:t}),(0,u.jsx)("div",{style:{width:"100%"},children:(0,u.jsx)(H,{onBurgerClick:function(){s(!t)}})}),(0,u.jsx)(w.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading"}),children:(0,u.jsx)(l.j3,{})})]})}},3831:function(n,e,r){"use strict";r.d(e,{g:function(){return t},u:function(){return o}});var t=function(n){return n.dashboard.dashboards},o=function(n,e){var r=n.dashboard.dashboards.find((function(n){return n._id===e}));return r?r.columns:[]}},1694:function(n,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&n.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var l in r)t.call(r,l)&&r[l]&&n.push(l)}}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(n.exports=r)}()}}]);
//# sourceMappingURL=65.13b80f5f.chunk.js.map