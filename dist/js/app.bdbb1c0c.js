(function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],d=0,u=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},i={app:0},o={app:0},n=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"94b7e92a"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"190d99eb"}[e]+".css",o=s.p+a,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=n[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===a||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=a,delete i[e],b.parentNode.removeChild(b),r(n)},b.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=n);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=l(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(b);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}o[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var b=d;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"3a3a":function(e,t,r){"use strict";r("fdea")},4360:function(e,t,r){"use strict";var a=r("1da1"),i=(r("96cf"),r("d3b7"),r("2b0e")),o=r("2f62");i["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{territorios:[]},mutations:{pushTerritorio:function(e,t){e.territorios.push(t)}},actions:{registrarTerritorio:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function r(){var a,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,console.log("objterritorio.. "+t),r.next=4,fetch("http://localhost:3000/territory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return i=r.sent,r.next=7,i.json();case 7:o=r.sent,a("pushTerritorio",o),console.log(o);case 10:case"end":return r.stop()}}),r)})))()}},modules:{}})},"452c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("div",[r("b-navbar",{staticStyle:{background:"#DEC0C0"},attrs:{toggleable:"lg",type:"light"}},[r("b-container",[r("b-navbar-brand",{staticClass:"tituloRuralParcel",attrs:{to:"/"}},[e._v("RuralParcel")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/about"}},[e._v("Registrar Terreno")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-form",[r("b-form-input",{attrs:{placeholder:"Buscar nuevos terrenos"}})],1),r("b-button",{staticClass:"my-2 my-sm-0",staticStyle:{margin:"3%"},attrs:{size:"sm",type:"submit"}},[e._v("Buscar")])],1)],1)],1)],1)],1)]),r("router-view")],1)},o=[],n=(r("b6b8"),r("b0a0"),r("2877")),l={},s=Object(n["a"])(l,i,o,!1,null,"23b6ebf4",null),c=s.exports,d=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",[r("b-container",[r("b-card-group",[r("b-card",{staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 1","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 1")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 1")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 1")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 1")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 1")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 1")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-1-editar",modifiers:{"terreno-1-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-1-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-6-eliminar",modifiers:{"terreno-6-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-6-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1),r("b-card",{staticClass:" ",staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 2","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 2")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 2")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 2")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 2")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 2")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 2")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-2-editar",modifiers:{"terreno-2-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-2-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-2-eliminar",modifiers:{"terreno-2-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-2-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1),r("b-card",{staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 3","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 3")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 3")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 3")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 3")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 3")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 3")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-3-editar",modifiers:{"terreno-3-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-3-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-3-eliminar",modifiers:{"terreno-3-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-3-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1)],1),r("b-card-group",[r("b-card",{staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 4","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 4")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 4")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 4")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 4")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 4")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 4")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-4-editar",modifiers:{"terreno-4-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-4-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-4-eliminar",modifiers:{"terreno-4-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-4-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1),r("b-card",{staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 5","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 5")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 5")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 5")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 5")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 5")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 5")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-5-editar",modifiers:{"terreno-5-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-5-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-5-eliminar",modifiers:{"terreno-5-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-5-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1),r("b-card",{staticStyle:{"max-width":"20rem",margin:"2%"},attrs:{title:"Terreno 6","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",{staticClass:"txtMargin"},[e._v("Terreno 6")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Dueño 6")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Hectareas 6")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Ubicación 6")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Descripción 6")]),r("b-card-text",{staticClass:"txtMargin"},[e._v("Sistema de riego 6")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-6-editar",modifiers:{"terreno-6-editar":!0}}],staticClass:"botonCard",attrs:{variant:"primary"}},[e._v("Editar")]),r("b-modal",{attrs:{id:"terreno-6-editar",title:"Actualizar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v(" Registrar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("div",[e.show?r("b-form",[r("b-form-group",{attrs:{id:"input-group-1",label:"Cantidad de hectáreas","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Digite la cantidad de hectáreas",required:""},model:{value:e.form.nameCantidaHectareas,callback:function(t){e.$set(e.form,"nameCantidaHectareas",t)},expression:"form.nameCantidaHectareas"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Ubicación del terreno","label-for":"input-2"}},[r("b-form-select",{attrs:{id:"input-group-2",options:e.ubicacionTerreno,placeholder:"Seleccione la ubicación de terreno",required:""},model:{value:e.form.ubicacionTerreno,callback:function(t){e.$set(e.form,"ubicacionTerreno",t)},expression:"form.ubicacionTerreno"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Nombre del dueño de la tierra","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",placeholder:"Digite el nombre del dueño de la tierra",required:""},model:{value:e.form.nombreDuenio,callback:function(t){e.$set(e.form,"nombreDuenio",t)},expression:"form.nombreDuenio"}})],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Sistema de riego:","label-for":"input-4"}},[r("b-form-select",{attrs:{id:"input-4",options:e.sistemaRiego,required:""},model:{value:e.form.sistemaRiego,callback:function(t){e.$set(e.form,"sistemaRiego",t)},expression:"form.sistemaRiego"}})],1),r("b-form-group",{attrs:{id:"input-group-5",label:"Especificacioens del terreno:","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Digite las especificaciones del terreno...",rows:"3","max-rows":"10"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),r("b-form-group",{attrs:{id:"input-group-6",label:"Seleccione las imagenes de su terreno:","label-for":"input-6"}},[r("b-form-file",{attrs:{state:Boolean(e.file1),placeholder:"Seleccione las imagenes"},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}})],1),r("b-form-group",{attrs:{id:"input-group-7",label:"Disponibilidad del terreno:","label-for":"input-7"}},[r("b-form-select",{staticStyle:{"margin-bottom":"-10%"},attrs:{id:"input-7",options:e.dispobilidadTerreno,required:""},model:{value:e.form.dispobilidadTerreno,callback:function(t){e.$set(e.form,"dispobilidadTerreno",t)},expression:"form.dispobilidadTerreno"}})],1)],1):e._e()],1)]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.terreno-6-eliminar",modifiers:{"terreno-6-eliminar":!0}}],staticClass:"botonCard",attrs:{variant:"danger"}},[e._v("Eliminar")]),r("b-modal",{attrs:{id:"terreno-6-eliminar",title:"Eliminar Terreno"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok,i=t.cancel;return[r("b-button",{staticClass:"botonModal",attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v(" Eliminar ")]),r("b-button",{staticClass:"botonModal",attrs:{variant:"primary"},on:{click:function(e){return i()}}},[e._v(" Cancelar ")])]}}])},[r("p",{staticClass:"my-4"},[e._v("¿Desea eliminar el terreno seleccionado?")])])],1)],1)],1)],1)])},b=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"})},p=[],f={name:"HelloWorld",props:{msg:String}},g=f,v=(r("bc62"),Object(n["a"])(g,m,p,!1,null,"45b13b30",null)),x=v.exports,C={name:"Home",components:{HelloWorld:x},data:function(){return{form:{nameCantidaHectareas:"",ubicacionTerreno:null,nombreDuenio:"",sistemaRiego:null,text:"",file1:null,dispobilidadTerreno:null},sistemaRiego:[{text:"Seleccione el sistema de riego",value:null},"Goteo","Gravedad","Bombeo","Aspersión"],ubicacionTerreno:[{text:"Seleccione la ubicación del terreno",value:null},"Ubicación 1","Ubicación 2","Ubicación 3","Ubicación 4"],dispobilidadTerreno:[{text:"Seleccione la disponibilidad del terreno",value:null},"Ocupado","Libre"],show:!0}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.nameCantidaHectareas="",this.ubicacionTerreno=null,this.nombreDuenio="",this.sistemaRiego=null,this.text="",this.file1=null,this.dispobilidadTerreno=null,this.show=!1,this.$nextTick((function(){t.show=!0}))}}},h=C,_=(r("3a3a"),Object(n["a"])(h,u,b,!1,null,"4b8b89a3",null)),k=_.exports;a["default"].use(d["a"]);var T=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],y=new d["a"]({mode:"history",base:"/",routes:T}),S=y,D=r("4360"),M=r("5f5b"),w=r("b1e0"),E=r("a7e2"),R=r("1f1a"),$=r("8c60"),q=r("498a"),H=r("0025"),N=r("dbbe");r("f9e3"),r("2dd8");a["default"].use(M["a"]),a["default"].use(w["a"]),a["default"].use(E["a"]),a["default"].use(R["a"]),a["default"].use($["a"]),a["default"].use(q["a"]),a["default"].use(H["a"]),a["default"].use(N["a"]),a["default"].config.productionTip=!1,new a["default"]({router:S,store:D["a"],render:function(e){return e(c)}}).$mount("#app")},8823:function(e,t,r){},a0ba:function(e,t,r){},b0a0:function(e,t,r){"use strict";r("452c")},b6b8:function(e,t,r){"use strict";r("a0ba")},bc62:function(e,t,r){"use strict";r("8823")},fdea:function(e,t,r){}});
//# sourceMappingURL=app.bdbb1c0c.js.map