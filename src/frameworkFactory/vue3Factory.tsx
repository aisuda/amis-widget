/**
 * @file 自定义组件所需的 vue3.0 对接
 */
import React from 'react';
// @ts-ignore
import { createApp, getCurrentInstance, ref, isProxy, shallowRef } from 'vue';
import { isObject, extendObject } from '../utils';

export function createVue3Component(vueObj: any) {
  if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
    return;
  }

  class VueFactory extends React.Component<any> {
    domRef: any;
    app: any;
    vm: any;
    isUnmount: boolean;

    constructor(props: any) {
      super(props);
      this.domRef = React.createRef();
      this.resolveAmisProps = this.resolveAmisProps.bind(this);
    }

    componentDidMount() {
      const { amisData, amisFunc } = this.resolveAmisProps();

      const { data, ...rest } = (vueObj =
        typeof vueObj === 'function' ? new vueObj() : vueObj);

      // 传入的Vue属性
      this.app = createApp({
        data: () =>
          extendObject(amisData, typeof data === 'function' ? data() : data),
        ...rest,
        props: extendObject(amisFunc, rest.props || {}),
      });
      this.vm = this.app.mount(this.domRef.current);
    }

    componentDidUpdate() {
      if (!this.isUnmount) {
        const { amisData } = this.resolveAmisProps();
        if (this.vm) {
          // this.vm.$data.props = amisData; // 此方法无效
          Object.keys(amisData).forEach((key) => {
            this.vm[key] = amisData[key];
          });
        }
      }
    }

    componentWillUnmount() {
      this.isUnmount = true;
      this.app.unmount();
    }

    resolveAmisProps() {
      let amisFunc: any = {};
      let amisData: any = {};

      Object.keys(this.props).forEach((key) => {
        const value = this.props[key];
        if (typeof value === 'function') {
          amisFunc[key] = value;
        } else {
          if (isProxy(value)) {
            amisData[key] = shallowRef(value);
          } else if (isObject(value)) {
            amisData[key] = ref(value);
          } else {
            // 非对象类数据无需特殊处理
            amisData[key] = value;
          }
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
