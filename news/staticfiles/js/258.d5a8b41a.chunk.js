"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[258],{3258:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(9439),a=n(2791),c=n(7689),s=n(1087),i=n(4165),o=n(5861),h=n(8329),u=n(184);var d=function(e){var t=e.id,n=e.archived,c=e.onArchiveChange,s=(0,a.useState)(!1),d=(0,r.Z)(s,2),l=d[0],m=d[1];(0,a.useEffect)((function(){var e=h.Z.get("token");m(!!e)}),[]);var x=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=h.Z.get("token"),console.log("Token value:",r),r){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,fetch("http://127.0.0.1:8000/api/articles/".concat(t,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(r)},body:JSON.stringify({archived:!n})});case 6:e.sent.ok?c(t,!n):alert("There was an error archiving/unarchiving the item.");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)(u.Fragment,{children:l&&(0,u.jsx)("button",{onClick:x,className:"py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-white hover:opacity-70 ".concat(n?"bg-[red]":"bg-[green]"),children:n?"Unarchive":"Archive"})})},l=n(8163),m=function(){var e=(0,c.UO)().id,t=(0,a.useState)({}),n=(0,r.Z)(t,2),i=n[0],o=n[1],m=(0,a.useState)(!0),x=(0,r.Z)(m,2),f=x[0],p=x[1],v=(0,a.useState)(!1),g=(0,r.Z)(v,2),b=g[0],j=g[1],k=(0,a.useState)(""),Z=(0,r.Z)(k,2),w=Z[0],y=Z[1];(0,a.useEffect)((function(){!function(e){fetch("http://127.0.0.1:8000/api/articles/".concat(e)).then((function(e){return e.json()})).then((function(e){o(e),j(e.archived),p(!1)}))}(e),y(h.Z.get("token"))}),[e]);return(0,u.jsx)("div",{children:f?(0,u.jsx)(l.Z,{}):(0,u.jsxs)("div",{className:"text-center md:mx-32",children:[(0,u.jsx)("h1",{className:"font-bold text-[40px] mx-4 mb-4 mt-8",children:i.title}),(0,u.jsxs)("p",{className:"mt-4 text-sm text-start md:mx-24 mx-8",children:["By: ",i.author.first_name.charAt(0).toUpperCase()+i.author.first_name.slice(1).toLowerCase()," ",i.author.last_name.charAt(0).toUpperCase()+i.author.last_name.slice(1).toLowerCase()]}),(0,u.jsx)("p",{className:"mt-4 text-sm text-start md:mx-24 mx-8",children:new Date(i.time_created).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,u.jsx)("p",{className:"text-[16px] md:m-24 m-8",children:i.content}),w&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{id:e,archived:b,onArchiveChange:function(e,t){j(t)}}),(0,u.jsx)(s.rU,{to:"/edit-article/".concat(e),className:"py-2 mb-10 px-4 font-semibold rounded-lg shadow-md text-black hover:opacity-70",children:"Edit Article"})]})]})})}}}]);
//# sourceMappingURL=258.d5a8b41a.chunk.js.map