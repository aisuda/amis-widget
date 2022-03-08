/**
 * @file 编辑器扩展, 增加自定义组件
 */
import { registerAmisEditorPlugin } from '../../../dist/index';

export class HelloJqueryPlugin {
  rendererName = 'hello-jquery';
  $schema = '/schemas/UnkownSchema.json';
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

registerAmisEditorPlugin(HelloJqueryPlugin, {
  rendererName: 'hello-jquery',
  name: 'hello-jquery',
  // description: '自定义组件描述',
  // tags: ['自定义'],
  order: 98,
  // icon: 'fa fa-file-code-o',
  panelTitle: '配置面板',
  disabledRendererPlugin: false
});

export default HelloJqueryPlugin;
