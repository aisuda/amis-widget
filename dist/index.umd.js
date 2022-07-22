/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.amisWidget=r():e.amisWidget=r()}(this,(function(){return function(){"use strict";var e={n:function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,{a:t}),t},d:function(r,t){for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{BasePlugin:function(){return s.BasePlugin},getSchemaTpl:function(){return s.getSchemaTpl},registerAmisEditorPlugin:function(){return c},registerRendererByType:function(){return S}});var t,n,o=require("@babel/runtime/helpers/inheritsLoose"),i=e.n(o),s=require("amis-editor"),a="[amis-widget]";function c(e,r){if(e&&e.prototype instanceof s.BasePlugin)return u(e),e;var t=function(e){function r(r){return e.call(this,r)||this}return i()(r,e),r}(s.BasePlugin);return Object.assign(t.prototype,new e),r&&Object.assign(t.prototype,r),u(t,null==r?void 0:r.name),t}function u(e,r){if(e&&function(e){var r=!1;if(!e)return!1;var t,n=new e;return n.rendererName?n.name?n.description?!n.tags||Array.isArray(n.tags)&&0===n.tags.length?console.error(a+"自定义插件注册失败，自定义组件分类（tags）不能为空。"):n.panelTitle?(n.icon||Object.assign(e.prototype,{icon:"fa fa-file-code-o"}),(t=e.prototype)&&(t.rendererName&&t.rendererName.indexOf("")<0&&(t.rendererName="-"+t.rendererName),t.previewSchema&&t.previewSchema.type&&t.previewSchema.type.indexOf("")<0&&(t.previewSchema.type="-"+t.previewSchema.type),t.scaffold&&Array.isArray(t.scaffold)?t.scaffold.map((function(e){return e.type.indexOf("")<0&&(e.type="-"+e.type),e})):t.scaffold&&t.scaffold.type&&t.scaffold.type.indexOf("")<0&&(t.scaffold.type="-"+t.scaffold.type)),r=!0):console.error(a+"自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。"):console.error(a+"自定义插件注册失败，自定义组件描述（description）不能为空。"):console.error(a+"自定义插件注册失败，自定义组件名称（name）不能为空。"):console.error(a+"自定义插件注册失败，关联渲染器（rendererName）不能为空。"),r}(e)){var t=r||(new e).name;Object.assign(e.prototype,{isNpmCustomWidget:!0,name:t}),(0,s.registerEditorPlugin)(e),window&&window.postMessage&&window.postMessage({type:"amis-widget-register-event",eventMsg:a+"注册一个自定义amis-editor插件",editorPluginName:t},"*")}}!function(e){e.renderer="renderer",e.formitem="formitem",e.options="options"}(t||(t={})),function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(n||(n={}));var p=require("amis-core"),f=require("@babel/runtime/helpers/assertThisInitialized"),d=e.n(f),m=require("react"),l=e.n(m);function v(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(t){var n;return(n=r.call(this,t)||this).dom=void 0,n.instance=void 0,n.domRef=n.domRef.bind(d()(n)),n.instance="function"==typeof e?new e:e,n}i()(t,r);var n=t.prototype;return n.componentDidMount=function(){var e=this.instance.onMount;e&&e.apply(this.instance,[this.props])},n.componentDidUpdate=function(e){var r=this.instance.onUpdate;r&&r.apply(this.instance,[this.props,e])},n.componentWillUnmount=function(){var e=this.instance.onUnmout;e&&e.apply(this.instance,this.props)},n.domRef=function(e){this.instance.$root=this.dom=e,this._render()},n._render=function(){if(this.dom){var e=this.instance.template;"string"==typeof e?this.dom.innerHTML=e:"function"==typeof e&&(this.dom.innerHTML=e(this.props))}},n.render=function(){return l().createElement("div",{ref:this.domRef})},t}(l().Component)}require("jquery");var y=require("@babel/runtime/helpers/extends"),h=e.n(y),g=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),b=e.n(g),w=require("react-dom"),j=e.n(w),O=require("vue"),q=e.n(O),P=["data"];function k(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(e){var t;return(t=r.call(this,e)||this).domRef=void 0,t.vm=void 0,t.domRef=l().createRef(),t.resolveAmisProps=t.resolveAmisProps.bind(d()(t)),t.renderChild=t.renderChild.bind(d()(t)),t}i()(t,r);var n=t.prototype;return n.componentDidMount=function(){var r=this,t=this.resolveAmisProps(),n=t.amisData,o=t.amisFunc,i=e="function"==typeof e?new e:e,s=i.data,a=b()(i,P);this.vm=new(q())(h()({data:p.utils.extendObject(n,"function"==typeof s?s():s)},a,{props:a.props||{}})),Object.keys(o).forEach((function(e){r.vm.$props[e]=o[e],"render"===e&&(r.vm.$props.renderChild=function(e,t,n){r.renderChild(e,t,n)})})),this.domRef.current.appendChild(this.vm.$mount().$el)},n.renderChild=function(e,r,t){var n=null;if(this.props.render&&r&&t){var o=this.props.render(e,r);n=j().render(o,document.getElementById(t))}return n},n.componentDidUpdate=function(){var e=this;Object.keys(this.props).forEach((function(r){return"function"!=typeof e.props[r]&&(e.vm[r]=e.props[r])})),this.vm.$forceUpdate()},n.componentWillUnmount=function(){this.vm.$destroy()},n.resolveAmisProps=function(){var e=this,r={},t={};return Object.keys(this.props).forEach((function(n){var o=e.props[n];"function"==typeof o?r[n]=o:t[n]=o})),{amisData:t,amisFunc:r}},n.render=function(){return l().createElement("div",{ref:this.domRef})},t}(l().Component)}function S(e,r){if(e){var o,i,s,c={type:"",usage:t.renderer,weight:0,framework:n.react};if(r&&(o=r,"String"===Object.prototype.toString.call(o).slice(8,-1))?Object.assign(c,{type:r}):Object.assign(c,r),c&&!c.type)console.error(a+"自定义组件注册失败，自定义组件类型（type）不能为空。");else{c.type=(s=i=c.type,i?(i&&i.indexOf("")<0&&(s="-"+i),s):s),c.framework=function(e){var r=n.react;if(!e)return r;var t=e.toLowerCase().trim();switch(t){case"jquery":case"jq":t=n.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":t=n.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":t=n.vue3,console.error("amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。");break;default:t=n.react}return t}(c.framework),c.usage=function(e){var r=t.renderer;if(!e)return r;var n=e.toLowerCase().trim();switch(n){case"renderer":case"renderers":default:n=t.renderer;break;case"formitem":case"form-item":case"form item":n=t.formitem;break;case"options":case"option":case"formoption":case"form-option":case"form option":n=t.options}return n}(c.usage);var u={renderer:p.Renderer,formitem:p.FormItem,options:p.OptionsControl},f={react:function(e){return e},vue2:k,vue3:k,jquery:v}[c.framework](e);u[c.usage]?(u[c.usage]({type:c.type,weight:c.weight})(f),console.info("注册了一个自定义amis组件:",{type:c.type,weight:c.weight,component:f,framework:c.framework,usage:c.usage})):console.error(a+"自定义组件注册失败，不存在"+c.usage+"自定义组件类型。")}}}return r}()}));