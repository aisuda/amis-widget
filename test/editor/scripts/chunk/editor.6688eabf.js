/*! For license information please see editor.6688eabf.js.LICENSE.txt */
!function(){var e,t,n,s,r,a={65906:function(e,t,n){"use strict";var s=n(51721),r=n(67294),a=n(73935),o=n(73064),i=(n(94734),n(11173)),c=(n(36475),n(55389),n(49058),n(20208),n(1883),{type:"page",title:"Simple Form Page",body:[{type:"form",body:[{type:"input-text",name:"a",label:"Text"}]}]}),d=[],l=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).state={preview:!1,mobile:!1,schema:c},t.handleChange=function(e){t.setState({schema:e})},t.togglePreview=function(){t.setState({preview:!t.state.preview})},t.handleMobile=function(e){t.setState({mobile:e})},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.preview,s=t.mobile;return r.createElement("div",{className:"Editor-Demo"},r.createElement("div",{className:"Editor-header"},r.createElement("div",{className:"Editor-title"},"amis 可视化编辑器"),r.createElement("div",{className:"Editor-view-mode-group-container"},r.createElement("div",{className:"Editor-view-mode-group"},r.createElement("div",{className:"Editor-view-mode-btn "+(s?"":"is-active"),onClick:function(){e.handleMobile(!1)}},"PC"),r.createElement("div",{className:"Editor-view-mode-btn "+(s?"is-active":""),onClick:function(){e.handleMobile(!0)}},"移动"))),r.createElement("div",{className:"Editor-header-actions"},r.createElement("div",{className:"header-action-btn margin-left-space "+(n?"primary":""),onClick:function(){e.togglePreview()}},n?"编辑":"预览"))),r.createElement("div",{className:"Editor-inner"},r.createElement(o.Editor,{isMobile:s,preview:n,value:this.state.schema,onChange:this.handleChange,theme:"cxd",$schemaUrl:""+(0,i.__uri)("amis/schema.json"),plugins:d})))},t}(r.Component);a.render(r.createElement(l,null),document.getElementById("root"))},58087:function(){},86449:function(){},38544:function(){},46700:function(e,t,n){var s={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=46700},49058:function(e,t,n){var s=n(86449);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(45346).Z)("1be8bd12",s,!1,{sourceMap:!1})},20208:function(e,t,n){var s=n(38544);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(45346).Z)("4a08ee5b",s,!1,{sourceMap:!1})},1883:function(e,t,n){var s=n(58087);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),(0,n(45346).Z)("63086a6f",s,!1,{sourceMap:!1})}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=a,i.amdO={},e=[],i.O=function(t,n,s,r){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],r=e[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[c])}))?n.splice(c--,1):(o=!1,r<a&&(a=r));if(o){e.splice(l--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,s,r]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"scripts/chunk/"+e+"."+{38:"7c9746e4",180:"0b97f141",249:"f69ef38a",365:"e442fdb3",525:"eb7b5f06",665:"5462a51c",790:"9d55aa36",848:"8fdb2385",854:"ca0b37df",911:"2d9c95ff",996:"8c7d4a23",1065:"7ba9e527",1134:"9ad60918",1147:"ba02605f",1156:"949c5f49",1259:"cca4ba93",1448:"17da51a5",1471:"2d3dfdfd",1848:"35ae0d98",1886:"f6a09e0e",1960:"b09cc12a",1961:"12a1fb91",2016:"edb433d9",2060:"8bec0162",2075:"fb71e84c",2140:"9cf09af3",2240:"ef343537",2527:"723f0e6f",2571:"b12a454e",2798:"bec89db8",2814:"38fecd71",2892:"d4d0982b",2911:"9311d04e",2954:"34c6d0cd",3036:"160203dc",3585:"0595b550",3632:"ba99a89a",3682:"14db8053",3760:"20837218",3919:"87bda1fb",4028:"75aebb4a",4129:"faa5b2da",4188:"a19f67ee",4295:"a0d97bfb",4368:"390f0b89",4386:"1eb7410d",4407:"b2be808d",4631:"b4e63d04",4902:"56dec14c",4912:"e43211a4",4946:"0e8f477e",5062:"00c02397",5288:"7b4aeffc",5294:"dadf200c",5377:"afacd861",5593:"4a0f0346",5703:"6346a1a4",5849:"1d2336b9",5962:"eeda9acd",6082:"1636f1c7",6241:"d4e41e6a",6300:"66ef880d",6424:"9259cb90",6449:"94fb8a24",6489:"148dc10f",6531:"ed0da501",6587:"45e1d678",6717:"cef60987",6758:"0dfa56bd",6876:"4cb23381",7043:"b265717c",7093:"5db7e3e8",7131:"2d2166fa",7287:"bfe672e7",7460:"c8600385",7562:"65b84f74",7631:"df46d7e5",7637:"0cf9d494",7778:"b206d15f",7835:"13c14f19",7889:"5747e32c",8070:"d32a33c8",8084:"ee84dd7c",8180:"a9242825",8401:"de74feab",8424:"bde430d6",8448:"6a764963",8670:"7629bce5",8715:"c68a4214",8719:"a03f51f7",8906:"c39de15f",8946:"26b58326",9182:"e6cfb26c",9284:"3af655c2",9343:"ffd622ce",9398:"46aa044c",9400:"9780a644",9537:"be539f47",9684:"38cee9ec",9907:"72b6176e"}[e]+".js"},i.miniCssF=function(e){return"css/"+e+"."+{1848:"0ea675cd",7889:"11f90910",9182:"fe15e0c4"}[e]+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="amis-widget:",i.l=function(e,s,r,a){if(t[e])t[e].push(s);else{var o,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var f=d[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+r){o=f;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.setAttribute("data-webpack",n+r),o.src=e),t[e]=[s];var u=function(n,s){o.onerror=o.onload=null,clearTimeout(j);var r=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(s)})),n)return n(s)},j=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),c&&document.head.appendChild(o)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="https://aisuda.github.io/amis-widget/test/editor/",s=function(e){return new Promise((function(t,n){var s=i.miniCssF(e),r=i.p+s;if(function(e,t){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var r=(o=n[s]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){var o;if((r=(o=a[s]).getAttribute("data-href"))===e||r===t)return o}}(s,r))return t();!function(e,t,n,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=function(a){if(r.onerror=r.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=i,r.parentNode.removeChild(r),s(c)}},r.href=t,document.head.appendChild(r)}(e,r,t,n)}))},r={1189:0},i.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{1848:1,7889:1,9182:1}[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={1189:0};i.f.j=function(t,n){var s=i.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(n,r){s=e[t]=[n,r]}));n.push(s[2]=r);var a=i.p+i.u(t),o=new Error;i.l(a,(function(n){if(i.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,s[1](o)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,a=n[0],o=n[1],c=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(c)var l=c(i)}for(t&&t(n);d<a.length;d++)r=a[d],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(l)},n=self.webpackChunkamis_widget=self.webpackChunkamis_widget||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=i.O(void 0,[4736],(function(){return i(65906)}));c=i.O(c)}();