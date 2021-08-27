(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(15),r=n.n(c),a=n(5),u=n(3),o=n(2),i=n(0);var s=function(e){var t=e.addContact,n=e.newName,c=e.newNumber,r=e.handleNameChange,a=e.handleNumberChange;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("input",{type:"text",value:n,onChange:r}),Object(i.jsx)("input",{type:"text",value:c,onChange:a}),Object(i.jsx)("button",{type:"submit",children:"Add Contact"})]})};var d=function(e){var t=e.id,n=e.name,c=e.number,r=e.handleDelete;return Object(i.jsxs)("div",{id:t,children:[Object(i.jsx)("h4",{children:n}),Object(i.jsx)("p",{children:c}),Object(i.jsx)("button",{type:"button",onClick:r,children:"Delete"})]})};var l=function(e){var t=e.handleFilter;return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{children:"Search contacts:"}),Object(i.jsx)("input",{type:"text",onChange:t})]})};var j=function(e){var t=e.message;return t?Object(i.jsx)("div",{className:"error",children:t}):null},b=n(4),h=n.n(b),f="/contacts",m=function(){return console.log("base url is",f),h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e,t){return h.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},x=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))};var p=function(){var e="enter a name",t="enter a number",n=Object(o.useState)([]),c=Object(u.a)(n,2),r=c[0],b=c[1],h=Object(o.useState)(""),f=Object(u.a)(h,2),p=f[0],g=f[1],C=Object(o.useState)(e),w=Object(u.a)(C,2),y=w[0],N=w[1],S=Object(o.useState)(t),D=Object(u.a)(S,2),k=D[0],A=D[1],E=Object(o.useState)(""),F=Object(u.a)(E,2),J=F[0],L=F[1],M=function(e){return function(t){return e(t.target.value)}},T=function(){N(e),A(t)},B=function(e){var t=e.target.closest("div").id;x(t).catch((function(e){return I("contact was already deleted from server")}))},I=function(e){L(e),setTimeout((function(){return L(null)}),3500)};Object(o.useEffect)((function(){m().then((function(e){return b(e)})).catch((function(e){return I("could not retrieve contacts from server")}))}),[]);var P=r.filter((function(e){return e.name.toLowerCase().includes(p)||e.number.includes(p)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{message:J}),Object(i.jsx)("h1",{children:"Your contacts"}),Object(i.jsx)(l,{handleFilter:function(e){var t=e.target.value;g(t.trim().toLowerCase())}}),Object(i.jsx)("h1",{children:"Add a New Contact:"}),Object(i.jsx)(s,{newName:y,newNumber:k,addContact:function(n){if(n.preventDefault(),y!==e||k!==t){var c=r.find((function(e){return e.name===y||e.number===k}));if(c){window.confirm("This name already exists in your contacts. Do you want to replace the number?")&&v(c.id,Object(a.a)(Object(a.a)({},c),{},{number:k})).then((function(e){return T()})).catch((function(e){return L(e)}))}else{var u={id:Math.round(1e5*Math.random()),name:y,number:k};O(u).then((function(e){b(r.concat(e)),T()})).catch((function(e){return I("could not create new contact")}))}}else I("Please enter non-default values for contact")},handleNameChange:M(N),handleNumberChange:M(A)}),Object(i.jsx)("h2",{children:"Contacts"}),P.map((function(e){return Object(i.jsx)(d,Object(a.a)({handleDelete:B},e),e.id)}))]})};n(39);r.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.de79396e.chunk.js.map