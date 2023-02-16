/**
 * @file 自定义组件所需的 vue2.0 对接
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';
import { ScopedContext, IScopedContext, RendererProps } from 'amis-core';
import { extendObject } from '../utils';

export function createVue2Component(vueObj: any) {
  if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
    return;
  }

  class VueFactory extends React.Component<RendererProps> {
    domRef: any;
    vm: any;

    // 指定 contextType 读取当前的 scope context。
    // React 会往上找到最近的 scope Provider，然后使用它的值。
    static contextType = ScopedContext;

    constructor(props: RendererProps, context: IScopedContext) {
      super(props);
      this.domRef = React.createRef();

      const scoped = context;
      scoped.registerComponent(this);

      this.resolveAmisProps = this.resolveAmisProps.bind(this);
      this.renderChild = this.renderChild.bind(this);
    }

    componentDidMount() {
      const { amisData, amisFunc } = this.resolveAmisProps();
      const { data, ...rest } = (vueObj =
        typeof vueObj === 'function' ? new vueObj() : vueObj);
      // 传入的Vue属性
      this.vm = new Vue({
        data: extendObject(
          amisData,
          typeof data === 'function' ? data() : data,
        ),
        ...rest,
        props: rest.props || {},
      });
      Object.keys(amisFunc).forEach((key) => {
        this.vm.$props[key] = amisFunc[key];
        if (key === 'render') {
          // 避免和vue中的render冲突
          this.vm.$props['renderChild'] = (
            schemaPosition: string,
            childSchema: any,
            insertElemId: string,
          ) => {
            this.renderChild(schemaPosition, childSchema, insertElemId);
          };
        }
      });

      this.domRef.current.appendChild(this.vm.$mount().$el);
    }

    // 渲染子元素
    renderChild(
      schemaPosition: string,
      childSchema: any,
      insertElemId: string,
    ) {
      let childElemCont = null;
      if (this.props['render'] && childSchema && insertElemId) {
        const childElem = this.props['render'](schemaPosition, childSchema);
        childElemCont = ReactDOM.render(
          childElem,
          document.getElementById(insertElemId),
        );
      }
      return childElemCont;
    }

    componentDidUpdate() {
      Object.keys(this.props).forEach(
        (key) =>
          typeof this.props[key] !== 'function' &&
          (this.vm[key] = this.props[key]),
      );
      this.vm.$forceUpdate();
    }

    componentWillUnmount() {
      const scoped = this.context as IScopedContext;
      scoped.unRegisterComponent(this);
      this.vm.$destroy();
    }

    resolveAmisProps() {
      let amisFunc: any = {};
      let amisData: any = {};

      Object.keys(this.props).forEach((key) => {
        const value = this.props[key];
        if (typeof value === 'function') {
          amisFunc[key] = value;
        } else {
          amisData[key] = value;
        }
      });
      return { amisData, amisFunc };
    }

    /**
     * amis事件动作处理:
     * 在这里设置自定义组件对外暴露的动作，其他组件可以通过组件动作触发自定义组件的对应动作
     */
    doAction(action: any, args: object) {
      if (this.vm && this.vm.doAction) {
        this.vm.doAction(action, args);
      } else {
        console.warn('自定义组件中不存在doAction。');
      }
    }

    render() {
      return <div ref={this.domRef}></div>;
    }
  }

  return VueFactory;
}
