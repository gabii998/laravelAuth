(this.webpackJsonpgestion=this.webpackJsonpgestion||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),o=(a(76),a(77),a(114)),i=a(115),m=a(113),s=a(29),u=a(6),d=a(8),E=a.n(d),b={baseUrl:"https://ascurra-soluciones.com",baseApiUrl:"https://ascurra-soluciones.com/api"},f=l.a.createContext();function h(e){var t=Object(n.useState)(localStorage.getItem("usuario")),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),i=Object(u.a)(o,2),m=i[0],s=i[1];Object(n.useEffect)((function(){r(localStorage.getItem("usuario"))}),[]);var d=function(e){E.a.defaults.withCredentials=!0,E.a.get(b.baseUrl+"/sanctum/csrf-cookie",{withCredentials:!0}).then((function(t){!function(e){E.a.post(b.baseApiUrl+"/login",e,{withCredentials:!0}).then((function(e){r(e.data.email),localStorage.setItem("usuario",e.data.email),s(null)})).catch((function(e){}))}(e)})).catch((function(e){}))};function h(){r(null),localStorage.removeItem("usuario")}var p=Object(n.useMemo)((function(){return{usuario:c,login:d,logout:h,loginError:m}}),[c,m]);return l.a.createElement(f.Provider,Object.assign({value:p},e))}function p(){var e=l.a.useContext(f);if(!e)throw new Error("useUsuario no puede ser nulo");return e}var g=function(){var e=p(),t=e.usuario,a=e.logout,n=[{nombre:"Clientes",path:"/Clientes"},{nombre:"Stock",path:"/Stock"},{nombre:"Insumos",path:"/Insumos"}].map((function(e){return l.a.createElement(s.b,{key:e.path,className:"nav-link",to:e.path,activeClassName:"active"},e.nombre)}));return l.a.createElement(o.a,{expand:"lg"},l.a.createElement(o.a.Brand,{href:"#home"},"Gesti\xf3n"),l.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(i.a,{className:"mr-auto"},null!=t&&n),l.a.createElement(i.a,{className:"ml-auto"},null!=t?l.a.createElement(m.a,{alignRight:!0,title:t,id:"collasible-nav-dropdown"},l.a.createElement(m.a.Item,{href:"#action/3.3"},"Ajustes"),l.a.createElement(m.a.Divider,null),l.a.createElement(m.a.Item,{href:"#",onClick:a},"Cerrar Sesi\xf3n")):l.a.createElement(s.b,{className:"nav-link",to:"login",activeClassName:"active"},"Iniciar Sesi\xf3n"))))},v=a(108),C=a(109),N=a(65),y=a(116),j=a(110),x=(a(62),function(e){return l.a.createElement("div",{className:"fg",style:{height:60}},l.a.createElement("input",{type:e.type,placeholder:" ",onChange:e.onChange,defaultValue:e.value}),l.a.createElement("label",null,e.label))}),w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),f=d[0],h=d[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),w=g[0],O=g[1],k=Object(n.useState)({nombre:"",ubicacion:"",mail:""}),S=Object(u.a)(k,2),I=S[0],U=S[1];function A(e,t){I[t]=e.target.value}function L(){E.a.defaults.withCredentials=!0,E.a.get(b.baseApiUrl+"/clientes",{withCredentials:!0}).then((function(e){c(e.data),m(e.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){L()}),[]),l.a.createElement(v.a,{className:"mt-3"},f||w?l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){f?h(!1):w&&O(!1)}},"Volver")),l.a.createElement(N.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Cliente")),l.a.createElement(N.a,{xs:3,md:2}))))),l.a.createElement(y.a,{className:"py-4"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Nombre",value:I.nombre,onChange:function(e){return A(e,"nombre")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Ubicacion",value:I.ubicacion,onChange:function(e){return A(e,"ubicacion")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Correo electr\xf3nico",value:I.mail,onChange:function(e){return A(e,"mail")}}))),l.a.createElement(C.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){f?E.a.post(b.baseApiUrl+"/clientes",I).then((function(e){console.log(e),h(!1),L()})):w&&E.a.patch(b.baseApiUrl+"/clientes/"+I.id,I).then((function(e){console.log(e),O(!1),L()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){U({nombre:"",ubicacion:"",mail:""}),h(!0)}},"Agregar")),l.a.createElement(N.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(N.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(j.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Direcci\xf3n"),l.a.createElement("th",{width:"40%"},"Email"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){U(a[e]),O(!f)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Ubicaci\xf3n"),e.ubicacion),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Email"),e.mail))}))))))))},O=a(10),k=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),a=t[0],c=(t[1],p()),r=c.login,o=c.loginError;return l.a.createElement(y.a,{className:"login"},l.a.createElement("h5",{style:{textAlign:"center",marginBottom:30}},"Iniciar Sesi\xf3n"),l.a.createElement(x,{label:"Nombre de Usuario",type:"text",id:"usuario",onChange:function(e){return i(e,"email")}}),l.a.createElement(x,{label:"Contrase\xf1a",type:"password",id:"password",onChange:function(e){return i(e,"password")}}),null!=o&&l.a.createElement("p",{style:{fontSize:"13px",color:"#f92a2a",transition:".5s"}},o),l.a.createElement("button",{onClick:function(e){return r(a)},style:{marginTop:40}},"Iniciar"));function i(e,t){a[t]=e.target.value}},S=a(69),I=function(e){var t=e.component,a=e.auth,n=e.redirectTo,c=Object(S.a)(e,["component","auth","redirectTo"]);return l.a.createElement(O.b,Object.assign({},c,{render:function(e){return!0===a?l.a.createElement(t,e):l.a.createElement(O.a,{to:n})}}))},U=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),b=d[0],f=d[1],h=Object(n.useState)(!1),p=Object(u.a)(h,2),g=p[0],w=p[1],O=Object(n.useState)({nombre:"",ubicacion:"",mail:""}),k=Object(u.a)(O,2),S=k[0],I=k[1];function U(e,t){S[t]=e.target.value}function A(){E.a.defaults.withCredentials=!0,E.a.get("http://localhost:8000/api/clientes",{withCredentials:!0}).then((function(e){c(e.data),m(e.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){A()}),[]),l.a.createElement(v.a,{className:"mt-3"},b||g?l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){b?f(!1):g&&w(!1)}},"Volver")),l.a.createElement(N.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Cliente")),l.a.createElement(N.a,{xs:3,md:2}))))),l.a.createElement(y.a,{className:"py-4"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Nombre",value:S.nombre,onChange:function(e){return U(e,"nombre")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Ubicacion",value:S.ubicacion,onChange:function(e){return U(e,"ubicacion")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Correo electr\xf3nico",value:S.mail,onChange:function(e){return U(e,"mail")}}))),l.a.createElement(C.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){b?E.a.post("http://localhost:8000/api/clientes",S).then((function(e){console.log(e),f(!1),A()})):g&&E.a.put("http://localhost:8000/api/clientes",S).then((function(e){console.log(e),f(!1),A()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){I({nombre:"",ubicacion:"",mail:""}),f(!0)}},"Agregar")),l.a.createElement(N.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(N.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(j.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Direcci\xf3n"),l.a.createElement("th",{width:"40%"},"Email"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){I(a[e]),w(!b)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Ubicaci\xf3n"),e.ubicacion),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Email"),e.mail))}))))))))},A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)(!1),d=Object(u.a)(s,2),f=d[0],h=d[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),w=g[0],O=g[1],k=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:""}),S=Object(u.a)(k,2),I=S[0],U=S[1];function A(e,t){I[t]=e.target.value}function L(){E.a.defaults.withCredentials=!0,E.a.get(b.baseApiUrl+"/insumos",{withCredentials:!0}).then((function(e){console.log(e),c(e.data.data),m(e.data.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){L()}),[]),l.a.createElement(v.a,{className:"mt-3"},f||w?l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){f?h(!1):w&&O(!1)}},"Volver")),l.a.createElement(N.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,"Nuevo Insumo")),l.a.createElement(N.a,{xs:3,md:2}))))),l.a.createElement(y.a,{className:"py-4"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Nombre",value:I.nombre,onChange:function(e){return A(e,"nombre")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Existencia",value:I.cantidad,onChange:function(e){return A(e,"cantidad")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"($)Costo/Unidad",value:I.costo,onChange:function(e){return A(e,"costo")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Unidad",value:I.unidad,onChange:function(e){return A(e,"unidad")}}))),l.a.createElement(C.a,{className:"justify-content-center mt-3"},l.a.createElement("button",{onClick:function(){f?E.a.post(b.baseApiUrl+"/insumos",I).then((function(e){console.log(e),h(!1),L()})):w&&E.a.patch(b.baseApiUrl+"/insumos/"+I.insumoId,I).then((function(e){console.log(e),O(!1),L()}))}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){U({nombre:"",ubicacion:"",mail:""}),h(!0)}},"Agregar")),l.a.createElement(N.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(N.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(j.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"40%"},"Cantidad"),l.a.createElement("th",{width:"40%"},"Costo/Unidad"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t,onClick:function(e){return function(e){U(a[e]),O(!f)}(t)}},l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Cantidad"),e.cantidad),l.a.createElement("td",null,l.a.createElement("div",{className:"td-tag"},"Costo/Unidad"),"$",e.costo))}))))))))},L=a(111),T=a(112),V=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(n.useState)([]),d=Object(u.a)(s,2),f=d[0],h=d[1],p=Object(n.useState)(!1),g=Object(u.a)(p,2),w=g[0],O=g[1],k=Object(n.useState)(!1),S=Object(u.a)(k,2),I=S[0],U=S[1],A=Object(n.useState)(!1),V=Object(u.a)(A,2),F=V[0],B=V[1],P=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),G=Object(u.a)(P,2),_=G[0],q=G[1],H=Object(n.useState)(!1),$=Object(u.a)(H,2),z=$[0],D=$[1],J=Object(n.useState)({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),R=Object(u.a)(J,2),W=R[0],M=R[1],K=Object(n.useState)(null),Q=Object(u.a)(K,2),X=Q[0],Y=Q[1],Z=Object(n.useState)(0),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ne=function(){return D(!1)},le=function(){return B(!1)};function ce(e){q(a[e]),console.log(a[e]),U(!w)}function re(e,t){_[t]=e.target.value}function oe(){E.a.defaults.withCredentials=!0,E.a.get(b.baseApiUrl+"/productos",{withCredentials:!0}).then((function(e){c(e.data.data),m(e.data.data)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){E.a.defaults.withCredentials=!0,E.a.get(b.baseApiUrl+"/insumos",{withCredentials:!0}).then((function(e){h(e.data.data)})).catch((function(e){console.log(e)})),oe()}),[]),l.a.createElement(v.a,{className:"mt-3"},l.a.createElement(L.a,{show:F,onHide:le},l.a.createElement(L.a.Header,{className:"d-block"},l.a.createElement(L.a.Title,{className:"text-center"},"Agregar Insumos")),l.a.createElement(L.a.Body,null,l.a.createElement(T.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(T.a.Label,null,"Insumos"),l.a.createElement(T.a.Control,{as:"select",defaultValue:"0",onChange:function(e){return function(e){var t=f.filter((function(t){return t.insumoId==e}));null!=t&&Y(t[0])}(e.target.value)}},l.a.createElement("option",{value:"0",disabled:!0},"Seleccione un insumo"),f.map((function(e,t){return l.a.createElement("option",{key:t,value:e.insumoId},e.nombre)})))),l.a.createElement("div",{className:"fg",style:{height:60}},l.a.createElement("input",{type:"number",placeholder:" ",style:{width:"100%"},onChange:function(e){return t=e.target.value,void(null!=X&&ae(t));var t}}),l.a.createElement("label",null,"Cantidad")),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{onClick:function(e){return function(){if(null!=X&&null!=te){var e=X;e.cantidadUsada=Number(te),e.insumo_insumoId=e.insumoId,e.precioVenta=Number(e.precioVenta),e.pivot={cantidadUsada:te,insumo_insumoId:e.insumo_insumoId},_.insumos.push(e),le()}}()}},"Agregar")))),l.a.createElement(L.a,{show:z,onHide:ne},l.a.createElement(L.a.Header,{className:"d-block"},l.a.createElement(L.a.Title,{className:"text-center"},"Insumos de ",W.nombre)),l.a.createElement(L.a.Body,{style:{paddingLeft:"0",paddingRight:"0"}},l.a.createElement("div",{className:"itemProducto"},W.insumos.map((function(e,t){return l.a.createElement("div",{key:t,className:"text-center"},e.nombre," ",l.a.createElement("strong",null,"|")," Cantidad utilizada:",e.pivot.cantidadUsada)}))),l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("button",{onClick:ne},"Cerrar")))),w||I?l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){w?O(!1):I&&U(!1)}},"Volver")),l.a.createElement(N.a,{xs:6,md:8,style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("h5",null,w?l.a.createElement("div",null,"Nuevo Producto"):l.a.createElement("div",null,"Editar Producto"))),l.a.createElement(N.a,{xs:3,md:2}))))),l.a.createElement(y.a,{className:"py-4"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Nombre",value:_.nombre,onChange:function(e){return re(e,"nombre")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Existencia",value:_.cantidad,onChange:function(e){return re(e,"cantidad")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Precio de venta",value:_.precioVenta,onChange:function(e){return re(e,"precioVenta")}})),l.a.createElement(N.a,{className:" d-flex justify-content-center"},l.a.createElement(x,{type:"text",label:"Unidad",value:_.unidad,onChange:function(e){return re(e,"unidad")}}))),l.a.createElement(C.a,{className:"mt-3"},l.a.createElement(N.a,{className:"justify-content-center text-right"},l.a.createElement("h5",null,"Insumos")),l.a.createElement(N.a,{style:{alignSelf:"center"}},l.a.createElement("button",{className:"compact",onClick:function(){return B(!0)}},"Agregar"))),l.a.createElement(C.a,null,_.insumos?l.a.createElement(N.a,{className:"itemProducto"},_.insumos.map((function(e,t){return l.a.createElement("div",{key:t,className:"text-center"},e.nombre," ",l.a.createElement("strong",null,"|")," Cantidad utilizada:",e.pivot.cantidadUsada)}))):l.a.createElement(N.a,{className:"text-center py-5"},l.a.createElement("div",null,"No hay insumos cargados"))),l.a.createElement(C.a,{className:"justify-content-center mt-5"},l.a.createElement("button",{onClick:function(){if(w){var e=[];(t=_).insumos.forEach((function(t){e.push({insumo_insumoId:t.insumoId,cantidadUsada:t.cantidadUsada})})),t.insumos=e,E.a.post(b.baseApiUrl+"/productos",t).then((function(e){O(!1),oe()}))}else if(I){var t;e=[];(t=_).insumos.forEach((function(t){e.push({insumo_insumoId:t.pivot.insumo_insumoId,cantidadUsada:t.pivot.cantidadUsada})})),t.insumos=e,E.a.patch(b.baseApiUrl+"/productos/"+_.productoId,t).then((function(e){console.log(e),U(!1),oe()}))}}},"Guardar")))):l.a.createElement(n.Fragment,null,l.a.createElement(C.a,{className:"mb-3"},l.a.createElement(N.a,null,l.a.createElement(y.a,{style:{display:"inline-block",width:"100%"}},l.a.createElement(C.a,null,l.a.createElement(N.a,{xs:3,md:2},l.a.createElement("button",{onClick:function(){q({nombre:"",cantidad:"",unidad:"",costo:0,insumos:[]}),O(!0)}},"Agregar")),l.a.createElement(N.a,{xs:9,md:8},l.a.createElement("input",{onChange:function(e){var t=e.target.value;c(i.filter((function(e){return e.nombre.toLowerCase().includes(t.toLowerCase())||e.ubicacion.toLowerCase().includes(t.toLowerCase())||e.mail.toLowerCase().includes(t.toLowerCase())})))},className:"search-field",placeholder:"Escribe lo que deseas buscar"})),l.a.createElement(N.a,{xs:0,md:2,style:{textAlign:"end"}}))))),l.a.createElement(C.a,null,l.a.createElement(N.a,null,l.a.createElement(j.a,{bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{width:"20%"},"Nombre"),l.a.createElement("th",{width:"30%"},"Existencia"),l.a.createElement("th",{width:"30%"},"Precio de Venta"),l.a.createElement("th",{width:"20%"}))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{onClick:function(e){return ce(t)}},l.a.createElement("div",{className:"td-tag"},"Nombre"),e.nombre),l.a.createElement("td",{onClick:function(e){return ce(t)}},l.a.createElement("div",{className:"td-tag"},"Existencia"),e.cantidad),l.a.createElement("td",{onClick:function(e){return ce(t)}},l.a.createElement("div",{className:"td-tag"},"Precio de venta"),"$",e.precioVenta+"/"+e.unidad),l.a.createElement("td",null,l.a.createElement("button",{className:"borderless",onClick:function(t){return M(e),void D(!0)}},"Ver insumos")))}))))))))},F=function(){return l.a.createElement(v.a,null,l.a.createElement(y.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:"text-center"},l.a.createElement("h4",null,"Bienvenido!"))),l.a.createElement(C.a,{className:"text-center"},l.a.createElement(N.a,null,l.a.createElement("button",null,"Iniciar Sesion")))))},B=function(){return l.a.createElement(v.a,null,l.a.createElement(y.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:"text-center"},l.a.createElement("h5",null,"Alerta de insumos"))),l.a.createElement(C.a,{className:"text-center"})),l.a.createElement(y.a,{className:"mt-5 pt-3 pb-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:"text-center"},l.a.createElement("h5",null,"Balance cuenta corriente"))),l.a.createElement(C.a,{className:"text-center"})))},P=function(){return l.a.createElement(h,null,l.a.createElement(G,null))};function G(){var e=p().usuario;return l.a.createElement(s.a,null,l.a.createElement(g,null),l.a.createElement(O.d,null,l.a.createElement(I,{component:k,path:"/login",redirectTo:"/",auth:null==e}),l.a.createElement(I,{component:w,path:"/Clientes",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:U,path:"/Ventas",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:w,path:"/Stock",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:A,path:"/Insumos",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:V,path:"/Stock",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:B,path:"/inicio",redirectTo:"/login",auth:null!=e}),l.a.createElement(I,{component:F,path:"/",redirectTo:"/inicio",auth:null==e})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);r.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){},71:function(e,t,a){e.exports=a(103)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.03a11a77.chunk.js.map