"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[764],{1553:function(e,n,t){var r=t(1413),a=t(2791),o=t(7689),s=t(8329),i=t(184);n.Z=function(e){return function(n){var t=(0,o.s0)();return(0,a.useEffect)((function(){s.Z.get("token")&&t("/")}),[t]),(0,i.jsx)(e,(0,r.Z)({},n))}}},5764:function(e,n,t){t.r(n);var r=t(4942),a=t(1413),o=t(9439),s=t(2791),i=t(7689),c=t(1553),l=t(3197),u=t(184);n.default=(0,c.Z)((function(){var e=(0,s.useState)({username:"",email:"",password:"",password_confirm:"",first_name:"",last_name:""}),n=(0,o.Z)(e,2),t=n[0],c=n[1],f=(0,i.s0)(),m=function(e){c((0,a.Z)((0,a.Z)({},t),{},(0,r.Z)({},e.target.name,e.target.value)))};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);fetch("".concat(l.Z,"/api/register/"),{method:"POST",headers:{Authorization:"Token ".concat(localStorage.getItem("token"))},body:n}).then((function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){console.log(e),f("/login")})).catch((function(e){console.error("Error:",e)}))},children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"username",children:"Username:"}),(0,u.jsx)("input",{type:"text",name:"username",value:t.username,onChange:m})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,u.jsx)("input",{type:"email",name:"email",value:t.email,onChange:m})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"password",children:"Password:"}),(0,u.jsx)("input",{type:"password",name:"password",value:t.password,onChange:m})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"password_confirm",children:"Confirm Password:"}),(0,u.jsx)("input",{type:"password",name:"password_confirm",value:t.password_confirm,onChange:m})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"first_name",children:"First Name:"}),(0,u.jsx)("input",{type:"text",name:"first_name",value:t.first_name,onChange:m})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"last_name",children:"Last Name:"}),(0,u.jsx)("input",{type:"text",name:"last_name",value:t.last_name,onChange:m})]}),(0,u.jsx)("button",{type:"submit",children:"Register"})]})}))},4942:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(9142);function a(e,n,t){return(n=(0,r.Z)(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=764.4221b164.chunk.js.map