/**
 * @file 编辑器扩展, 增加自定义组件
 */
import { registerAmisEditorPlugin } from '../../../src/main';

export class HelloJqueryPlugin {
  // 关联渲染器名字
  rendererName = 'hello-jquery';
  $schema = '/schemas/UnkownSchema.json';
  // 组件名称（组件面板显示的Title）
  name = 'hello-jquery';
  description = 'hello-jquery';
  tags = ['自定义'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'hello-jquery',
    label: 'hello-jquery',
    name: 'hello-jquery'
  };
  previewSchema = {
    type: 'hello-jquery',
    label: 'hello-jquery'
  };

  panelTitle = '配置面板';

  panelControls = [
    {
      type: 'tpl',
      tpl: '可根据变量 \\${amisUser} 获取用户数据。'
    }
  ];
}

/**
 * 备注：如果 HelloJqueryPlugin 已继承 BasePlugin（amis-editor-core），
 * 则直接使用 registerAmisEditorPlugin(HelloJqueryPlugin) 即可完成注册，无需配置参数。
 */
registerAmisEditorPlugin(HelloJqueryPlugin);

export default HelloJqueryPlugin;
