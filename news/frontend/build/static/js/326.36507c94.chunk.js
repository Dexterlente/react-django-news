"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[326],{688:function(e,t,n){var r=n(1413),o=n(2791),c=n(7689),a=n(8329),i=n(184);t.Z=function(e){return function(t){var n=(0,c.s0)();return(0,o.useEffect)((function(){a.Z.get("token")||n("/login")}),[n]),(0,i.jsx)(e,(0,r.Z)({},t))}}},3326:function(e,t,n){n.r(t);var r=n(9439),o=n(688),c=n(2791),a=n(8329),i=n(7689),s=n(3197),u=n(184);t.default=(0,o.Z)((function(){var e=(0,i.s0)(),t=(0,c.useState)(""),n=(0,r.Z)(t,2),o=n[0],l=n[1],d=(0,c.useState)(""),f=(0,r.Z)(d,2),b=f[0],p=f[1],g=(0,c.useState)(""),m=(0,r.Z)(g,2),h=m[0],j=m[1],x=(0,c.useState)(!1),y=(0,r.Z)(x,2)[1];return(0,u.jsxs)("div",{className:"mx-3 font-bold",children:[(0,u.jsx)("h2",{className:"text-[32px] my-8",children:"Create a new post"}),(0,u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),o&&b&&h){var n={title:o,content:b,image:h};console.log(a.Z.get("csrftoken"));var r=a.Z.get("csrftoken"),c=a.Z.get("token"),i={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(c),"X-CSRFToken":r},body:JSON.stringify(n)};fetch("".concat(s.Z,"/api/articles/"),i).then((function(e){return e.json()})).then((function(t){console.log(i),console.log("New article created:",t),l(""),p(""),j(""),y(!1),e("/")})).catch((function(e){console.error(e),y(!0)}))}else y(!0)},children:[(0,u.jsxs)("label",{children:["Title:",(0,u.jsx)("input",{type:"text",value:o,onChange:function(e){l(e.target.value)},className:"w-11/12 mx-3 mb-4 border-2 border-gray-600 border-solid rounded-md"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{children:"Content:"}),(0,u.jsx)("textarea",{value:b,onChange:function(e){p(e.target.value)},className:"w-11/12 h-[300px] mx-3 border-2 my-1 border-solid border-gray-600 rounded-md"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:["Image URL:",(0,u.jsx)("input",{type:"url",value:h,onChange:function(e){j(e.target.value)},className:"w-11/12 mx-3 mb-4 border-2 border-gray-600  border-solid rounded-md mt-3"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",className:"inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out mb-3",children:"Create Post"})]})]})}))},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=326.36507c94.chunk.js.map