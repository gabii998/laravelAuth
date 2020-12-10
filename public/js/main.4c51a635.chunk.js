(this.webpackJsonpgestion=this.webpackJsonpgestion||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),o=(a(76),a(77),a(114)),i=a(115),m=a(113),s=a(29),u=a(6),d=a(8),E=a.n(d),b=l.a.createContext();function f(e){var t=Object(n.useState)(localStorage.getItem("usuario")),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){r(localStorage.getItem("usuario"))}),[]);var d=function(e){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/sanctum/csrf-cookie",{withCredentials:!0}).then((function(t){!function(e){E.a.post("http://localhost:8000/api/login",e,{withCredentials:!0}).then((function(e){r(e.data.email),localStorage.setItem("usuario",e.data.email),s(null)})).catch((function(e){}))}(e)})).catch((function(e){}))};function f(){r(null),localStorage.removeItem("usuario")}var h=Object(n.useMemo)((function(){return{usuario:c,login:d,logout:f,loginError:m}}),[c,m]);return l.a.createElement(b.Provider,Object.assign({value:h},e))}function h(){var e=l.a.useContext(b);if(!e)throw new Error("useUsuario no puede ser nulo");return e}var p=function(){var e=h(),t=e.usuario,a=e.logout,n=[{nombre:"Clientes",path:"/Clientes"},{nombre:"Stock",path:"/Stock"},{nombre:"Insumos",path:"/Insumos"}].map((function(e){return l.a.createElement(s.b,{key:e.path,className:"nav-link",to:e.path,activeClassName:"active"},e.nombre)}));return l.a.createElement(o.a,{expand:"lg"},l.a.createElement(o.a.Brand,{href:"#home"},"Gesti\xf3n"),l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},null!=t&&n),l.a.createElement(i.a,{className:"ml-auto"},null!=t?l.a.createElement(m.a,{alignRight:!0,title:t,id:"collasible-nav-dropdown"},l.a.createElement(m.a.Item,{href:"#action/3.3"},"Ajustes"),l.a.createElement(m.a.Divider,null),l.a.createElement(m.a.Item,{href:"#",onClick:a},"Cerrar Sesi\xf3n")):l.a.createElement(s.b,{className:"nav-link",to:"login",activeClassName:"active"},"Iniciar Sesi\xf3n"))))},g=a(108),v=a(109),C=a(65),N=a(116),y=a(110),j=(a(62),function(e){return l.a.createElement("div",{className:"fg",style:{height:60}},l.a.createElement("input",{type:e.type,placeholder:" ",onChange:e.onChange,defaultValue:e.value}),l.a.createElement("label",null,e.label))}),x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),b=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),x=p[0],w=p[1],O=Object(n.useState)({nombre:"",ubicacion:"",mail:""}),k=Object(u.a)(O,2),S=k[0],I=k[1];function L(e,t){S[t]=e.target.value}function U(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/clientes",{withCredentials:!0}).then((function(e){c(e.data),m(e.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){U()}),[]),l.a.createElement(g.a,{className:"mt-3"},b||x?l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){b?f(!1):x&&w(!1)}},"Volver")),l.a.createElement(C.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Cliente")),l.a.createElement(C.a,{xs:3,md:2}))))),l.a.createElement(N.a,{className:"py-4"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Nombre",value:S.nombre,onChange:function(e){return L(e,"nombre")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Ubicacion",value:S.ubicacion,onChange:function(e){return L(e,"ubicacion")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Correo electr\xf3nico",value:S.mail,onChange:function(e){return L(e,"mail")}}))),l.a.createElement(v.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){b?E.a.post("http://localhost:8000/api/clientes",S).then((function(e){console.log(e),f(!1),U()})):x&&E.a.patch("http://localhost:8000/api/clientes/"+S.id,S).then((function(e){console.log(e),w(!1),U()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){I({nombre:"",ubicacion:"",mail:""}),f(!0)}},"Agregar")),l.a.createElement(C.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(C.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(y.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Direcci\xf3n"),l.a.createElement("th",{width:"40%"},"Email"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){I(a[e]),w(!b)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Ubicaci\xf3n"),e.ubicacion),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Email"),e.mail))}))))))))},w=a(10),O=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),a=t[0],c=(t[1],h()),r=c.login,o=c.loginError;return l.a.createElement(N.a,{className:"login"},l.a.createElement("h5",{style:{textAlign:"center",marginBottom:30}},"Iniciar Sesi\xf3n"),l.a.createElement(j,{label:"Nombre de Usuario",type:"text",id:"usuario",onChange:function(e){return i(e,"email")}}),l.a.createElement(j,{label:"Contrase\xf1a",type:"password",id:"password",onChange:function(e){return i(e,"password")}}),null!=o&&l.a.createElement("p",{style:{fontSize:"13px",color:"#f92a2a",transition:".5s"}},o),l.a.createElement("button",{onClick:function(e){return r(a)},style:{marginTop:40}},"Iniciar"));function i(e,t){a[t]=e.target.value}},k=a(69),S=function(e){var t=e.component,a=e.auth,n=e.redirectTo,c=Object(k.a)(e,["component","auth","redirectTo"]);return l.a.createElement(w.b,Object.assign({},c,{render:function(e){return!0===a?l.a.createElement(t,e):l.a.createElement(w.a,{to:n})}}))},I=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),b=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),x=p[0],w=p[1],O=Object(n.useState)({nombre:"",ubicacion:"",mail:""}),k=Object(u.a)(O,2),S=k[0],I=k[1];function L(e,t){S[t]=e.target.value}function U(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/clientes",{withCredentials:!0}).then((function(e){c(e.data),m(e.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){U()}),[]),l.a.createElement(g.a,{className:"mt-3"},b||x?l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){b?f(!1):x&&w(!1)}},"Volver")),l.a.createElement(C.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Cliente")),l.a.createElement(C.a,{xs:3,md:2}))))),l.a.createElement(N.a,{className:"py-4"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Nombre",value:S.nombre,onChange:function(e){return L(e,"nombre")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Ubicacion",value:S.ubicacion,onChange:function(e){return L(e,"ubicacion")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Correo electr\xf3nico",value:S.mail,onChange:function(e){return L(e,"mail")}}))),l.a.createElement(v.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){b?E.a.post("http://localhost:8000/api/clientes",S).then((function(e){console.log(e),f(!1),U()})):x&&E.a.put("http://localhost:8000/api/clientes",S).then((function(e){console.log(e),f(!1),U()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){I({nombre:"",ubicacion:"",mail:""}),f(!0)}},"Agregar")),l.a.createElement(C.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(C.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(y.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Direcci\xf3n"),l.a.createElement("th",{width:"40%"},"Email"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){I(a[e]),w(!b)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Ubicaci\xf3n"),e.ubicacion),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Email"),e.mail))}))))))))},L=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),b=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),x=p[0],w=p[1],O=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:""}),k=Object(u.a)(O,2),S=k[0],I=k[1];function L(e,t){S[t]=e.target.value}function U(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/insumos",{withCredentials:!0}).then((function(e){console.log(e),c(e.data.data),m(e.data.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){U()}),[]),l.a.createElement(g.a,{className:"mt-3"},b||x?l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){b?f(!1):x&&w(!1)}},"Volver")),l.a.createElement(C.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Insumo")),l.a.createElement(C.a,{xs:3,md:2}))))),l.a.createElement(N.a,{className:"py-4"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Nombre",value:S.nombre,onChange:function(e){return L(e,"nombre")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Existencia",value:S.cantidad,onChange:function(e){return L(e,"cantidad")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"($)Costo/Unidad",value:S.costo,onChange:function(e){return L(e,"costo")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Unidad",value:S.unidad,onChange:function(e){return L(e,"unidad")}}))),l.a.createElement(v.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){b?E.a.post("http://localhost:8000/api/insumos",S).then((function(e){console.log(e),f(!1),U()})):x&&E.a.patch("http://localhost:8000/api/insumos/"+S.insumoId,S).then((function(e){console.log(e),w(!1),U()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){I({nombre:"",ubicacion:"",mail:""}),f(!0)}},"Agregar")),l.a.createElement(C.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(C.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(y.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Cantidad"),l.a.createElement("th",{width:"40%"},"Costo/Unidad"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){I(a[e]),w(!b)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Cantidad"),e.cantidad),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Costo/Unidad"),"$",e.costo))}))))))))},U=a(111),A=a(112),T=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)([]),d=Object(u.a)(s,2),b=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),x=p[0],w=p[1],O=Object(n.useState)(!1),k=Object(u.a)(O,2),S=k[0],I=k[1],L=Object(n.useState)(!1),T=Object(u.a)(L,2),V=T[0],F=T[1],B=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),P=Object(u.a)(B,2),G=P[0],_=P[1],q=Object(n.useState)(!1),H=Object(u.a)(q,2),$=H[0],z=H[1],D=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),J=Object(u.a)(D,2),R=J[0],W=J[1],M=Object(n.useState)(null),K=Object(u.a)(M,2),Q=K[0],X=K[1],Y=Object(n.useState)(0),Z=Object(u.a)(Y,2),ee=Z[0],te=Z[1],ae=function(){return z(!1)},ne=function(){return F(!1)};function le(e){_(a[e]),console.log(a[e]),I(!x)}function ce(e,t){G[t]=e.target.value}function re(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/productos",{withCredentials:!0}).then((function(e){c(e.data.data),m(e.data.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/insumos",{withCredentials:!0}).then((function(e){f(e.data.data)})).catch((function(e){console.log(e)})),re()}),[]),l.a.createElement(g.a,{className:"mt-3"},l.a.createElement(U.a,{show:V,onHide:ne},l.a.createElement(U.a.Header,{className:"d-block"},l.a.createElement(U.a.Title,{className:"text-center"},"Agregar Insumos")),l.a.createElement(U.a.Body,null,l.a.createElement(A.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(A.a.Label,null,"Insumos"),l.a.createElement(A.a.Control,{as:"select",defaultValue:"0",onChange:function(e){return function(e){var t=b.filter((function(t){return t.insumoId==e}));null!=t&&X(t[0])}(e.target.value)}},l.a.createElement("option",{value:"0",disabled:!0},"Seleccione un insumo"),b.map((function(e,t){return l.a.createElement("option",{key:t,value:e.insumoId},e.nombre)})))),l.a.createElement("div",{className:"fg",style:{height:60}},l.a.createElement("input",{type:"number",placeholder:" ",style:{width:"100%"},onChange:function(e){return t=e.target.value,void(null!=Q&&te(t));var t}}),l.a.createElement("label",null,"Cantidad")),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{onClick:function(e){return function(){if(null!=Q&&null!=ee){var e=Q;e.cantidadUsada=Number(ee),e.insumo_insumoId=e.insumoId,e.precioVenta=Number(e.precioVenta),e.pivot={cantidadUsada:ee,insumo_insumoId:e.insumo_insumoId},G.insumos.push(e),ne()}}()}},"Agregar")))),l.a.createElement(U.a,{show:$,onHide:ae},l.a.createElement(U.a.Header,{className:"d-block"},l.a.createElement(U.a.Title,{className:"text-center"},"Insumos de ",R.nombre)),l.a.createElement(U.a.Body,{style:{paddingLeft:"0",paddingRight:"0"}},l.a.createElement("div",{className:"itemProducto"},R.insumos.map((function(e,t){return l.a.createElement("div",{key:t,className:"text-center"},e.nombre," ",l.a.createElement("strong",null,"|")," Cantidad utilizada:",e.pivot.cantidadUsada)}))),l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("button",{onClick:ae},"Cerrar")))),x||S?l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){x?w(!1):S&&I(!1)}},"Volver")),l.a.createElement(C.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,x?l.a.createElement("div",null,"Nuevo Producto"):l.a.createElement("div",null,"Editar Producto"))),l.a.createElement(C.a,{xs:3,md:2}))))),l.a.createElement(N.a,{className:"py-4"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Nombre",value:G.nombre,onChange:function(e){return ce(e,"nombre")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Existencia",value:G.cantidad,onChange:function(e){return ce(e,"cantidad")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Precio de venta",value:G.precioVenta,onChange:function(e){return ce(e,"precioVenta")}})),l.a.createElement(C.a,{className:" d-flex justify-content-center"},l.a.createElement(j,{type:"text",label:"Unidad",value:G.unidad,onChange:function(e){return ce(e,"unidad")}}))),l.a.createElement(v.a,{className:"mt-3"},l.a.createElement(C.a,{className:"justify-content-center text-right"},l.a.createElement("h5",null,"Insumos")),l.a.createElement(C.a,{style:{alignSelf:"center"}},l.a.createElement("button",{className:"compact",onClick:function(){return F(!0)}},"Agregar"))),l.a.createElement(v.a,null,G.insumos?l.a.createElement(C.a,{className:"itemProducto"},G.insumos.map((function(e,t){return l.a.createElement("div",{key:t,className:"text-center"},e.nombre," ",l.a.createElement("strong",null,"|")," Cantidad utilizada:",e.pivot.cantidadUsada)}))):l.a.createElement(C.a,{className:"text-center py-5"},l.a.createElement("div",null,"No hay insumos cargados"))),l.a.createElement(v.a,{className:"justify-content-center mt-5"},l.a.createElement("button",{onClick:function(){if(x){var e=[];(t=G).insumos.forEach((function(t){e.push({insumo_insumoId:t.insumoId,cantidadUsada:t.cantidadUsada})})),t.insumos=e,E.a.post("http://localhost:8000/api/productos",t).then((function(e){w(!1),re()}))}else if(S){var t;e=[];(t=G).insumos.forEach((function(t){e.push({insumo_insumoId:t.pivot.insumo_insumoId,cantidadUsada:t.pivot.cantidadUsada})})),t.insumos=e,E.a.patch("http://localhost:8000/api/productos/"+G.productoId,t).then((function(e){console.log(e),I(!1),re()}))}}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(v.a,{className:"mb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(v.a,null,l.a.createElement(C.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){_({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),w(!0)}},"Agregar")),l.a.createElement(C.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(C.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(v.a,null,l.a.createElement(C.a,null,l.a.createElement(y.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"30%"},"Existencia"),l.a.createElement("th",{width:"30%"},"Precio de Venta"),l.a.createElement("th",{width:"20%"}))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{onClick:function(e){return le(t)}},l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",{onClick:function(e){return le(t)}},l.a.createElement("div",{className:"td-tag"},"Existencia"),e.cantidad),l.a.createElement("td",{onClick:function(e){return le(t)}},l.a.createElement("div",{className:"td-tag"},"Precio de venta"),"$",e.precioVenta+"/"+e.unidad),l.a.createElement("td",null,l.a.createElement("button",{className:"borderless",onClick:function(t){return W(e),void z(!0)}},"Ver insumos")))}))))))))},V=function(){return l.a.createElement(g.a,null,l.a.createElement(N.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:"text-center"},l.a.createElement("h4",null,"Bienvenido!"))),l.a.createElement(v.a,{className:"text-center"},l.a.createElement(C.a,null,l.a.createElement("button",null,"Iniciar Sesion")))))},F=function(){return l.a.createElement(g.a,null,l.a.createElement(N.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:"text-center"},l.a.createElement("h5",null,"Alerta de insumos"))),l.a.createElement(v.a,{className:"text-center"})),l.a.createElement(N.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(v.a,null,l.a.createElement(C.a,{className:"text-center"},l.a.createElement("h5",null,"Balance cuenta corriente"))),l.a.createElement(v.a,{className:"text-center"})))},B=function(){return l.a.createElement(f,null,l.a.createElement(P,null))};function P(){var e=h().usuario;return l.a.createElement(s.a,null,l.a.createElement(p,null),l.a.createElement(w.d,null,l.a.createElement(S,{component:O,path:"/login",redirectTo:"/",auth:null==e}),l.a.createElement(S,{component:x,path:"/Clientes",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:I,path:"/Ventas",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:x,path:"/Stock",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:L,path:"/Insumos",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:T,path:"/Stock",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:F,path:"/inicio",redirectTo:"/login",auth:null!=e}),l.a.createElement(S,{component:V,path:"/",redirectTo:"/inicio",auth:null==e})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);r.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){},71:function(e,t,a){e.exports=a(103)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.4c51a635.chunk.js.map