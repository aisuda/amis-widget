/**
 * @file 编辑器扩展, 增加自定义组件
 */
// @ts-ignore
import { registerAmisEditorPlugin } from '../../../dist/index.umd';
// import { registerAmisEditorPlugin } from '../../../src/main';

export class VueTextPlugin {
  rendererName = 'vue-text';
  $schema = '/schemas/UnkownSchema.json';
  name = 'vue-text';
  description = 'vue-text';
  tags = ['自定义'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'vue-text',
    label: 'vue-text',
    name: 'vue-text'
  };
  previewSchema = {
    type: 'vue-text',
    label: 'vue-text'
  };

  panelTitle = '输入框';

  panelControls = [
    {
      type: 'text',
      name: 'value',
      label: '输入框默认值',
      value: ''
    }
  ];
}

registerAmisEditorPlugin(VueTextPlugin, {
  rendererName: 'vue-text',
  name: 'vue-text',
  // description: '自定义组件描述',
  tags: ['自定义组件'],
  order: 99,
  // icon: 'fa fa-file-code-o',
  panelTitle: '输入框',
  disabledRendererPlugin: false
});

export default VueTextPlugin;
