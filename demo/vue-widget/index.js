// @ts-ignore
// import { registerRendererByType } from '../../dist/index.umd';
import { registerRendererByType } from '../../src/main';
import InfoCard from './info-card';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});
