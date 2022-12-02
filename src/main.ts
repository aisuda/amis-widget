/**
 * amis-widget: 组件开发工具集
 *
 * 【提供的工具方法清单】
 * registerRendererByType: 根据type类型注册amis普通渲染器、amis表单渲染器、amis表单控件渲染器
 * registerAmisEditorPlugin: 注册 amis-editor 插件
 */
export {
  registerAmisEditorPlugin,
  getSchemaTpl,
  BasePlugin,
} from './function/registerAmisEditorPlugin';
export { registerRendererByType } from './function/registerRendererByType';
