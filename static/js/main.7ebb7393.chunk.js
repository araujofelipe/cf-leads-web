(this["webpackJsonpcf-leads-web"]=this["webpackJsonpcf-leads-web"]||[]).push([[0],{41:function(e,a,t){e.exports=t(71)},46:function(e,a,t){},67:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(46),t(7)),u=t(79),m=t(76),i=t(78),s=t(21),E=t(19),d=t(77),h=t(74),p=t(35),b=t(80),f=t(75),v=t(34),g=t.n(v),O={headers:{}},j=function(e){return g.a.post("".concat("https://lead.coachfunnels.com.br","/leads/list"),e,O)};var C=[{path:"/",component:function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({}),o=Object(E.a)(c,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement(d.a.Control,{placeholder:"Seu e-mail",value:u.email,onChange:function(e){m(Object(s.a)({},u,{email:e.target.value}))}})),l.a.createElement(p.a,null,l.a.createElement(d.a.Control,{placeholder:"Chave de acesso",value:u.psw,onChange:function(e){m(Object(s.a)({},u,{psw:e.target.value}))}})),l.a.createElement(p.a,null,l.a.createElement(b.a,{variant:"primary",onClick:function(){return console.log(u),void j({owner:u}).then((function(e){r(e.data)}))}},"Listar Leads")))),l.a.createElement(f.a,{striped:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"Telefone"),l.a.createElement("th",null,"Par\xe2metros de Origem"))),l.a.createElement("tbody",null,t.map((function(e,a){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.params))})))))}}];t(67);var w=function(){return l.a.createElement(m.a,null,l.a.createElement(i.a,{bg:"light",expand:"lg"},l.a.createElement(i.a.Brand,{href:"#home"},"CoachFunnels Leads"),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"})),l.a.createElement(u.b,{history:Object(o.a)()},l.a.createElement(u.c,null,C.map((function(e,a){return l.a.createElement(u.a,Object.assign({},e,{key:a.toString()}))})))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7ebb7393.chunk.js.map