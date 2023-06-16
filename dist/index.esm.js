import { BasePlugin } from 'amis-editor-core';
export { BasePlugin, getSchemaTpl } from 'amis-editor-core';
import React from 'react';
import 'jquery';
import ReactDOM from 'react-dom';
import Vue from 'vue';
import { ScopedContext } from 'amis-core';

// 方便取值的时候能够把上层的取到，但是获取的时候不会全部把所有的数据获取到。
function cloneObject(target, persistOwnProps = true) {
    const obj = target && target.__super
        ? Object.create(target.__super, {
            __super: {
                value: target.__super,
                writable: false,
                enumerable: false,
            },
        })
        : Object.create(Object.prototype);
    persistOwnProps &&
        target &&
        Object.keys(target).forEach((key) => (obj[key] = target[key]));
    return obj;
}
function extendObject(target, src, persistOwnProps = true) {
    const obj = cloneObject(target, persistOwnProps);
    src && Object.keys(src).forEach((key) => (obj[key] = src[key]));
    return obj;
}

const consoleTag = '[amis-widget]'; // 输出标记
/**
 * 获取技术栈标识
 * 目的：兼容用户非标准写法
 */
function getFramework(_framework) {
    let defaultFramework = Framework.react;
    if (!_framework) {
        return defaultFramework;
    }
    let curFramework = _framework.toLowerCase().trim();
    switch (curFramework) {
        case 'jquery':
        case 'jq':
            curFramework = Framework.jquery;
            break;
        case 'vue':
        case 'vue2':
        case 'vue 2':
        case 'vue2.0':
        case 'vue 2.0':
            curFramework = Framework.vue2;
            break;
        case 'vue3':
        case 'vue 3':
        case 'vue3.0':
        case 'vue 3.0':
            curFramework = Framework.vue3;
            console.error('amis-widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。');
            break;
        default:
            curFramework = Framework.react;
    }
    return curFramework;
}
var Usage;
(function (Usage) {
    Usage["renderer"] = "renderer";
    Usage["formitem"] = "formitem";
    Usage["options"] = "options";
})(Usage || (Usage = {}));
/**
 * 获取amis渲染器类型标识
 * 目的：兼容用户非标准写法
 */
function getUsage(_usage) {
    let defaultUsage = Usage.renderer;
    if (!_usage) {
        return defaultUsage;
    }
    let curUsage = _usage.toLowerCase().trim();
    switch (curUsage) {
        case 'renderer':
        case 'renderers':
            curUsage = Usage.renderer;
            break;
        case 'formitem':
        case 'form-item':
        case 'form item':
            curUsage = Usage.formitem;
            break;
        case 'options':
        case 'option':
        case 'formoption':
        case 'form-option':
        case 'form option':
            curUsage = Usage.options;
            break;
        default:
            curUsage = Usage.renderer;
    }
    return curUsage;
}
/**
 * 当前amis-widget支持的技术栈
 * 备注：vue2和vue3不能同时存在
 */
var Framework;
(function (Framework) {
    Framework["react"] = "react";
    Framework["vue2"] = "vue2";
    Framework["vue3"] = "vue3";
    Framework["jquery"] = "jquery";
})(Framework || (Framework = {}));
// 判断是否缺失editor插件关键字段
function isEditorPlugin(EditorPluginClass) {
    let _isEditorPlugin = false;
    if (!EditorPluginClass) {
        return false;
    }
    const _editorPluginObj = new EditorPluginClass();
    if (!_editorPluginObj.rendererName) {
        console.error(`${consoleTag}自定义插件注册失败，关联渲染器（rendererName）不能为空。`);
    }
    else if (!_editorPluginObj.name) {
        console.error(`${consoleTag}自定义插件注册失败，自定义组件名称（name）不能为空。`);
    }
    else if (!_editorPluginObj.description) {
        console.error(`${consoleTag}自定义插件注册失败，自定义组件描述（description）不能为空。`);
    }
    else if (!_editorPluginObj.tags ||
        (Array.isArray(_editorPluginObj.tags) && _editorPluginObj.tags.length === 0)) {
        console.error(`${consoleTag}自定义插件注册失败，自定义组件分类（tags）不能为空。`);
    }
    else if (!_editorPluginObj.panelTitle) {
        console.error(`${consoleTag}自定义插件注册失败，自定义组件配置面板Title（panelTitle）不能为空。`);
    }
    else {
        // 1.设置一个默认icon
        if (!_editorPluginObj.icon) {
            Object.assign(EditorPluginClass.prototype, {
                icon: 'fa fa-file-code-o',
            });
        }
        _isEditorPlugin = true;
    }
    return _isEditorPlugin;
}
// 判断是否是字符串类型
function isString(str) {
    return Object.prototype.toString.call(str).slice(8, -1) === 'String';
}

// @ts-ignore
/**
 * registerAmisEditorPlugin: 注册 amis-editor 插件
 *【方法参数说明】
 * _editorPlugin: 新的自定义插件,
 * pluginOption?: {
 *   rendererName?: 关联的渲染器
 *   name?: 自定义组件名称
 *   description?: 自定义组件描述
 *   tags?: 自定义组件分类
 *   order?: 自定义组件排序
 *   icon?: 自定义组件icon
 *   panelTitle?: 属性配置面板Title
 *   disabledRendererPlugin?: 自定义组件显隐
 * }
 */
function registerAmisEditorPlugin(_EditorPlugin, pluginOption) {
    const rendererName = pluginOption?.rendererName || pluginOption?.type;
    // 如果当前plugin已经继承了BasePlugin，则直接注册自定义插件
    if (_EditorPlugin && _EditorPlugin.prototype instanceof BasePlugin) {
        registerPluginAction(_EditorPlugin, rendererName);
        return _EditorPlugin;
    }
    // 如果自定义插件并未继承BasePlugin，则自动为其进行包裹处理
    class NewEditorPlugin extends BasePlugin {
        constructor(props) {
            super(props);
        }
    }
    // 将用户自定义的插件相关属性设置到插件对象中
    Object.assign(NewEditorPlugin.prototype, new _EditorPlugin());
    if (pluginOption) {
        // 将用户的注册时的配置属性添加到插件对象中
        Object.assign(NewEditorPlugin.prototype, pluginOption);
    }
    registerPluginAction(NewEditorPlugin, rendererName);
    return NewEditorPlugin;
}
function registerPluginAction(NewEditorPlugin, rendererName) {
    if (NewEditorPlugin && isEditorPlugin(NewEditorPlugin)) {
        const curEditorPluginName = rendererName || new NewEditorPlugin().rendererName;
        Object.assign(NewEditorPlugin.prototype, {
            isNpmCustomWidget: true,
            rendererName: curEditorPluginName,
        });
        // registerEditorPlugin(NewEditorPlugin); // 3.0 无需直接注册为amis-editor插件
        // 通过 postMessage 告知 amis-editor 注册一个新的插件
        if (window && window.postMessage) {
            const newComponentType = AddCustomEditorPlugin(curEditorPluginName, NewEditorPlugin);
            if (newComponentType) {
                console.info(`${consoleTag}触发注册自定义插件(${curEditorPluginName})事件`);
                window.postMessage({
                    type: 'amis-widget-register-event',
                    eventMsg: `${consoleTag}注册一个自定义amis-editor插件`,
                    editorPluginName: curEditorPluginName,
                }, '*');
            }
        }
    }
}
function AddCustomEditorPlugin(componentType, plugin) {
    if (window && !window.AMISEditorCustomPlugins) {
        window.AMISEditorCustomPlugins = {};
    }
    if (!window.AMISEditorCustomPlugins[componentType]) {
        window.AMISEditorCustomPlugins[componentType] = plugin;
        return componentType;
    }
    else {
        console.error(`${consoleTag}注册自定义插件失败，已存在重名插件(${componentType})。`);
    }
    return null;
}

/**
 * @file 自定义组件所需的 jQuery 对接
 */
function createJQComponent(jqueryObj) {
    if (!jqueryObj ||
        (typeof jqueryObj !== 'function' && typeof jqueryObj !== 'object')) {
        return;
    }
    class JQFactory extends React.Component {
        dom;
        instance;
        constructor(props) {
            super(props);
            this.domRef = this.domRef.bind(this);
            this.instance =
                typeof jqueryObj === 'function' ? new jqueryObj() : jqueryObj;
        }
        componentDidMount() {
            const { onMount } = this.instance;
            onMount && onMount.apply(this.instance, [this.props]);
        }
        componentDidUpdate(prevProps) {
            const { onUpdate } = this.instance;
            onUpdate && onUpdate.apply(this.instance, [this.props, prevProps]);
        }
        componentWillUnmount() {
            const { onUnmout } = this.instance;
            onUnmout && onUnmout.apply(this.instance, this.props);
        }
        domRef(dom) {
            this.instance.$root = this.dom = dom;
            this._render();
        }
        _render() {
            if (!this.dom) {
                return;
            }
            let template = this.instance.template;
            if (typeof template === 'string') {
                this.dom.innerHTML = template;
            }
            else if (typeof template === 'function') {
                this.dom.innerHTML = template(this.props);
            }
        }
        render() {
            return React.createElement("div", { ref: this.domRef });
        }
    }
    return JQFactory;
}

/**
 * @file 自定义组件所需的 vue2.0 对接
 */
function createVue2Component(vueObj) {
    if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
        return;
    }
    class VueFactory extends React.Component {
        domRef;
        vm;
        // 指定 contextType 读取当前的 scope context。
        // React 会往上找到最近的 scope Provider，然后使用它的值。
        static contextType = ScopedContext;
        constructor(props, context) {
            super(props);
            this.domRef = React.createRef();
            const scoped = context;
            scoped.registerComponent(this);
            this.resolveAmisProps = this.resolveAmisProps.bind(this);
            this.renderChild = this.renderChild.bind(this);
        }
        componentDidMount() {
            const { amisData, amisFunc } = this.resolveAmisProps();
            const { data, ...rest } = (vueObj =
                typeof vueObj === 'function' ? new vueObj() : vueObj);
            // 传入的Vue属性
            this.vm = new Vue({
                data: extendObject(amisData, typeof data === 'function' ? data() : data),
                ...rest,
                props: rest.props || {},
            });
            Object.keys(amisFunc).forEach((key) => {
                this.vm.$props[key] = amisFunc[key];
                if (key === 'render') {
                    // 避免和vue中的render冲突
                    this.vm.$props['renderChild'] = (schemaPosition, childSchema, insertElemId) => {
                        this.renderChild(schemaPosition, childSchema, insertElemId);
                    };
                }
            });
            this.domRef.current.appendChild(this.vm.$mount().$el);
        }
        // 渲染子元素
        renderChild(schemaPosition, childSchema, insertElemId) {
            let childElemCont = null;
            if (this.props['render'] && childSchema && insertElemId) {
                const childElem = this.props['render'](schemaPosition, childSchema);
                childElemCont = ReactDOM.render(childElem, document.getElementById(insertElemId));
            }
            return childElemCont;
        }
        componentDidUpdate() {
            Object.keys(this.props).forEach((key) => typeof this.props[key] !== 'function' &&
                (this.vm[key] = this.props[key]));
            this.vm.$forceUpdate();
        }
        componentWillUnmount() {
            const scoped = this.context;
            scoped.unRegisterComponent(this);
            this.vm.$destroy();
        }
        resolveAmisProps() {
            let amisFunc = {};
            let amisData = {};
            Object.keys(this.props).forEach((key) => {
                const value = this.props[key];
                if (typeof value === 'function') {
                    amisFunc[key] = value;
                }
                else {
                    amisData[key] = value;
                }
            });
            return { amisData, amisFunc };
        }
        /**
         * amis事件动作处理:
         * 在这里设置自定义组件对外暴露的动作，其他组件可以通过组件动作触发自定义组件的对应动作
         */
        doAction(action, args) {
            if (this.vm && this.vm.doAction) {
                this.vm.doAction(action, args);
            }
            else {
                console.warn('自定义组件中不存在doAction。');
            }
        }
        render() {
            return React.createElement("div", { ref: this.domRef });
        }
    }
    return VueFactory;
}

// import { Renderer, FormItem, OptionsControl } from 'amis-core';
/**
 * registerRendererByType: 根据type类型注册amis普通渲染器、amis表单渲染器、amis表单控件渲染器
 *【方法参数说明】
 * newRenderer: 新的渲染器,
 * rendererOption: {
 *   type: 渲染器的type类型，比如：input、text-area、select-user等
 *   usage?: amis普通渲染器、amis表单渲染器、amis表单控件渲染器
 *   weight?: 自定义组件权重
 *   framework?: 技术栈类型，默认为 react 技术栈，可选技术栈：vue2、react、jquery
 * }
 * 备注：暂不支持 vue3.0 技术栈
 */
function registerRendererByType(newRenderer, rendererOption) {
    if (!newRenderer) {
        return;
    }
    // 1.默认注册配置参数
    const curRendererOption = {
        type: '',
        usage: Usage.renderer,
        weight: 0,
        framework: Framework.react, // 默认为 react 技术栈
    };
    // 2.获取相关配置参数
    if (rendererOption && isString(rendererOption)) {
        // rendererOption为字符串则将其设置为type
        Object.assign(curRendererOption, {
            type: rendererOption,
        });
    }
    else {
        Object.assign(curRendererOption, rendererOption);
    }
    if (curRendererOption && !curRendererOption.type) {
        console.error(`${consoleTag}amis渲染器注册失败，渲染器类型（type）不能为空。`);
    }
    else {
        // 修正framework数值
        curRendererOption.framework = getFramework(curRendererOption.framework);
        // 修正usage数值
        curRendererOption.usage = getUsage(curRendererOption.usage);
        // 当前支持注册的渲染器类型
        const registerMap = {
            renderer: () => { },
            formitem: () => { },
            options: () => { }, // OptionsControl,
        };
        // 当前支持的技术栈类型
        const resolverMap = {
            react: (i) => i,
            vue2: createVue2Component,
            vue3: createVue2Component,
            jquery: createJQComponent,
        };
        // 支持多技术栈
        const curRendererComponent = resolverMap[curRendererOption.framework](newRenderer);
        // 注册amis渲染器
        if (!registerMap[curRendererOption.usage]) {
            console.error(`${consoleTag}amis渲染器注册失败，暂不支持${curRendererOption.usage}组件类型。`);
        }
        else {
            /*
            // 直接调用amis注册器进行注册
            registerMap[curRendererOption.usage]({
              type: curRendererOption.type,
              weight: curRendererOption.weight,
            })(curRendererComponent);
            */
            // 通过 postMessage 告知 amis 注册一个新的渲染器
            if (window && window.postMessage) {
                const newComponentType = AddAmisCustomRenderer(curRendererOption.type, {
                    type: curRendererOption.type,
                    weight: curRendererOption.weight,
                    usage: curRendererOption.usage,
                    framework: curRendererOption.framework,
                    component: curRendererComponent,
                    config: curRendererOption,
                });
                if (newComponentType) {
                    console.info(`${consoleTag}触发注册amis渲染器(${newComponentType})事件`);
                    window.postMessage({
                        type: 'amis-renderer-register-event',
                        eventMsg: `${consoleTag}注册一个自定义amis渲染器`,
                        amisRenderer: {
                            type: newComponentType,
                            weight: curRendererOption.weight,
                            usage: curRendererOption.usage,
                            config: curRendererOption,
                        },
                    }, '*');
                }
            }
        }
    }
}
function AddAmisCustomRenderer(componentType, rendererData) {
    if (window && !window.AmisCustomRenderers) {
        window.AmisCustomRenderers = {};
    }
    if (!window.AmisCustomRenderers[componentType]) {
        window.AmisCustomRenderers[componentType] = rendererData;
        return componentType;
    }
    else {
        console.error(`${consoleTag}注册amis渲染器失败，已存在重名渲染器(${componentType})。`);
    }
    return null;
}

export { createVue2Component, registerAmisEditorPlugin, registerRendererByType };
