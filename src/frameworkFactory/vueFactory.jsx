/**
 * @file 自定义组件所需的 vue2.0 对接
 */
import React from 'react';
import Vue from 'vue/dist/vue.min';
import { extendObject } from 'amis/lib/utils/helper';

export function createVue2Component(vueObj) {
  if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
    return;
  }

  class VueFactory extends React.Component {
    domRef;
    vm;

    constructor(props) {
      super(props);
      this.domRef = React.createRef();
      this.resolveAmisProps = this.resolveAmisProps.bind(this);
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
      });

      Object.keys(amisFunc).forEach((key) => {
        const func = amisFunc[key];
        this.vm.$on(
          key,
          (value) => func && func(...(Array.isArray(value) ? value : [value])),
        );
      });

      this.domRef.current.appendChild(this.vm.$mount().$el);
    }

    componentWillUnmount() {
      this.vm.$destroy();
    }

    resolveAmisProps() {
      let amisFunc = {},
        amisData = {};

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

    componentDidUpdate() {
      Object.keys(this.props).forEach(
        (key) =>
          typeof this.props[key] !== 'function' &&
          (this.vm[key] = this.props[key]),
      );
    }

    render() {
      return <div ref={this.domRef}></div>;
    }
  }

  return VueFactory;
}
