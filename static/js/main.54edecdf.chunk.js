(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(4),o=n.n(c),r=n(2),s=n(1),l=n(0),a=function(t){var e=t.goods;return Object(l.jsx)("ul",{className:"goods",children:e.map((function(t){return Object(l.jsx)("li",{children:t},t)}))})},i=(n(10),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),u=Object.keys(Array(10).fill(0)),b=function(){var t=Object(s.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(s.useState)(!1),b=Object(r.a)(o,2),j=b[0],h=b[1],d=Object(s.useState)("default"),O=Object(r.a)(d,2),p=O[0],f=O[1],g=Object(s.useState)(1),x=Object(r.a)(g,2),m=x[0],k=x[1],y=i.filter((function(t){return t.length>=m}));switch(p){case"alpha":y.sort((function(t,e){return t.localeCompare(e)}));break;case"length":y.sort((function(t,e){return t.length-e.length}))}return j&&y.reverse(),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Goods"}),n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a,{goods:y}),Object(l.jsx)("button",{type:"button",onClick:function(){h(!1),f("default"),k(1)},children:"Reset"}),Object(l.jsx)("button",{type:"button",onClick:function(){return h(!j)},children:"Reverse"}),Object(l.jsx)("button",{type:"button",onClick:function(){f("alpha")},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",onClick:function(){f("length")},children:"Sort by length"}),Object(l.jsx)("select",{name:"length",id:"length",value:m,onChange:function(t){k(+t.target.value)},children:u.map((function(t){return Object(l.jsx)("option",{value:+t+1,children:+t+1})}))})]}):Object(l.jsx)("button",{type:"button",onClick:function(){return c(!0)},children:"Start"})]})};o.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.54edecdf.chunk.js.map