/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.amisWidget=r():e.amisWidget=r()}(this,(function(){return function(){"use strict";var e={n:function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,{a:t}),t},d:function(r,t){for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{BasePlugin:function(){return o.BasePlugin},createVue2Component:function(){return M},getSchemaTpl:function(){return o.getSchemaTpl},registerAmisEditorPlugin:function(){return p},registerRendererByType:function(){return k}});var t=require("@babel/runtime/helpers/inheritsLoose"),n=e.n(t),o=require("amis-editor-core"),i=require("@babel/runtime/helpers/extends"),s=e.n(i);function a(e,r,t){void 0===t&&(t=!0);var n=function(e,r){void 0===r&&(r=!0);var t=e&&e.__super?Object.create(e.__super,{__super:{value:e.__super,writable:!1,enumerable:!1}}):Object.create(Object.prototype);return r&&e&&Object.keys(e).forEach((function(r){return t[r]=e[r]})),t}(e,t);return r&&Object.keys(r).forEach((function(e){return n[e]=r[e]})),n}var u,c,f="[amis-widget]";function p(e,r){var t=(null==r?void 0:r.rendererName)||(null==r?void 0:r.type);if(e&&e.prototype instanceof o.BasePlugin)return d(e,t),e;var i=function(e){function r(r){return e.call(this,r)||this}return n()(r,e),r}(o.BasePlugin);return Object.assign(i.prototype,new e),r&&Object.assign(i.prototype,r),d(i,t),i}function d(e,r){if(e&&function(e){var r=!1;if(!e)return!1;var t=new e;return t.rendererName?t.name?t.description?!t.tags||Array.isArray(t.tags)&&0===t.tags.length?console.error(f+"自定义插件注册失败，自定义组件分类（tags）不能为空。"):t.panelTitle?(t.icon||Object.assign(e.prototype,{icon:"fa fa-file-code-o"}),r=!0):console.error(f+"自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。"):console.error(f+"自定义插件注册失败，自定义组件描述（description）不能为空。"):console.error(f+"自定义插件注册失败，自定义组件名称（name）不能为空。"):console.error(f+"自定义插件注册失败，关联渲染器（rendererName）不能为空。"),r}(e)){var t=r||(new e).rendererName;Object.assign(e.prototype,{isNpmCustomWidget:!0,rendererName:t}),window&&window.postMessage&&(n=t,o=e,window&&!window.AMISEditorCustomPlugins&&(window.AMISEditorCustomPlugins={}),(window.AMISEditorCustomPlugins[n]?(console.error(f+"注册自定义插件失败，已存在重名插件("+n+")。"),null):(window.AMISEditorCustomPlugins[n]=o,n))&&(console.info(f+"触发注册自定义插件("+t+")事件"),window.postMessage({type:"amis-widget-register-event",eventMsg:f+"注册一个自定义amis-editor插件",editorPluginName:t},"*")))}var n,o}!function(e){e.renderer="renderer",e.formitem="formitem",e.options="options"}(u||(u={})),function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(c||(c={}));var m=require("@babel/runtime/helpers/assertThisInitialized"),l=e.n(m),v=require("react"),h=e.n(v);function g(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(t){var n;return(n=r.call(this,t)||this).dom=void 0,n.instance=void 0,n.domRef=n.domRef.bind(l()(n)),n.instance="function"==typeof e?new e:e,n}n()(t,r);var o=t.prototype;return o.componentDidMount=function(){var e=this.instance.onMount;e&&e.apply(this.instance,[this.props])},o.componentDidUpdate=function(e){var r=this.instance.onUpdate;r&&r.apply(this.instance,[this.props,e])},o.componentWillUnmount=function(){var e=this.instance.onUnmout;e&&e.apply(this.instance,this.props)},o.domRef=function(e){this.instance.$root=this.dom=e,this._render()},o._render=function(){if(this.dom){var e=this.instance.template;"string"==typeof e?this.dom.innerHTML=e:"function"==typeof e&&(this.dom.innerHTML=e(this.props))}},o.render=function(){return h().createElement("div",{ref:this.domRef})},t}(h().Component)}require("jquery");var y=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),w=e.n(y),b=require("react-dom"),j=e.n(b),C=require("vue"),O=e.n(C),P=["data"];function M(e){if(e&&("function"==typeof e||"object"==typeof e))return function(r){function t(e){var t;return(t=r.call(this,e)||this).domRef=void 0,t.vm=void 0,t.domRef=h().createRef(),t.resolveAmisProps=t.resolveAmisProps.bind(l()(t)),t.renderChild=t.renderChild.bind(l()(t)),t}n()(t,r);var o=t.prototype;return o.componentDidMount=function(){var r=this,t=this.resolveAmisProps(),n=t.amisData,o=t.amisFunc,i=e="function"==typeof e?new e:e,u=i.data,c=w()(i,P);this.vm=new(O())(s()({data:a(n,"function"==typeof u?u():u)},c,{props:c.props||{}})),Object.keys(o).forEach((function(e){r.vm.$props[e]=o[e],"render"===e&&(r.vm.$props.renderChild=function(e,t,n){r.renderChild(e,t,n)})})),this.domRef.current.appendChild(this.vm.$mount().$el)},o.renderChild=function(e,r,t){var n=null;if(this.props.render&&r&&t){var o=this.props.render(e,r);n=j().render(o,document.getElementById(t))}return n},o.componentDidUpdate=function(){var e=this;Object.keys(this.props).forEach((function(r){return"function"!=typeof e.props[r]&&(e.vm[r]=e.props[r])})),this.vm.$forceUpdate()},o.componentWillUnmount=function(){this.vm.$destroy()},o.resolveAmisProps=function(){var e=this,r={},t={};return Object.keys(this.props).forEach((function(n){var o=e.props[n];"function"==typeof o?r[n]=o:t[n]=o})),{amisData:t,amisFunc:r}},o.render=function(){return h().createElement("div",{ref:this.domRef})},t}(h().Component)}function k(e,r){if(e){var t,n={type:"",usage:u.renderer,weight:0,framework:c.react};if(r&&(t=r,"String"===Object.prototype.toString.call(t).slice(8,-1))?Object.assign(n,{type:r}):Object.assign(n,r),n&&!n.type)console.error(f+"amis渲染器注册失败，渲染器类型（type）不能为空。");else{n.framework=function(e){var r=c.react;if(!e)return r;var t=e.toLowerCase().trim();switch(t){case"jquery":case"jq":t=c.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":t=c.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":t=c.vue3,console.error("amis-widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。");break;default:t=c.react}return t}(n.framework),n.usage=function(e){var r=u.renderer;if(!e)return r;var t=e.toLowerCase().trim();switch(t){case"renderer":case"renderers":default:t=u.renderer;break;case"formitem":case"form-item":case"form item":t=u.formitem;break;case"options":case"option":case"formoption":case"form-option":case"form option":t=u.options}return t}(n.usage);var o={react:function(e){return e},vue2:M,vue3:M,jquery:g}[n.framework](e);if({renderer:function(){},formitem:function(){},options:function(){}}[n.usage]){if(window&&window.postMessage){var i=(s=n.type,a={type:n.type,weight:n.weight,usage:n.usage,framework:n.framework,component:o,config:n},window&&!window.AmisCustomRenderers&&(window.AmisCustomRenderers={}),window.AmisCustomRenderers[s]?(console.error(f+"注册amis渲染器失败，已存在重名渲染器("+s+")。"),null):(window.AmisCustomRenderers[s]=a,s));i&&(console.info(f+"触发注册amis渲染器("+i+")事件"),window.postMessage({type:"amis-renderer-register-event",eventMsg:f+"注册一个自定义amis渲染器",amisRenderer:{type:i,weight:n.weight,usage:n.usage,config:n}},"*"))}}else console.error(f+"amis渲染器注册失败，暂不支持"+n.usage+"组件类型。")}}var s,a}return r}()}));