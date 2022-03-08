import InfoCard from './info-card';
import { registerRendererByType } from '../../dist/index';

registerRendererByType(InfoCard, {
  type: 'react-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'react',
});
