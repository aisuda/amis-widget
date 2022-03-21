/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.amisWidget=r():e.amisWidget=r()}(this,(function(){return function(){"use strict";var e={n:function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,{a:t}),t},d:function(r,t){for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{getSchemaTpl:function(){return s.getSchemaTpl},registerAmisEditorPlugin:function(){return u},registerRendererByType:function(){return P}});var t,n,o=require("@babel/runtime/helpers/inheritsLoose"),i=e.n(o),s=require("amis-editor"),a="npm-custom",c="[amis-widget]";function u(e,r){var t=function(e){function r(r){return e.call(this,r)||this}return i()(r,e),r}(s.BasePlugin);if(Object.assign(t.prototype,new e),Object.assign(t.prototype,r),function(e){var r=!1;if(!e)return!1;var t,n=new e;return n.rendererName?n.name?n.description?!n.tags||Array.isArray(n.tags)&&0===n.tags.length?console.error(c+"自定义插件注册失败，自定义组件分类（tags）不能为空。"):n.panelTitle?(n.icon||Object.assign(e.prototype,{icon:"fa fa-file-code-o"}),(t=e.prototype)&&(t.rendererName&&t.rendererName.indexOf(a)<0&&(t.rendererName="npm-custom-"+t.rendererName),t.previewSchema&&t.previewSchema.type&&t.previewSchema.type.indexOf(a)<0&&(t.previewSchema.type="npm-custom-"+t.previewSchema.type),t.scaffold&&Array.isArray(t.scaffold)?t.scaffold.map((function(e){return e.type.indexOf(a)<0&&(e.type="npm-custom-"+e.type),e})):t.scaffold&&t.scaffold.type&&t.scaffold.type.indexOf(a)<0&&(t.scaffold.type="npm-custom-"+t.scaffold.type)),r=!0):console.error(c+"自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。"):console.error(c+"自定义插件注册失败，自定义组件描述（description）不能为空。"):console.error(c+"自定义插件注册失败，自定义组件名称（name）不能为空。"):console.error(c+"自定义插件注册失败，关联渲染器（rendererName）不能为空。"),r}(t)){Object.assign(t.prototype,{isNpmCustomWidget:!0});var n=t.prototype;(0,s.registerEditorPlugin)(t),window&&window.postMessage&&window.postMessage({type:"amis-widget-register-event",eventMsg:c+"注册一个自定义amis-editor插件",editorPluginName:n.name},"*"),console.info(c+"注册了一个自定义amis-editor插件:",n)}return t}!function(e){e.renderer="renderer",e.formitem="formitem",e.options="options"}(t||(t={})),function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(n||(n={}));var p=require("amis"),f=require("@babel/runtime/helpers/assertThisInitialized"),m=e.n(f),d=require("react"),l=e.n(d);function v(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(t){var n;return(n=r.call(this,t)||this).dom=void 0,n.instance=void 0,n.domRef=n.domRef.bind(m()(n)),n.instance="function"==typeof e?new e:e,n}i()(t,r);var n=t.prototype;return n.componentDidMount=function(){var e=this.instance.onMount;e&&e.apply(this.instance,[this.props])},n.componentDidUpdate=function(e){var r=this.instance.onUpdate;r&&r.apply(this.instance,[this.props,e])},n.componentWillUnmount=function(){var e=this.instance.onUnmout;e&&e.apply(this.instance,this.props)},n.domRef=function(e){this.instance.$root=this.dom=e,this._render()},n._render=function(){if(this.dom){var e=this.instance.template;"string"==typeof e?this.dom.innerHTML=e:"function"==typeof e&&(this.dom.innerHTML=e(this.props))}},n.render=function(){return l().createElement("div",{ref:this.domRef})},t}(l().Component)}require("jquery");var y=require("@babel/runtime/helpers/extends"),h=e.n(y),g=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),b=e.n(g),w=require("react-dom"),j=e.n(w),O=require("vue"),q=e.n(O),k=["data"];function S(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(e){var t;return(t=r.call(this,e)||this).domRef=void 0,t.vm=void 0,t.domRef=l().createRef(),t.resolveAmisProps=t.resolveAmisProps.bind(m()(t)),t.renderChild=t.renderChild.bind(m()(t)),t}i()(t,r);var n=t.prototype;return n.componentDidMount=function(){var r=this,t=this.resolveAmisProps(),n=t.amisData,o=t.amisFunc,i=e="function"==typeof e?new e:e,s=i.data,a=b()(i,k);this.vm=new(q())(h()({data:p.utils.extendObject(n,"function"==typeof s?s():s)},a)),Object.keys(o).forEach((function(e){r.vm.$props[e]=o[e],"render"===e&&(r.vm.$props.renderChild=function(e,t,n){r.renderChild(e,t,n)})})),this.domRef.current.appendChild(this.vm.$mount().$el)},n.renderChild=function(e,r,t){var n=null;if(this.props.render&&r&&t){var o=this.props.render(e,r);n=j().render(o,document.getElementById(t))}return n},n.componentDidUpdate=function(){var e=this;Object.keys(this.props).forEach((function(r){return"function"!=typeof e.props[r]&&(e.vm[r]=e.props[r])})),this.vm.$forceUpdate()},n.componentWillUnmount=function(){this.vm.$destroy()},n.resolveAmisProps=function(){var e=this,r={},t={};return Object.keys(this.props).forEach((function(n){var o=e.props[n];"function"==typeof o?r[n]=o:t[n]=o})),{amisData:t,amisFunc:r}},n.render=function(){return l().createElement("div",{ref:this.domRef})},t}(l().Component)}function P(e,r){if(e){var o,i,s,u={type:"",usage:t.renderer,weight:0,framework:n.react};if(r&&(o=r,"String"===Object.prototype.toString.call(o).slice(8,-1))?Object.assign(u,{type:r}):Object.assign(u,r),u&&!u.type)console.error(c+"自定义组件注册失败，自定义组件类型（type）不能为空。");else{u.type=(s=i=u.type,i?(i&&i.indexOf(a)<0&&(s="npm-custom-"+i),s):s),u.framework=function(e){var r=n.react;if(!e)return r;var t=e.toLowerCase().trim();switch(t){case"jquery":case"jq":t=n.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":t=n.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":t=n.vue3,console.error("amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。");break;default:t=n.react}return t}(u.framework),u.usage=function(e){var r=t.renderer;if(!e)return r;var n=e.toLowerCase().trim();switch(n){case"renderer":case"renderers":default:n=t.renderer;break;case"formitem":case"form-item":case"form item":n=t.formitem;break;case"options":case"option":case"formoption":case"form-option":case"form option":n=t.options}return n}(u.usage);var f={renderer:p.Renderer,formitem:p.FormItem,options:p.OptionsControl},m={react:function(e){return e},vue2:S,vue3:S,jquery:v}[u.framework](e);f[u.usage]?(f[u.usage]({type:u.type,weight:u.weight})(m),console.info("注册了一个自定义amis组件:",{type:u.type,weight:u.weight,component:m,framework:u.framework,usage:u.usage})):console.error(c+"自定义组件注册失败，不存在"+u.usage+"自定义组件类型。")}}}return r}()}));