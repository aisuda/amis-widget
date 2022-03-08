import { registerRendererByType } from '../../dist/index';
import InfoCard from './info-card';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});
