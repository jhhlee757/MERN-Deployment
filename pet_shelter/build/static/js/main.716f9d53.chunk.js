(this.webpackJsonppet_shelter=this.webpackJsonppet_shelter||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},40:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c),u=(a(30),a(2)),i=(a(39),a(40),a(6),a(1)),o=a(3),s=a.n(o),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),p=m[0],E=m[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),d=h[0],f=h[1],j=Object(n.useState)(""),O=Object(i.a)(j,2),v=O[0],g=O[1],S=Object(n.useState)(""),k=Object(i.a)(S,2),y=k[0],C=k[1],x=Object(n.useState)(""),w=Object(i.a)(x,2),D=w[0],P=w[1],A=Object(n.useState)({}),_=Object(i.a)(A,2),F=_[0],I=_[1];return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:c,type:p,description:d,skill1:v,skill2:y,skill3:D};s.a.post("http://localhost:8000/api/pets",t).then((function(e){e.data.errors?I(e.data.errors):Object(u.c)("/pets")})).catch((function(e){return console.log(e)}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Pet name: "),l.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)}}),l.a.createElement("span",null,F.name?F.name.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Pet type: "),l.a.createElement("input",{type:"text",onChange:function(e){return E(e.target.value)}}),l.a.createElement("span",null,F.type?F.type.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Description: "),l.a.createElement("input",{type:"text",onChange:function(e){return f(e.target.value)}}),l.a.createElement("span",null,F.description?F.description.message:"")),l.a.createElement("p",null,"Skills:"),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 1: "),l.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 2: "),l.a.createElement("input",{type:"text",onChange:function(e){return C(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 3: "),l.a.createElement("input",{type:"text",onChange:function(e){return P(e.target.value)}})),l.a.createElement("input",{value:"Add pet",type:"submit"}),"\xa0",l.a.createElement(u.a,{to:"/pets"},"Cancel"))},p=a(7),E=function(e){e.removeFromDom;var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=(a[0],a[1],Object(n.useState)([])),r=Object(i.a)(c,2),o=(r[0],r[1],Object(n.useState)("Ascending")),m=Object(i.a)(o,2),E=(m[0],m[1],Object(n.useState)({})),b=Object(i.a)(E,2),h=(b[0],b[1]);return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+e.id).then((function(e){return h(Object(p.a)({},e.data))}))}),[]),l.a.createElement("div",null,e.pet.map((function(e,t){return l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(u.a,{to:"/pets/"+e._id},"Details"),"\xa0",l.a.createElement(u.a,{to:"/pets/"+e._id+"/edit"},"Edit")))),l.a.createElement("br",null))})))},b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(i.a)(r,2),m=o[0],p=o[1],b=Object(n.useState)([]),h=Object(i.a)(b,2),d=(h[0],h[1]),f=Object(n.useState)("Ascending"),j=Object(i.a)(f,2);j[0],j[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){c(e.data),p(!0),d(e.data)})).catch((function(e){return console.log("Error: ",e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"These pets are looking for a home!"),l.a.createElement(u.a,{to:"/pets/new"},"Add a pet to the shelter"),l.a.createElement("br",null),l.a.createElement("br",null),m&&l.a.createElement(E,{pet:a,removeFromDom:function(e){c(a.filter((function(t){return t._id!=e})))}}))},h=a(20),d=a(21),f=a(23),j=a(22),O=a(24),v=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(j.a)(t).call(this,e))).vote=function(e){a.setState({likes:a.state.likes+1})},a.state={likes:0},a}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Likes: ",this.state.likes),l.a.createElement("button",{disabled:this.state.likes,onClick:this.vote,id:this.props.petId},"Like this pet"))}}]),t}(n.Component),g=function(e){e.removeFromDom;var t=Object(n.useState)({}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+e.id).then((function(e){return r(Object(p.a)({},e.data))}))}),[]),l.a.createElement("div",null,l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"Details about ",c.name),l.a.createElement("p",null,"Pet type: ",c.type),l.a.createElement("p",null,"Description: ",c.description),l.a.createElement("p",null,"Skills:",l.a.createElement("p",null,c.skill1),l.a.createElement("p",null,c.skill2),l.a.createElement("p",null,c.skill3)),l.a.createElement(v,{petId:c.id}),l.a.createElement("button",{onClick:function(e){var t;t=c._id,s.a.delete("http://localhost:8000/api/pets/"+t).then((function(e){Object(u.c)("/pets")}))}},"Adopt this pet!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.a,{to:"/pets"},"Home"))},S=function(e){var t=e.id,a=Object(n.useState)(),c=Object(i.a)(a,2),r=c[0],o=c[1],m=Object(n.useState)(),p=Object(i.a)(m,2),E=p[0],b=p[1],h=Object(n.useState)(),d=Object(i.a)(h,2),f=d[0],j=d[1],O=Object(n.useState)(),v=Object(i.a)(O,2),g=v[0],S=v[1],k=Object(n.useState)(),y=Object(i.a)(k,2),C=y[0],x=y[1],w=Object(n.useState)(),D=Object(i.a)(w,2),P=D[0],A=D[1],_=Object(n.useState)({}),F=Object(i.a)(_,2),I=F[0],B=F[1];Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets/"+t).then((function(e){o(e.data.name),b(e.data.type),j(e.data.description),S(e.data.skill1),x(e.data.skill2),A(e.data.skill3)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"Edit this pet"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:r,type:E,description:f,skill1:g,skill2:C,skill3:P};s.a.post("http://localhost:8000/api/pets",a).then((function(e){e.data.errors?B(e.data.errors):Object(u.c)("/pets/"+t)})).catch((function(e){return console.log(e)}))}},l.a.createElement("p",null,l.a.createElement("label",null,"Pet name:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",value:r,onChange:function(e){o(e.target.value)}}),l.a.createElement("span",null,I.name?I.name.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Pet type:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"type",value:E,onChange:function(e){b(e.target.value)}}),l.a.createElement("span",null,I.type?I.type.message:"")),l.a.createElement("p",null,l.a.createElement("label",null,"Description:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:f,onChange:function(e){j(e.target.value)}}),l.a.createElement("span",null,I.description?I.description.message:"")),l.a.createElement("p",null,"Skills (optional)"),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 1:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill1",value:g,onChange:function(e){S(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 2:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill2",value:C,onChange:function(e){x(e.target.value)}})),l.a.createElement("p",null,l.a.createElement("label",null,"Skill 3:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill3",value:P,onChange:function(e){A(e.target.value)}})),l.a.createElement("input",{value:"Edit pet",type:"submit"}),"\xa0",l.a.createElement(u.a,{to:"/pets"},"Cancel")),l.a.createElement("br",null),l.a.createElement(u.a,{to:"/pets"},"Home"))},k=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(!1),r=Object(i.a)(c,2),u=(r[0],r[1]);Object(n.useEffect)((function(){s.a.get("http://localhost:8000/api/pets").then((function(e){a(e.data),u(!0)})).catch((function(e){return console.log("Error: ",e)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h3",null,"Pet Shelter"),l.a.createElement("h4",null,"Know of a pet needing a home?"),l.a.createElement(m,null))};var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.b,null,l.a.createElement(b,{path:"/pets"}),l.a.createElement(k,{path:"/pets/new"}),l.a.createElement(g,{path:"/pets/:id"}),l.a.createElement(S,{path:"/pets/:id/edit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.716f9d53.chunk.js.map