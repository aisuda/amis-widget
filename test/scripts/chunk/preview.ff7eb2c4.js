/*! For license information please see preview.ff7eb2c4.js.LICENSE.txt */
!function(){var e,t,n,r,a,s={96032:function(e,t,n){"use strict";n.d(t,{jX:function(){return d},k7:function(){return f}});var r=n(73064),a=n(26877),s=n(67294),i=(n(19755),n(73935)),o=n(20144);var c,l;function d(e,t){class n extends r.BasePlugin{constructor(e){super(e)}}if(Object.assign(n.prototype,new e),Object.assign(n.prototype,t),function(e){let t=!1;if(!e)return!1;const n=new e;return n.rendererName?n.name?n.description?!n.tags||Array.isArray(n.tags)&&0===n.tags.length?console.error("[amis-widget]自定义插件注册失败，自定义组件分类（tags）不能为空。"):n.panelTitle?(n.icon||Object.assign(e.prototype,{icon:"fa fa-file-code-o"}),(r=e.prototype)&&(r.rendererName&&r.rendererName.indexOf("")<0&&(r.rendererName=`-${r.rendererName}`),r.previewSchema&&r.previewSchema.type&&r.previewSchema.type.indexOf("")<0&&(r.previewSchema.type=`-${r.previewSchema.type}`),r.scaffold&&Array.isArray(r.scaffold)?r.scaffold.map((e=>(e.type.indexOf("")<0&&(e.type=`-${e.type}`),e))):r.scaffold&&r.scaffold.type&&r.scaffold.type.indexOf("")<0&&(r.scaffold.type=`-${r.scaffold.type}`)),t=!0):console.error("[amis-widget]自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。"):console.error("[amis-widget]自定义插件注册失败，自定义组件描述（description）不能为空。"):console.error("[amis-widget]自定义插件注册失败，自定义组件名称（name）不能为空。"):console.error("[amis-widget]自定义插件注册失败，关联渲染器（rendererName）不能为空。"),t;var r}(n)){Object.assign(n.prototype,{isNpmCustomWidget:!0});const e=n.prototype;(0,r.registerEditorPlugin)(n),window&&window.postMessage&&window.postMessage({type:"amis-widget-register-event",eventMsg:"[amis-widget]注册一个自定义amis-editor插件",editorPluginName:e.name},"*"),console.info("[amis-widget]注册了一个自定义amis-editor插件:",e)}return n}function u(e){if(e&&("function"==typeof e||"object"==typeof e)){class t extends s.Component{dom;instance;constructor(t){super(t),this.domRef=this.domRef.bind(this),this.instance="function"==typeof e?new e:e}componentDidMount(){const{onMount:e}=this.instance;e&&e.apply(this.instance,[this.props])}componentDidUpdate(e){const{onUpdate:t}=this.instance;t&&t.apply(this.instance,[this.props,e])}componentWillUnmount(){const{onUnmout:e}=this.instance;e&&e.apply(this.instance,this.props)}domRef(e){this.instance.$root=this.dom=e,this._render()}_render(){if(!this.dom)return;let e=this.instance.template;"string"==typeof e?this.dom.innerHTML=e:"function"==typeof e&&(this.dom.innerHTML=e(this.props))}render(){return s.createElement("div",{ref:this.domRef})}}return t}}function m(e){if(e&&("function"==typeof e||"object"==typeof e)){class t extends s.Component{domRef;vm;constructor(e){super(e),this.domRef=s.createRef(),this.resolveAmisProps=this.resolveAmisProps.bind(this),this.renderChild=this.renderChild.bind(this)}componentDidMount(){const{amisData:t,amisFunc:n}=this.resolveAmisProps(),{data:r,...s}=e="function"==typeof e?new e:e;this.vm=new o.Z({data:a.utils.extendObject(t,"function"==typeof r?r():r),...s}),Object.keys(n).forEach((e=>{this.vm.$props[e]=n[e],"render"===e&&(this.vm.$props.renderChild=(e,t,n)=>{this.renderChild(e,t,n)})})),this.domRef.current.appendChild(this.vm.$mount().$el)}renderChild(e,t,n){let r=null;if(this.props.render&&t&&n){const a=this.props.render(e,t);r=i.render(a,document.getElementById(n))}return r}componentDidUpdate(){Object.keys(this.props).forEach((e=>"function"!=typeof this.props[e]&&(this.vm[e]=this.props[e]))),this.vm.$forceUpdate()}componentWillUnmount(){this.vm.$destroy()}resolveAmisProps(){let e={},t={};return Object.keys(this.props).forEach((n=>{const r=this.props[n];"function"==typeof r?e[n]=r:t[n]=r})),{amisData:t,amisFunc:e}}render(){return s.createElement("div",{ref:this.domRef})}}return t}}function f(e,t){if(!e)return;const n={type:"",usage:c.renderer,weight:0,framework:l.react};var r;if(t&&(r=t,"String"===Object.prototype.toString.call(r).slice(8,-1))?Object.assign(n,{type:t}):Object.assign(n,t),n&&!n.type)console.error("[amis-widget]自定义组件注册失败，自定义组件类型（type）不能为空。");else{n.type=function(e){let t=e;return e?(e&&e.indexOf("")<0&&(t=`-${e}`),t):t}(n.type),n.framework=function(e){let t=l.react;if(!e)return t;let n=e.toLowerCase().trim();switch(n){case"jquery":case"jq":n=l.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":n=l.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":n=l.vue3,console.error("amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。");break;default:n=l.react}return n}(n.framework),n.usage=function(e){let t=c.renderer;if(!e)return t;let n=e.toLowerCase().trim();switch(n){case"renderer":case"renderers":default:n=c.renderer;break;case"formitem":case"form-item":case"form item":n=c.formitem;break;case"options":case"option":case"formoption":case"form-option":case"form option":n=c.options}return n}(n.usage);const t={renderer:a.Renderer,formitem:a.FormItem,options:a.OptionsControl},r={react:e=>e,vue2:m,vue3:m,jquery:u}[n.framework](e);t[n.usage]?(t[n.usage]({type:n.type,weight:n.weight})(r),console.info("注册了一个自定义amis组件:",{type:n.type,weight:n.weight,component:r,framework:n.framework,usage:n.usage})):console.error(`[amis-widget]自定义组件注册失败，不存在${n.usage}自定义组件类型。`)}}!function(e){e.renderer="renderer",e.formitem="formitem",e.options="options"}(c||(c={})),function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(l||(l={}))},18820:function(e,t,n){"use strict";var r=n(19755),a=n.n(r),s=n(96032),i=function(){function e(){this.template='\n    <div id="aaa">\n        这是个 jquery 按钮 <button id="btn">点我一下</button>\n    </div>'}var t=e.prototype;return t.onMount=function(e){a()("#btn").click(this.test.bind(this,e))},t.test=function(e){e.onAction(null,{actionType:"dialog",dialog:{title:"来个弹框",body:"Bom Bom Bom ${a} ${b}"}},{a:1,b:2})},e}();(0,s.k7)(i,{type:"hello-jquery",usage:"renderer",weight:98,framework:"jquery"})},12290:function(e,t,n){"use strict";(0,n(96032).jX)((function(){this.rendererName="hello-jquery",this.$schema="/schemas/UnkownSchema.json",this.name="hello-jquery",this.description="hello-jquery",this.tags=["自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"hello-jquery",label:"hello-jquery",name:"hello-jquery"},this.previewSchema={type:"hello-jquery",label:"hello-jquery"},this.panelTitle="配置面板",this.panelControls=[{type:"tpl",tpl:"可根据变量 \\${amisUser} 获取用户数据。"}]}),{rendererName:"hello-jquery",name:"hello-jquery",order:98,panelTitle:"配置面板",disabledRendererPlugin:!1})},87837:function(e,t,n){"use strict";var r=n(97326),a=n(94578),s=n(67294),i=(n(82748),function(e){function t(){var t;return(t=e.call(this)||this).agreeDataFormat=t.agreeDataFormat.bind((0,r.Z)(t)),t}(0,a.Z)(t,e);var n=t.prototype;return n.agreeDataFormat=function(e){return e&&e<=9999?e:e&&e>9999?Math.floor(e/1e3)/10+"w":void 0},n.render=function(){var e=this.props,t=e.title,n=e.backgroundImage,r=e.img_count,a=e.comment_count,i=n||"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg";return s.createElement("div",{className:"news-card"},s.createElement("div",{className:"news-title"},t||"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"),s.createElement("div",{className:"item-imgbox"},s.createElement("div",{className:"news-img",style:{backgroundImage:"url("+i+")"}}),r>0&&s.createElement("div",{className:"img-count"},r)),s.createElement("div",{className:"news-info"},s.createElement("div",{className:"left media-mark"},"爱速搭 · 低代码平台"),a&&a>0&&s.createElement("div",{className:"cmt-num right"},this.agreeDataFormat(a),"评")))},t}(s.PureComponent));(0,n(96032).k7)(i,{type:"react-info-card",usage:"renderer",weight:99,framework:"react"})},77520:function(e,t,n){"use strict";(0,n(96032).jX)((function(){this.rendererName="react-info-card",this.$schema="/schemas/UnkownSchema.json",this.name="react-info-card",this.description="信息展示卡片",this.tags=["展示","自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"react-info-card",label:"react-info-card",name:"react-info-card"},this.previewSchema={type:"react-info-card",label:"react-info-card"},this.panelTitle="配置",this.panelControls=[{type:"textarea",name:"title",label:"卡片title",value:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"},{type:"text",name:"backgroundImage",label:"展示图片",value:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"},{type:"input-number",name:"img_count",label:"图片数量",value:3},{type:"input-number",name:"comment_count",label:"评论数",value:2021}]}),{rendererName:"react-info-card",name:"react-info-card",order:99,disabledRendererPlugin:!1})},82569:function(e,t,n){"use strict";var r=n(96032),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{key:e.uuid,staticClass:"news-card"},[n("div",{staticClass:"news-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"item-imgbox"},[n("div",{staticClass:"news-img",style:{backgroundImage:"url("+e.backgroundImage+")"}}),e._v(" "),e.img_count>0?n("div",{staticClass:"img-count"},[e._v("\n      "+e._s(e.img_count)+"\n    ")]):e._e()]),e._v(" "),n("div",{staticClass:"news-info"},[n("div",{staticClass:"left media-mark"},[e._v("爱速搭 · 低代码平台")]),e._v(" "),e.comment_count&&0!=e.comment_count?n("div",{staticClass:"cmt-num right"},[e._v("\n      "+e._s(e.agreeDataFormat(e.comment_count))+"评\n    ")]):e._e()])])};a._withStripped=!0;var s={props:{title:{type:String,default:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"},backgroundImage:{type:String,default:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"},img_count:{type:Number,default:3},comment_count:{type:Number,default:2021}},data:function(){return{isAlive:!0,isFirstVisit:!0}},mounted:function(){this.isFirstVisit=!1},activated:function(){this.isAlive=!0},deactivated:function(){this.isAlive=!1},methods:{agreeDataFormat:function(e){return e&&e<=9999?e:e&&e>9999?Math.floor(e/1e3)/10+"w":void 0}}},i=(n(47087),(0,n(51900).Z)(s,a,[],!1,null,"9ba3b08e",null));i.options.__file="demo/vue-widget/info-card.vue";var o=i.exports;(0,r.k7)(o,{type:"vue-info-card",usage:"renderer",weight:99,framework:"vue"})},28063:function(e,t,n){"use strict";(0,n(96032).jX)((function(){this.rendererName="vue-info-card",this.$schema="/schemas/UnkownSchema.json",this.name="vue-info-card",this.description="信息展示卡片",this.tags=["展示","自定义"],this.icon="fa fa-file-code-o",this.scaffold={type:"vue-info-card",label:"vue-info-card",name:"vue-info-card"},this.previewSchema={type:"vue-info-card",label:"vue-info-card"},this.panelTitle="配置",this.panelControls=[{type:"textarea",name:"title",label:"卡片title",value:"amis 是一个低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。"},{type:"text",name:"backgroundImage",label:"展示图片",value:"https://search-operate.cdn.bcebos.com/64c279f23794a831f9a8e7a4e0b722dd.jpg"},{type:"input-number",name:"img_count",label:"图片数量",value:3},{type:"input-number",name:"comment_count",label:"评论数",value:2021}]}),{rendererName:"vue-info-card",name:"vue-info-card",order:99,disabledRendererPlugin:!1})},48677:function(e,t,n){"use strict";var r,a=n(94578),s=n(67294),i=n(73935),o=n(73064),c=(n(30394),n(11173),n(26877));function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var d;function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}(0,c.registerIcon)("pc-preview",(function(e){return s.createElement("svg",l({viewBox:"0 0 17 16",xmlns:"http://www.w3.org/2000/svg"},e),r||(r=s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{d:"M16.037 0h-16v16h16z"}),s.createElement("path",{d:"M6.037 14a.5.5 0 0 1-.09-.992l.09-.008h1.5v-1.5h-5.5a.5.5 0 0 1-.5-.5V2.542a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-.5.5h-5.5V13h1.5a.5.5 0 0 1 .09.992l-.09.008h-4Zm7.5-10.959h-11V10.5h11V3.041Z",fill:"currentColor"}))))})),(0,c.registerIcon)("h5-preview",(function(e){return s.createElement("svg",u({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e),d||(d=s.createElement("g",{fillRule:"nonzero",fill:"none"},s.createElement("path",{d:"M0 0h16v16H0z"}),s.createElement("path",{d:"M13 1.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5Zm-.5 1h-9v11h9v-11ZM9 11.66a.5.5 0 0 1 .09.992L9 12.66H7a.5.5 0 0 1-.09-.992L7 11.66h2Z",fill:"currentColor"}))))})),n(73350),n(78455),n(19809),n(54946),n(99658);var m={type:"page",title:"Simple Form Page",body:[{type:"form",body:[{type:"input-text",name:"a",label:"Text"}]}]},f=[],p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={preview:!!localStorage.getItem("editting_preview"),isMobile:!!localStorage.getItem("editting_preview_mobile"),schema:localStorage.getItem("editting_schema")?JSON.parse(localStorage.getItem("editting_schema")):m},t.handleChange=function(e){localStorage.setItem("editting_schema",JSON.stringify(e)),t.setState({schema:e})},t.onSave=function(){var e=t.state.schema;localStorage.setItem("editting_schema",JSON.stringify(e))},t.handlePreviewChange=function(e){localStorage.setItem("editting_preview",e?"true":""),t.setState({preview:!!e})},t.togglePreview=function(){t.handlePreviewChange(!t.state.preview)},t.handleMobileChange=function(e){localStorage.setItem("editting_preview_mobile",e?"true":""),t.setState({isMobile:!!e})},t.clearCache=function(){localStorage.removeItem("editting_schema"),t.setState({schema:m})},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.preview,r=t.isMobile,a=t.schema;return s.createElement("div",{className:"Editor-Demo"},s.createElement("div",{className:"Editor-header"},s.createElement("div",{className:"Editor-title"},"amis 可视化编辑器"),s.createElement("div",{className:"Editor-view-mode-group-container"},s.createElement("div",{className:"Editor-view-mode-group"},s.createElement("div",{className:"Editor-view-mode-btn "+(r?"":"is-active"),onClick:function(){e.handleMobileChange(!1)}},s.createElement(c.Icon,{icon:"pc-preview",title:"PC模式"})),s.createElement("div",{className:"Editor-view-mode-btn "+(r?"is-active":""),onClick:function(){e.handleMobileChange(!0)}},s.createElement(c.Icon,{icon:"h5-preview",title:"移动模式"})))),s.createElement("div",{className:"Editor-header-actions"},s.createElement("div",{className:"header-action-btn margin-left-space "+(n?"primary":""),onClick:function(){e.togglePreview()}},n?"编辑":"预览"))),s.createElement("div",{className:"Editor-inner"},s.createElement(o.Editor,{preview:n,isMobile:r,value:a,onChange:this.handleChange,onPreview:this.handlePreviewChange,onSave:this.onSave,className:"is-fixed",theme:"cxd",showCustomRenderersPanel:!0,plugins:f,$schemaUrl:location.protocol+"//"+location.host+"/schema.json"})))},t}(s.Component);i.render(s.createElement(p,null),document.getElementById("root"))},16098:function(){},7252:function(){},67483:function(){},56445:function(){},15586:function(){},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=46700},19809:function(e,t,n){var r=n(56445);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("357cdcb9",r,!1,{sourceMap:!1})},54946:function(e,t,n){var r=n(15586);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("57b0ccce",r,!1,{sourceMap:!1})},82748:function(e,t,n){var r=n(16098);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("610b7d08",r,!1,{sourceMap:!1})},99658:function(e,t,n){var r=n(7252);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("582b636f",r,!1,{sourceMap:!1})},47087:function(e,t,n){var r=n(67483);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(45346).Z)("679eaa70",r,!1,{sourceMap:!1})}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return s[e].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=s,o.amdO={},e=[],o.O=function(t,n,r,a){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return"scripts/chunk/"+e+"."+{38:"c23b7ceb",180:"32ba89af",249:"24220135",365:"e442fdb3",438:"5025345f",525:"eee218de",790:"9d55aa36",848:"420e5e87",854:"1686305c",911:"4025f202",996:"5c2734fb",1065:"646f12bf",1134:"43d27e5a",1147:"c34060c0",1156:"8b4edfd7",1205:"d10f1ecf",1259:"4989d5f0",1448:"83743703",1471:"9b6e46a7",1813:"2a69ac4a",1886:"a833e97e",1960:"1932970e",1961:"f711728f",1966:"cd27eef0",2016:"edb433d9",2060:"d472bbf3",2075:"1cd87e76",2140:"d4759fa2",2240:"efd6a076",2527:"723f0e6f",2571:"792998e6",2798:"a7ee1025",2814:"634a9fbe",2892:"c66e3796",2911:"9311d04e",2954:"40cad315",3036:"27720a97",3585:"19e56de1",3632:"9dbc6e0c",3682:"75892534",3760:"85012041",3919:"71856f47",4028:"32477880",4129:"1f2750e9",4188:"8b9d9bc8",4295:"a0d97bfb",4368:"928bfff6",4386:"62c22f9f",4407:"8ec152e0",4631:"0392a906",4902:"8f9e25a3",4912:"ae4aef3e",4946:"b2fddbaa",5062:"fdd724a5",5294:"dadf200c",5593:"53557e7b",5703:"6409c740",5849:"9400171c",5962:"7ec3d47e",6082:"f7673263",6241:"b2dc191e",6300:"c22e939f",6424:"db4c14df",6449:"55bccd02",6489:"55e002d9",6531:"d459e5c1",6558:"893d8abc",6587:"60977e37",6717:"268e7762",6758:"dfc38761",6876:"4cb23381",7043:"14769c8d",7093:"5db7e3e8",7131:"3a8f4b36",7287:"a40ef9f5",7460:"2ee0d0bd",7562:"2bde36b4",7631:"df46d7e5",7637:"7242d9fa",7778:"50c87671",7835:"43773d2a",7889:"9515fc4f",8070:"d15f1d0d",8084:"b736f6dc",8180:"ebcbbb52",8183:"28e9f7d4",8424:"c40be683",8448:"6a764963",8670:"9a75d31c",8715:"d28f74fe",8719:"56ba9a23",8906:"5a65560e",8946:"4c5a37cc",9182:"a6e2e0e3",9284:"3af655c2",9343:"fb2ff3ce",9398:"edcd2a9f",9400:"a1afaf3d",9537:"4c73305c",9684:"99ff3701",9907:"4863874d"}[e]+".js"},o.miniCssF=function(e){return"css/"+e+".2e1e6055.css"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="amis-widget:",o.l=function(e,r,a,s){if(t[e])t[e].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+a){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",n+a),i.src=e),t[e]=[r];var m=function(n,r){i.onerror=i.onload=null,clearTimeout(f);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),n)return n(r)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.p="https://aisuda.github.io/amis-widget/test/",r=function(e){return new Promise((function(t,n){var r=o.miniCssF(e),a=o.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){var i;if((a=(i=s[r]).getAttribute("data-href"))===e||a===t)return i}}(r,a))return t();!function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(s){if(a.onerror=a.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=o,a.parentNode.removeChild(a),r(c)}},a.href=t,document.head.appendChild(a)}(e,a,t,n)}))},a={1493:0},o.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{1813:1}[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={1493:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,a){r=e[t]=[n,a]}));n.push(r[2]=a);var s=o.p+o.u(t),i=new Error;o.l(s,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var d=c(o)}for(t&&t(n);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self.webpackChunkamis_widget=self.webpackChunkamis_widget||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.O(void 0,[4736],(function(){return o(48677)})),o.O(void 0,[4736],(function(){return o(87837)})),o.O(void 0,[4736],(function(){return o(77520)})),o.O(void 0,[4736],(function(){return o(82569)})),o.O(void 0,[4736],(function(){return o(28063)})),o.O(void 0,[4736],(function(){return o(18820)}));var c=o.O(void 0,[4736],(function(){return o(12290)}));c=o.O(c)}();