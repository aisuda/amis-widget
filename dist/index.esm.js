import { registerEditorPlugin, BasePlugin } from 'amis-editor';
export { getSchemaTpl } from 'amis-editor';
import { utils, Renderer, FormItem, OptionsControl } from 'amis';
import React from 'react';
import 'jquery';
import ReactDOM from 'react-dom';
import Vue from 'vue';

const npmCustomWidgetTag = 'npm-custom'; // npm自定义组件前缀
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
            console.error('amis=widget不支持vue3.0技术栈，请改用vue3-amis-widget支持。');
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
        // 2.添加自定义组件前缀
        addNpmCustomPrefixByProto(EditorPluginClass.prototype);
        _isEditorPlugin = true;
    }
    return _isEditorPlugin;
}
// 给当前自定义组件增加特殊前缀
function addNpmCustomPrefixByProto(_editorPluginPrototype) {
    if (!_editorPluginPrototype) {
        return;
    }
    // 关联渲染器字段
    if (_editorPluginPrototype.rendererName &&
        _editorPluginPrototype.rendererName.indexOf(npmCustomWidgetTag) < 0) {
        _editorPluginPrototype.rendererName = `${npmCustomWidgetTag}-${_editorPluginPrototype.rendererName}`;
    }
    // 自定义插件名称
    /*if (_editorPluginPrototype.name && _editorPluginPrototype.name.indexOf(npmCustomWidgetTag) < 0) {
      _editorPluginPrototype.name = `${npmCustomWidgetTag}-${_editorPluginPrototype.name}`
    }*/
    // 自定义插件预览对象
    if (_editorPluginPrototype.previewSchema &&
        _editorPluginPrototype.previewSchema.type &&
        _editorPluginPrototype.previewSchema.type.indexOf(npmCustomWidgetTag) < 0) {
        _editorPluginPrototype.previewSchema.type = `${npmCustomWidgetTag}-${_editorPluginPrototype.previewSchema.type}`;
    }
    // 自定义插件脚手架
    if (_editorPluginPrototype.scaffold &&
        Array.isArray(_editorPluginPrototype.scaffold)) {
        _editorPluginPrototype.scaffold.map((scaffold) => {
            if (scaffold.type.indexOf(npmCustomWidgetTag) < 0) {
                scaffold.type = `${npmCustomWidgetTag}-${scaffold.type}`;
            }
            return scaffold;
        });
    }
    else if (_editorPluginPrototype.scaffold &&
        _editorPluginPrototype.scaffold.type &&
        _editorPluginPrototype.scaffold.type.indexOf(npmCustomWidgetTag) < 0) {
        _editorPluginPrototype.scaffold.type = `${npmCustomWidgetTag}-${_editorPluginPrototype.scaffold.type}`;
    }
    return _editorPluginPrototype;
}
// 给当前自定义组件增加特殊前缀（custom-）
function addCustomPrefixType(_type) {
    let curType = _type;
    if (!_type) {
        return curType;
    }
    if (_type && _type.indexOf(npmCustomWidgetTag) < 0) {
        curType = `${npmCustomWidgetTag}-${_type}`;
    }
    return curType;
}
// 判断是否是字符串类型
function isString(str) {
    return Object.prototype.toString.call(str).slice(8, -1) === 'String';
}

/**
 * registerAmisEditorPlugin: 注册 amis-editor 插件
 *【方法参数说明】
 * _editorPlugin: 新的自定义插件,
 * pluginOption: {
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
    class newEditorPlugin extends BasePlugin {
        constructor(props) {
            super(props);
            // console.info(`${consoleTag}初始化自定义amis-editor插件:`, this);
        }
    }
    // 将用户自定义的插件相关属性设置到新插件对象的prototype中
    Object.assign(newEditorPlugin.prototype, new _EditorPlugin());
    // 将用户的配置属性设置到新插件对象的prototype中
    Object.assign(newEditorPlugin.prototype, pluginOption);
    if (isEditorPlugin(newEditorPlugin)) {
        Object.assign(newEditorPlugin.prototype, {
            isNpmCustomWidget: true, // npm自定义插件标识
        });
        // const curEditorPlugins:any = getEditorPlugins();
        const newEditorPluginPrototype = newEditorPlugin.prototype;
        // 注册为amis-editor插件
        registerEditorPlugin(newEditorPlugin);
        // 触发sessionStorageChange：告知amis-editor
        if (window && window.postMessage) {
            window.postMessage({
                type: 'amis-widget-register-event',
                eventMsg: `${consoleTag}注册一个自定义amis-editor插件`,
                // editorPluginIndex: curEditorPlugins.length,
                editorPluginName: newEditorPluginPrototype.name,
            }, '*');
        }
        console.info(`${consoleTag}注册了一个自定义amis-editor插件:`, newEditorPluginPrototype);
    }
    return newEditorPlugin;
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
        constructor(props) {
            super(props);
            this.domRef = React.createRef();
            this.resolveAmisProps = this.resolveAmisProps.bind(this);
            this.renderChild = this.renderChild.bind(this);
        }
        componentDidMount() {
            const { amisData, amisFunc } = this.resolveAmisProps();
            const { data, ...rest } = (vueObj =
                typeof vueObj === 'function' ? new vueObj() : vueObj);
            // 传入的Vue属性
            this.vm = new Vue({
                data: utils.extendObject(amisData, typeof data === 'function' ? data() : data),
                ...rest,
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
        render() {
            return React.createElement("div", { ref: this.domRef });
        }
    }
    return VueFactory;
}

// import {registerFormItem, registerOptionsControl, registerRenderer} from 'amis';
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
        console.error(`${consoleTag}自定义组件注册失败，自定义组件类型（type）不能为空。`);
    }
    else {
        // 增加NpmCustom前缀
        curRendererOption.type = addCustomPrefixType(curRendererOption.type);
        // 修正framework数值
        curRendererOption.framework = getFramework(curRendererOption.framework);
        // 修正usage数值
        curRendererOption.usage = getUsage(curRendererOption.usage);
        // 当前支持注册的渲染器类型
        const registerMap = {
            renderer: Renderer,
            formitem: FormItem,
            options: OptionsControl,
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
            console.error(`${consoleTag}自定义组件注册失败，不存在${curRendererOption.usage}自定义组件类型。`);
        }
        else {
            registerMap[curRendererOption.usage]({
                type: curRendererOption.type,
                weight: curRendererOption.weight,
            })(curRendererComponent);
            // 记录当前创建的amis自定义组件
            console.info('注册了一个自定义amis组件:', {
                type: curRendererOption.type,
                weight: curRendererOption.weight,
                component: curRendererComponent,
                framework: curRendererOption.framework,
                usage: curRendererOption.usage,
            });
        }
    }
}

export { registerAmisEditorPlugin, registerRendererByType };
