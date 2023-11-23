// @ts-ignore
import { registerRendererByType } from '../../src/main';
// @ts-ignore
import uniAreaChart from './uni-area-chart';

registerRendererByType(uniAreaChart, {
  type: 'uni-area-chart',
  framework: 'vue3'
});
