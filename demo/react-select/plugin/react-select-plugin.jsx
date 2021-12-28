// @ts-ignore
import { registerAmisEditorPlugin } from '../../../dist/index.umd';
// import { registerAmisEditorPlugin } from '../../../src/main';

class ReactSelectPlugin {
  rendererName = 'react-select';
  $schema = '/schemas/UnkownSchema.json';
  name = 'react-select';
  description = 'react-select';
  tags = ['自定义'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'react-select',
    label: 'react-select',
    name: 'react-select',
    options: [
      {
        label: 'A',
        value: 'a'
      },
      {
        label: 'B',
        value: 'b'
      },
      {
        label: 'C',
        value: 'c'
      }
    ]
  };
  previewSchema = {
    type: 'react-select',
    label: 'react-select',
    options: [
      {
        label: 'A',
        value: 'a'
      },
      {
        label: 'B',
        value: 'b'
      },
      {
        label: 'C',
        value: 'c'
      }
    ]
  };

  panelTitle = '下拉框';
  panelBody = [
    {
      type: 'input-text',
      name: 'label',
      label: 'label',
      value: 'react-select'
    },
    {
      type: 'textarea',
      name: 'title',
      label: 'hover title',
      value: '点击下拉选择数值'
    },
    {
      type: 'tpl',
      tpl: '备注：可根据变量 \\${amisUser} 获取用户数据。'
    }
  ];
}

registerAmisEditorPlugin(ReactSelectPlugin, {
  rendererName: 'react-select',
  name: 'react-select',
  // description: '自定义组件描述',
  // tags: ['自定义'],
  order: 100,
  // icon: 'fa fa-file-code-o',
  panelTitle: '配置',
  disabledRendererPlugin: false
});

export default ReactSelectPlugin;
