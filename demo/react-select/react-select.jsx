import React from 'react';
// @ts-ignore
import { registerRendererByType } from '../../dist/index.umd';
// import { registerRendererByType } from '../../src/main';

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

registerRendererByType(MyReactSelect, {
  type: 'react-select',
  usage: 'renderer',
  weight: 100,
  framework: 'react'
});

export default MyReactSelect;

