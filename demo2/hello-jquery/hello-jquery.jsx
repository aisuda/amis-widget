import $ from 'jquery';
import { registerRendererByType } from '../../src/main';

class MyJQueryBtn {
  template = `
    <div id="aaa">
        这是个 jquery 按钮 <button id="btn">点我一下</button>
    </div>`;

  onMount(props) {
    $('#btn').click(this.test.bind(this, props));
  };


  reload() {
    console.log('触发jquery自定义组件relod。');
  }

  test(props) {
    props.onAction(
      null,
      {
        actionType: 'dialog',
        dialog: {
          title: '来个弹框',
          body: 'Bom Bom Bom ${a} ${b}'
        }
      },
      {
        a: 1,
        b: 2
      }
    );
  }
}

registerRendererByType(MyJQueryBtn, {
  type: 'hello-jquery',
  usage: 'renderer',
  weight: 98,
  framework: 'jquery'
});

export default MyJQueryBtn;
