/**
 * @file 编辑器扩展, 增加自定义插件（组件物料面板展示需要）
 */
// @ts-ignore
import { registerAmisEditorPlugin } from '../../src/main';

export class areaChartPlugin {
  rendererName = 'uni-area-chart';
  $schema = '/schemas/UnkownSchema.json';
  name = '折线区域图';
  description = '基本折线区域图';
  tags = ['自定义图表'];
  icon = 'fa fa-file-code-o';
  scaffold = {
    type: 'uni-area-chart',
    label: '折线区域图',
    name: '折线区域图',
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    series: [
      {
        name: '成交量A',
        data: [35, 8, 25, 37, 4, 20]
      },
      {
        name: '成交量B',
        data: [70, 40, 65, 100, 44, 68]
      },
      {
        name: '成交量C',
        data: [100, 80, 95, 150, 112, 132]
      }
    ]
  };
  previewSchema = {
    type: 'uni-area-chart',
    label: '折线区域图'
  };

  panelTitle = '配置';

  panelControls = [
    {
      type: 'json',
      name: 'categories',
      label: '横轴数据',
      mutable: true,
      value: ['2016', '2017', '2018', '2019', '2020', '2021']
    },
    {
      type: 'json',
      name: 'series',
      label: '图表数据',
      mutable: true,
      value: [
        {
          name: '成交量A',
          data: [35, 8, 25, 37, 4, 20]
        },
        {
          name: '成交量B',
          data: [70, 40, 65, 100, 44, 68]
        },
        {
          name: '成交量C',
          data: [100, 80, 95, 150, 112, 132]
        }
      ]
    }
  ];
}

// 注册自定义插件（aipage-editor组件物料面板需要）
registerAmisEditorPlugin(areaChartPlugin);

export default areaChartPlugin;
