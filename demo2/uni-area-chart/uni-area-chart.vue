<template>
  <div class="u-charts-container">
    <canvas
      v-if="chartId"
      :canvas-id="chartId"
      :id="chartId"
      class="u-charts"
      @touchend="tap"
      ref="uchartRef"
    ></canvas>
  </div>
</template>
<script setup>
/**
 * vue3 组合式 API 写法示例
 */
import { ref, onMounted, onUpdated, computed, getCurrentInstance } from 'vue';
import uCharts from '@qiun/ucharts';

// 图表详细配置说明请见：https://www.ucharts.cn/v2/#/guide/index
var uChartsInstance = {};

/**
 * vue3 setup 类型自定义组件
 * 通过 curVueInstance.exposed 实时获取amis的props数据
 * 备注: curVueInstance.exposed 非响应式
 */
const curVueInstance = getCurrentInstance();
const props = curVueInstance.exposed;

// 当前canvas
const uchartRef = ref(null);

// 默认图表数据
const defaultChartData = {
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

// 计算属性
const chartId = curVueInstance.exposed.id || 'area-uChart';

onMounted(() => {
  const thisCategories = props.categories && props.categories.length > 0
    ? props.categories
    : defaultChartData.categories;
  const thisSeries = props.series && props.series.length > 0 ? props.series : defaultChartData.series;
  // 确保编辑器端，右侧属性配置面板调整后图表会及时更新
  drawCharts(chartId, {
    categories: thisCategories,
    series: thisSeries
  });
});

onUpdated(() => {
  const chartId = curVueInstance.exposed.id || 'area-uChart';
  const thisCategories = props.categories && props.categories.length > 0
    ? props.categories
    : defaultChartData.categories;
  const thisSeries = props.series && props.series.length > 0 ? props.series : defaultChartData.series;
  // 确保编辑器端，右侧属性配置面板调整后图表会及时更新
  drawCharts(chartId, {
    categories: thisCategories,
    series: thisSeries
  });
});

function drawCharts(id, data) {
  const canvas = uchartRef.value;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext('2d');
  uChartsInstance[id] = new uCharts({
    type: 'area',
    context: ctx,
    width: canvas.width,
    height: canvas.height,
    categories: data.categories,
    series: data.series,
    animation: true,
    background: '#ffffff',
    padding: [15, 15, 0, 5],
    xAxis: {
      disableGrid: true
    },
    yAxis: {
      data: [{ min: 0 }]
    },
    color: [
      '#1890FF',
      '#91CB74',
      '#FAC858',
      '#EE6666',
      '#73C0DE',
      '#3CA272',
      '#FC8452',
      '#9A60B4',
      '#ea7ccc'
    ],
    legend: {},
    extra: {
      area: {
        type: 'straight',
        opacity: 0.2,
        addLine: true,
        width: 2,
        gradient: false
      }
    }
  });
}

function tap(e) {
  uChartsInstance[e.target.id].touchLegend(e);
  uChartsInstance[e.target.id].showToolTip(e);
}
</script>

<style scoped lang="scss">
.u-charts-container {
  display: flex;
  align-items: center;
  justify-content: center;

  .u-charts {
    margin: 10px auto;
    width: 370px;
    height: 280px;
  }
}
</style>
