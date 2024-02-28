/*! For license information please see index.umd.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.amisWidget=t():e.amisWidget=t()}(this,(function(){return function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{BasePlugin:function(){return o.BasePlugin},createVue2Component:function(){return M},getSchemaTpl:function(){return o.getSchemaTpl},registerAmisEditorPlugin:function(){return f},registerRendererByType:function(){return q}});var n=require("@babel/runtime/helpers/inheritsLoose"),r=e.n(n),o=require("amis-editor-core"),i=require("@babel/runtime/helpers/extends"),s=e.n(i);function a(e,t,n){void 0===n&&(n=!0);var r=function(e,t){void 0===t&&(t=!0);var n=e&&e.__super?Object.create(e.__super,{__super:{value:e.__super,writable:!1,enumerable:!1}}):Object.create(Object.prototype);return t&&e&&Object.keys(e).forEach((function(t){return n[t]=e[t]})),n}(e,n);return t&&Object.keys(t).forEach((function(e){return r[e]=t[e]})),r}var u,c,d="[amis-widget]";function f(e,t){var n=(null==t?void 0:t.rendererName)||(null==t?void 0:t.type);if(e&&e.prototype instanceof o.BasePlugin)return p(e,n),e;var i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t}(o.BasePlugin);return Object.assign(i.prototype,new e),t&&Object.assign(i.prototype,t),p(i,n),i}function p(e,t){if(e&&function(e){var t=!1;if(!e)return!1;var n=new e;return n.rendererName?n.name?n.description?!n.tags||Array.isArray(n.tags)&&0===n.tags.length?console.error(d+"自定义插件注册失败，自定义组件分类（tags）不能为空。"):n.panelTitle?(n.icon||Object.assign(e.prototype,{icon:"fa fa-file-code-o"}),t=!0):console.error(d+"自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。"):console.error(d+"自定义插件注册失败，自定义组件描述（description）不能为空。"):console.error(d+"自定义插件注册失败，自定义组件名称（name）不能为空。"):console.error(d+"自定义插件注册失败，关联渲染器（rendererName）不能为空。"),t}(e)){var n=t||(new e).rendererName;Object.assign(e.prototype,{isNpmCustomWidget:!0,rendererName:n}),window&&window.postMessage&&(r=n,o=e,window&&!window.AMISEditorCustomPlugins&&(window.AMISEditorCustomPlugins={}),(window.AMISEditorCustomPlugins[r]?(console.error(d+"注册自定义插件失败，已存在重名插件("+r+")。"),null):(window.AMISEditorCustomPlugins[r]=o,r))&&(console.info(d+"触发注册自定义插件("+n+")事件"),window.postMessage({type:"amis-widget-register-event",eventMsg:d+"注册一个自定义amis-editor插件",editorPluginName:n},"*")))}var r,o}!function(e){e.renderer="renderer",e.formitem="formitem",e.options="options"}(u||(u={})),function(e){e.react="react",e.vue2="vue2",e.vue3="vue3",e.jquery="jquery"}(c||(c={}));var m=require("@babel/runtime/helpers/assertThisInitialized"),l=e.n(m),v=require("react"),h=e.n(v),g=(require("jquery"),require("amis-core"));function y(e){if(e&&("function"==typeof e||"object"==typeof e)){var t=function(t){function n(n,r){var o;return(o=t.call(this,n)||this).dom=void 0,o.instance=void 0,o.domRef=o.domRef.bind(l()(o)),r.registerComponent(l()(o)),o.instance="function"==typeof e?new e:e,o}r()(n,t);var o=n.prototype;return o.componentDidMount=function(){var e=this.instance.onMount;e&&e.apply(this.instance,[this.props])},o.componentDidUpdate=function(e){var t=this.instance.onUpdate;t&&t.apply(this.instance,[this.props,e])},o.componentWillUnmount=function(){this.context.unRegisterComponent(this);var e=this.instance.onUnmout;e&&e.apply(this.instance,this.props)},o.reload=function(){this.instance&&this.instance.reload?this.instance.reload():console.warn("自定义组件中暂不支持reload动作。")},o.doAction=function(e,t){this.instance&&this.instance.doAction?this.instance.doAction(e,t):console.warn("自定义组件中不存在doAction。")},o.domRef=function(e){this.instance.$root=this.dom=e,this._render()},o._render=function(){if(this.dom){var e=this.instance.template;"string"==typeof e?this.dom.innerHTML=e:"function"==typeof e&&(this.dom.innerHTML=e(this.props))}},o.render=function(){return h().createElement("div",{ref:this.domRef})},n}(h().Component);return t.contextType=g.ScopedContext,t}}var w=require("@babel/runtime/helpers/objectWithoutPropertiesLoose"),b=e.n(w),j=require("react-dom"),C=e.n(j),A=require("vue"),O=e.n(A),P=["data"];function M(e){if(e&&("function"==typeof e||"object"==typeof e)){var t=function(t){function n(e,n){var r;return(r=t.call(this,e)||this).domRef=void 0,r.vm=void 0,r.isUnmount=void 0,r.domRef=h().createRef(),n.registerComponent(l()(r)),r.resolveAmisProps=r.resolveAmisProps.bind(l()(r)),r.renderChild=r.renderChild.bind(l()(r)),r}r()(n,t);var o=n.prototype;return o.componentDidMount=function(){var t=this,n=this.resolveAmisProps(),r=n.amisData,o=n.amisFunc,i=e="function"==typeof e?new e:e,u=i.data,c=b()(i,P),d=a("function"==typeof u?u():u,r);this.vm=new(O())(s()({},c,{data:function(){return d},props:a(o,c.props||{})})),Object.keys(o).forEach((function(e){t.vm.$props[e]=o[e],"render"===e&&(t.vm.$props.renderChild=function(e,n,r){t.renderChild(e,n,r)})})),this.domRef.current.appendChild(this.vm.$mount().$el)},o.renderChild=function(e,t,n){var r=null;if(this.props.render&&t&&n){var o=this.props.render(e,t);r=C().render(o,document.getElementById(n))}return r},o.componentDidUpdate=function(){var e=this;if(!this.isUnmount){var t=this.resolveAmisProps().amisData;this.vm&&(Object.keys(t).forEach((function(n){e.vm[n]=t[n]})),this.vm.$forceUpdate())}},o.componentWillUnmount=function(){this.isUnmount=!0,this.context.unRegisterComponent(this),this.vm.$destroy()},o.resolveAmisProps=function(){var e=this,t={},n={};return Object.keys(this.props).forEach((function(r){var o=e.props[r];"function"==typeof o?t[r]=o:n[r]=o})),{amisData:n,amisFunc:t}},o.reload=function(){this.vm&&this.vm.reload?this.vm.reload():console.warn("自定义组件暂不支持reload动作。")},o.doAction=function(e,t){this.vm&&this.vm.doAction?this.vm.doAction(e,t):console.warn("自定义组件中不存在doAction。")},o.render=function(){return h().createElement("div",{ref:this.domRef})},n}(h().Component);return t.contextType=g.ScopedContext,t}}function q(e,t){if(e){var n,r={type:"",usage:u.renderer,weight:0,framework:c.react};if(t&&(n=t,"String"===Object.prototype.toString.call(n).slice(8,-1))?Object.assign(r,{type:t}):Object.assign(r,t),r&&!r.type)console.error(d+"amis渲染器注册失败，渲染器类型（type）不能为空。");else{r.framework=function(e){var t=c.react;if(!e)return t;var n=e.toLowerCase().trim();switch(n){case"jquery":case"jq":n=c.jquery;break;case"vue":case"vue2":case"vue 2":case"vue2.0":case"vue 2.0":n=c.vue2;break;case"vue3":case"vue 3":case"vue3.0":case"vue 3.0":n=c.vue3,console.error("amis-widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。");break;default:n=c.react}return n}(r.framework),r.usage=function(e){var t=u.renderer;if(!e)return t;var n=e.toLowerCase().trim();switch(n){case"renderer":case"renderers":default:n=u.renderer;break;case"formitem":case"form-item":case"form item":n=u.formitem;break;case"options":case"option":case"formoption":case"form-option":case"form option":n=u.options}return n}(r.usage);var o={react:function(e){return e},vue2:M,vue3:M,jquery:y}[r.framework](e);if({renderer:function(){},formitem:function(){},options:function(){}}[r.usage]){if(window&&window.postMessage){var i=(s=r.type,a={type:r.type,weight:r.weight,usage:r.usage,framework:r.framework,component:o,config:r},window&&!window.AmisCustomRenderers&&(window.AmisCustomRenderers={}),window.AmisCustomRenderers[s]?(console.error(d+"注册amis渲染器失败，已存在重名渲染器("+s+")。"),null):(window.AmisCustomRenderers[s]=a,s));i&&(console.info(d+"触发注册amis渲染器("+i+")事件"),window.postMessage({type:"amis-renderer-register-event",eventMsg:d+"注册一个自定义amis渲染器",amisRenderer:{type:i,weight:r.weight,usage:r.usage,config:r}},"*"))}}else console.error(d+"amis渲染器注册失败，暂不支持"+r.usage+"组件类型。")}}var s,a}return t}()}));