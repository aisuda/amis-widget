# amis-widget
> 开发amis自定义组件的工具集（支持react、vue2.0和jQuery技术栈）
- 提供注册amis组件和amis-editor插件的方法；
- 目前支持的技术栈：jQuery、vue2、react，vue3.0技术栈在vue3-amis-widget中支持；
- 支持的amis渲染器类型：renderer（amis普通渲染器）、formitem（amis表单渲染器）、options（amis表单控件渲染器）。

### 提供的方法
- registerRendererByType: 根据type类型注册 amis普通渲染器、amis表单渲染器、amis表单控件渲染器
- registerAmisEditorPlugin: 注册 amis-editor 插件

### 在线Demo
[点击访问在线Demo](https://aisuda.github.io/amis-widget/test/preview.html)

## 快速使用

```
npm install --save amis-widget
```

## 注册amis组件
```tsx
import { registerRendererByType } from 'amis-widget';
class MyReactSelect extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // 调用amis onToggle 方法，变更选择器表单项值
    const {onToggle, options} = this.props;
    const option = options.find(o => o.value === event.target.value);
    if (onToggle) {
      onToggle(option);
    }
  }

  render() {
    // 获取表单项 value 和 options 属性
    const {label, options, title} = this.props;

    return (
      <div className="react-select">
        <span>
          {label}：
        </span>
        <select onChange={this.handleChange} title={title}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

    );
  }
}
// 注册amis普通渲染器
registerRendererByType(MyReactSelect, {
  type: 'react-select',
  usage: 'renderer', // formitem: amis表单渲染器、options: amis表单控件渲染器
  weight: 100,
  framework: 'react'
});

export default MyReactSelect;
```

## 注册amis-editor插件
```tsx
import { registerAmisEditorPlugin } from 'amis-widget';

class ReactSelectPlugin {
  rendererName = 'react-select'; // 对应的amis渲染器
  $schema = '/schemas/UnkownSchema.json';
  name = 'react-select';
  description = 'react-select';
  tags = ['展示']; // 自定义组件分类
  icon = 'fa fa-file-code-o';
  scaffold = { // 插入到页面时需要
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
  previewSchema = { // 组件面板预览时需要
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
  panelTitle = '下拉框'; // 右侧属性面板Title
  panelBody = [ // 右侧属性面板配置项
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
// 注册一个amis-editor插件（仅页面设计器需要，会在自定义组件面板中展示）
registerAmisEditorPlugin(ReactSelectPlugin, {
  rendererName: 'react-select',
  name: 'react-select',
  // description: '自定义组件描述',
  tags: ['自定义组件'],
  order: 100,
  // icon: 'fa fa-file-code-o',
  panelTitle: '配置',
  disabledRendererPlugin: false
});

export default ReactSelectPlugin;
```
