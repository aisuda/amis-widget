import { BasePlugin, getSchemaTpl } from 'amis-editor-core';
/**
 * 自定义editor插件配置项
 */
export interface PluginOption {
    /**
     * 关联的渲染器
     * 备注：可以关联当前的自定义组件，也可以关联平台预置组件和其他自定义组件
     */
    rendererName?: string;
    /**
     * 关联的渲染器
     * 备注：type 和 rendererName 为同一个字段，rendererName 和 type 不能同时存在
     * 目的：兼容用户的错误写法
     */
    type?: string;
    /**
     * 自定义组件名称
     * 在「页面设计器」自定义组件面板中显示
     */
    name?: string;
    /**
     * 自定义组件描述
     * hover自定义组件时展示
     */
    description?: string;
    /**
     * 自定义组件分类
     * 指定当前自定义插件在「页面设计器」自定义组件面板中哪个分类下展示
     */
    tags?: string | Array<string>;
    /**
     * 自定义组件排序
     * 指定当前自定义插件在「页面设计器」自定义组件面板中的展示次序
     */
    order?: number;
    /**
     * 自定义组件icon
     */
    icon?: string;
    /**
     * 属性配置面板Title
     */
    panelTitle?: string;
    /**
     * 自定义组件显隐
     * 备注：设置为true时则不展示
     */
    disabledRendererPlugin?: boolean;
}
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
export declare function registerAmisEditorPlugin(_EditorPlugin: any, pluginOption?: PluginOption): any;
export { getSchemaTpl, BasePlugin };
