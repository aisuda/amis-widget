/**
 * @file 自定义组件所需的 vue2.0 对接
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';
import { extendObject } from '../utils';

export function createVue2Component(vueObj: any) {
  if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
    return;
  }

  class VueFactory extends React.Component {
    domRef: any;
    vm: any;

    constructor(props: any) {
      super(props);
      this.domRef = React.createRef();
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

    render() {
      return <div ref={this.domRef}></div>;
    }
  }

  return VueFactory;
}
