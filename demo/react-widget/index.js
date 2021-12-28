import InfoCard from './info-card';
// @ts-ignore
import { registerRendererByType } from '../../dist/index.umd';

registerRendererByType(InfoCard, {
  type: 'react-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'react',
});
