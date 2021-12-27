// @ts-ignore
import { registerRendererByType } from '../../dist/index.umd';
// import { registerRendererByType } from '../../src/main';

class MyVueText {
  // name和value用的是 amis a配置项中的name和value
  template = `<div> <input type="text" v-bind:name="name" v-model="value" /> </div>`;

  watch = {
    value: (newValue, oldValue) => {
      // 可以触发amis的onChange事件，进行表单项的修改a
      this.$emit('change', newValue);
    }
  }
}

registerRendererByType(MyVueText, {
  type: 'vue-text',
  usage: 'formitem',
  weight: 99,
  framework: 'vue'
});

export default MyVueText;

