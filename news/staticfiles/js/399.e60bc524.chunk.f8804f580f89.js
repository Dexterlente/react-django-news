"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[399],{688:function(e,t,n){var r=n(1413),o=n(2791),s=n(7689),c=n(8329),a=n(184);t.Z=function(e){return function(t){var n=(0,s.s0)();return(0,o.useEffect)((function(){c.Z.get("token")||n("/login")}),[n]),(0,a.jsx)(e,(0,r.Z)({},t))}}},3399:function(e,t,n){n.r(t);var r=n(9439),o=n(688),s=n(2791),c=n(8329),a=n(7689),i=n(3197),u=n(184);t.default=(0,o.Z)((function(){var e=(0,a.s0)(),t=(0,s.useState)(""),n=(0,r.Z)(t,2),o=n[0],l=n[1],d=(0,s.useState)(""),f=(0,r.Z)(d,2),b=f[0],p=f[1],g=(0,s.useState)(""),m=(0,r.Z)(g,2),h=m[0],j=m[1],x=(0,s.useState)(!1),y=(0,r.Z)(x,2)[1];return(0,u.jsxs)("div",{className:"mx-3 font-bold",children:[(0,u.jsx)("h2",{className:"text-[32px] my-8",children:"Create a new post"}),(0,u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),o&&b&&h){var n={title_post:o,content_post:b,image_post:h};console.log(c.Z.get("csrftoken"));var r=c.Z.get("csrftoken"),s=c.Z.get("token"),a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(s),"X-CSRFToken":r},body:JSON.stringify(n)};fetch("".concat(i.Z,"/api/posts/"),a).then((function(e){return e.json()})).then((function(t){console.log(a),console.log("New post created:",t),l(""),p(""),j(""),y(!1),e("/")})).catch((function(e){console.error(e),y(!0)}))}else y(!0)},children:[(0,u.jsxs)("label",{children:["Title:",(0,u.jsx)("input",{type:"text",value:o,onChange:function(e){l(e.target.value)},className:"w-11/12 mx-3 mb-4 border-2 border-gray-600 border-solid rounded-md"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:[(0,u.jsx)("div",{children:"Content:"}),(0,u.jsx)("textarea",{value:b,onChange:function(e){p(e.target.value)},className:"w-11/12 h-[300px] mx-3 border-2 my-1 border-solid border-gray-600 rounded-md"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:["Image URL:",(0,u.jsx)("input",{type:"url",value:h,onChange:function(e){j(e.target.value)},className:"w-11/12 mx-3 mb-4 border-2 border-gray-600  border-solid rounded-md mt-3"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",className:"inline-block px-6 mr-18 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out mb-3",children:"Create Post"})]})]})}))},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=399.e60bc524.chunk.js.427b6c280faa.map