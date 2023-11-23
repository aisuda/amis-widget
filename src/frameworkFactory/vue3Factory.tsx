/**
 * @file 自定义组件所需的 vue3.0 对接
 */
import React from 'react';
import { ScopedContext, IScopedContext, RendererProps } from 'amis-core';
// @ts-ignore
import { createApp, getCurrentInstance, ref, isProxy, shallowRef } from 'vue';
import { isObject, extendObject } from '../utils';

export function createVue3Component(vueObj: any) {
  if (!vueObj || (typeof vueObj !== 'function' && typeof vueObj !== 'object')) {
    return;
  }

  class VueFactory extends React.Component<RendererProps> {
    domRef: any;
    app: any;
    vm: any;
    isUnmount: boolean;

    // 指定 contextType 读取当前的 scope context。
    // React 会往上找到最近的 scope Provider，然后使用它的值。
    static contextType = ScopedContext;

    constructor(props: RendererProps, context: IScopedContext) {
      super(props);
      this.domRef = React.createRef();

      const scoped = context;
      scoped.registerComponent(this);

      this.resolveAmisProps = this.resolveAmisProps.bind(this);
    }

    componentDidMount() {
      const { amisData, amisFunc } = this.resolveAmisProps();
      const { data, ...rest } = (vueObj =
        typeof vueObj === 'function' ? new vueObj() : vueObj);
      const vueData = typeof data === 'function' ? data() : data;

      const curVueData = extendObject(vueData, amisData);

      // 传入的Vue属性
      this.app = createApp({
        data: () => curVueData,
        ...rest,
        props: extendObject(amisFunc, rest.props || {}),
      });
      this.vm = this.app.mount(this.domRef.current);
    }

    componentDidUpdate() {
      // 备注：vue3 不支持外部更新props。
      if (!this.isUnmount) {
        const { amisData } = this.resolveAmisProps();
        if (this.vm) {
          Object.keys(amisData).forEach((key) => {
            this.vm[key] = amisData[key];
          });
          this.vm.$forceUpdate();
        }
      }
    }

    componentWillUnmount() {
      this.isUnmount = true;
      const scoped = this.context as IScopedContext;
      scoped.unRegisterComponent(this);
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
