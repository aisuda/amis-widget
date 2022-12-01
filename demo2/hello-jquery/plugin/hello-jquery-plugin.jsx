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
 * 备注：amis-widget 3.0 版 支持直接 注册为自定义插件，无需另外传递配置对象
 */
registerAmisEditorPlugin(HelloJqueryPlugin);

export default HelloJqueryPlugin;
