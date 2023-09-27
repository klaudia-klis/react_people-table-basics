(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(8),s=(c(33),c(34),c(2)),r=c(21),i=c.n(r),j=(c(35),c(22)),l=c(4),o=c(0),b=(c(36),c(3)),h=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.person;return Object(b.jsx)("td",{children:Object(b.jsx)(a.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name})})},O=function(e){var t=e.people,c=Object(s.q)().personSlug,n=t.find((function(e){return e.slug===c}));return Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"person",className:e.slug===(null===n||void 0===n?void 0:n.slug)?"has-background-warning":void 0,children:[Object(b.jsx)(u,{person:e}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),e.mother?Object(b.jsx)(u,{person:e.mother}):Object(b.jsx)("td",{children:null!==e.motherName?e.motherName:"-"}),e.father?Object(b.jsx)(u,{person:e.father}):Object(b.jsx)("td",{children:null!==e.fatherName?e.fatherName:"-"})]},e.slug)}))})]})},x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(!1),s=Object(l.a)(a,2),r=s[0],i=s[1],u=Object(o.useState)(!1),x=Object(l.a)(u,2),m=x[0],p=x[1];Object(o.useEffect)((function(){i(!0),d().then(n).catch((function(){return p(!0)})).finally((function(){return i(!1)}))}),[]);var f=c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(j.a)(Object(j.a)({},e),{},{mother:t,father:n})}));return Object(b.jsx)("main",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("div",{className:"box table-container",children:[r&&Object(b.jsx)(h,{}),m&&Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!r&&Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(b.jsx)(O,{people:f})]})})]})})},m=function(){return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{className:"title",children:"Home Page"})})})},p=function(){return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})})},f=function(){return Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(b.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})}),Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/",element:Object(b.jsx)(m,{})}),Object(b.jsx)(s.b,{path:"/people",element:Object(b.jsx)(x,{})}),Object(b.jsx)(s.b,{path:"/people/:personSlug",element:Object(b.jsx)(x,{})}),Object(b.jsx)(s.b,{path:"/home",element:Object(b.jsx)(s.a,{to:"/",replace:!0})}),Object(b.jsx)(s.b,{path:"*",element:Object(b.jsx)(p,{})})]})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(f,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.90a746d2.chunk.js.map