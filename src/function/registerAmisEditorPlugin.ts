// @ts-ignore
import { BasePlugin, getSchemaTpl } from 'amis-editor-core';
import { isEditorPlugin, consoleTag } from '../utils';
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

declare const window: Window & {
  postMessage: any;
  AMISEditorCustomPlugins: any;
};

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
export function registerAmisEditorPlugin(
  _EditorPlugin: any,
  pluginOption?: PluginOption,
) {
  const rendererName = pluginOption?.rendererName || pluginOption?.type;
  // 如果当前plugin已经继承了BasePlugin，则直接注册自定义插件
  if (_EditorPlugin && _EditorPlugin.prototype instanceof BasePlugin) {
    registerPluginAction(_EditorPlugin, rendererName);
    return _EditorPlugin;
  }
  // 如果自定义插件并未继承BasePlugin，则自动为其进行包裹处理
  class NewEditorPlugin extends BasePlugin {
    constructor(props: any) {
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

function registerPluginAction(NewEditorPlugin: any, rendererName?: string) {
  if (NewEditorPlugin && isEditorPlugin(NewEditorPlugin)) {
    const curEditorPluginName: any =
      rendererName || new NewEditorPlugin().rendererName;
    Object.assign(NewEditorPlugin.prototype, {
      isNpmCustomWidget: true, // npm自定义插件标识
      name: curEditorPluginName,
    });
    // registerEditorPlugin(NewEditorPlugin); // 3.0 无需直接注册为amis-editor插件
    // 通过 postMessage 告知 amis-editor 注册一个新的插件
    if (window && window.postMessage) {
      const newComponentType = AddCustomEditorPlugin(
        curEditorPluginName,
        NewEditorPlugin,
      );
      if (newComponentType) {
        console.info(
          `${consoleTag}触发注册自定义插件(${curEditorPluginName})事件`,
        );
        window.postMessage(
          {
            type: 'amis-widget-register-event',
            eventMsg: `${consoleTag}注册一个自定义amis-editor插件`,
            editorPluginName: curEditorPluginName,
          },
          '*',
        );
      }
    }
  }
}

function AddCustomEditorPlugin(componentType: string, plugin: any) {
  if (window && !window.AMISEditorCustomPlugins) {
    window.AMISEditorCustomPlugins = {};
  }
  if (!window.AMISEditorCustomPlugins[componentType]) {
    window.AMISEditorCustomPlugins[componentType] = plugin;
    return componentType;
  } else {
    console.error(
      `${consoleTag}注册自定义插件失败，已存在同名插件(${componentType})。`,
    );
  }
  return null;
}

export { getSchemaTpl, BasePlugin };
