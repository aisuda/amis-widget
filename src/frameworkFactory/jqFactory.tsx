/**
 * @file 自定义组件所需的 jQuery 对接
 */
import React from 'react';
import 'jquery';
import { ScopedContext, IScopedContext, RendererProps } from 'amis-core';

export function createJQComponent(jqueryObj: any) {
  if (
    !jqueryObj ||
    (typeof jqueryObj !== 'function' && typeof jqueryObj !== 'object')
  ) {
    return;
  }

  class JQFactory extends React.Component<RendererProps> {
    dom: any;
    instance;
    static contextType = ScopedContext;

    constructor(props: any, context: IScopedContext) {
      super(props);
      this.domRef = this.domRef.bind(this);
      const scoped = context;
      scoped.registerComponent(this);

      this.instance =
        typeof jqueryObj === 'function' ? new jqueryObj() : jqueryObj;
    }

    componentDidMount() {
      const { onMount } = this.instance;
      onMount && onMount.apply(this.instance, [this.props]);
    }

    componentDidUpdate(prevProps: any) {
      const { onUpdate } = this.instance;
      onUpdate && onUpdate.apply(this.instance, [this.props, prevProps]);
    }

    componentWillUnmount() {
      const scoped = this.context as IScopedContext;
      scoped.unRegisterComponent(this);
      const { onUnmout } = this.instance;
      onUnmout && onUnmout.apply(this.instance, this.props);
    }

    domRef(dom: any) {
      this.instance.$root = this.dom = dom;
      this._render();
    }

    _render() {
      if (!this.dom) {
        return;
      }

      let template = this.instance.template;

      if (typeof template === 'string') {
        this.dom.innerHTML = template;
      } else if (typeof template === 'function') {
        this.dom.innerHTML = template(this.props);
      }
    }

    /**
     * reload动作处理
     */
    reload() {
      if (this.instance && this.instance.reload) {
        this.instance.reload();
      } else {
        console.warn('自定义组件中暂不支持reload动作。');
      }
    }

    /**
     * amis事件动作处理:
     * 在这里设置自定义组件对外暴露的动作，其他组件可以通过组件动作触发自定义组件的对应动作
     */
    doAction(action: any, args: object) {
      if (this.instance && this.instance.doAction) {
        this.instance.doAction(action, args);
      } else {
        console.warn('自定义组件中不存在doAction。');
      }
    }

    render() {
      return <div ref={this.domRef}></div>;
    }
  }

  return JQFactory;
}
