import { registerEditorPlugin, BasePlugin, getSchemaTpl } from 'amis-editor';
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
  if (_EditorPlugin && _EditorPlugin.prototype instanceof BasePlugin) {
    // 如果当前plugin已经继承了BasePlugin，则直接注册自定义插件
    registerPluginAction(_EditorPlugin, pluginOption?.name);
    return _EditorPlugin;
  }
  class NewEditorPlugin extends BasePlugin {
    constructor(props: any) {
      super(props);
      // console.info(`${consoleTag}初始化自定义amis-editor插件:`, this);
    }
  }
  // 将用户自定义的插件相关属性设置到新插件对象的prototype中
  Object.assign(NewEditorPlugin.prototype, new _EditorPlugin());
  if (pluginOption) {
    // 将用户的配置属性设置到新插件对象的prototype中
    Object.assign(NewEditorPlugin.prototype, pluginOption);
  }
  registerPluginAction(NewEditorPlugin, pluginOption?.name);
  return NewEditorPlugin;
}

function registerPluginAction(NewEditorPlugin: any, pluginName?: string) {
  if (NewEditorPlugin && isEditorPlugin(NewEditorPlugin)) {
    // const curEditorPlugins:any = getEditorPlugins();
    const curEditorPluginName: any = pluginName || new NewEditorPlugin().name;
    Object.assign(NewEditorPlugin.prototype, {
      isNpmCustomWidget: true, // npm自定义插件标识
      name: curEditorPluginName,
    });
    // 注册为amis-editor插件
    registerEditorPlugin(NewEditorPlugin);
    // 触发sessionStorageChange：告知amis-editor
    if (window && window.postMessage) {
      window.postMessage(
        {
          type: 'amis-widget-register-event',
          eventMsg: `${consoleTag}注册一个自定义amis-editor插件`,
          // editorPluginIndex: curEditorPlugins.length,
          editorPluginName: curEditorPluginName,
        },
        '*',
      );
    }
  }
}

export { getSchemaTpl, BasePlugin };
