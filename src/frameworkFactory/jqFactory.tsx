/**
 * @file 自定义组件所需的 jQuery 对接
 */
import React from 'react';
import 'jquery';

export function createJQComponent(jqueryObj: any) {
  if (
    !jqueryObj ||
    (typeof jqueryObj !== 'function' && typeof jqueryObj !== 'object')
  ) {
    return;
  }

  class JQFactory extends React.Component {
    dom: any;
    instance;

    constructor(props: any) {
      super(props);
      this.domRef = this.domRef.bind(this);
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

    render() {
      return <div ref={this.domRef}></div>;
    }
  }

  return JQFactory;
}
