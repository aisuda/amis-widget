// @ts-ignore
import { registerEditorPlugin, BasePlugin } from 'amis-editor/dist/exports'; // getEditorPlugins
// @ts-ignore
export { getSchemaTpl } from 'amis-editor/dist/exports';
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
export function registerAmisEditorPlugin(
  _EditorPlugin: any,
  pluginOption?: PluginOption,
) {
  class newEditorPlugin extends BasePlugin {
    constructor(props: any) {
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
    const newEditorPluginPrototype: any = newEditorPlugin.prototype;
    // 注册为amis-editor插件
    registerEditorPlugin(newEditorPlugin);
    // 触发sessionStorageChange：告知amis-editor
    if (window && window.postMessage) {
      window.postMessage(
        {
          type: 'amis-widget-register-event',
          eventMsg: `${consoleTag}注册一个自定义amis-editor插件`,
          // editorPluginIndex: curEditorPlugins.length,
          editorPluginName: newEditorPluginPrototype.name,
        },
        '*',
      );
    }
    console.info(
      `${consoleTag}注册了一个自定义amis-editor插件:`,
      newEditorPluginPrototype,
    );
  }
  return newEditorPlugin;
}
