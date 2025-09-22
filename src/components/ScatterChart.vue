<template>
	<v-chart ref="showChartRef" class="chart" :option="option" autoresize @click="handleChartClick" />
</template>

<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { ScatterChart } from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, inject, watch } from 'vue';
import { showsChartData, shows } from '../data/realityTvData';

use([
	CanvasRenderer,
	ScatterChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
]);

const selectedShow = inject('selectedShow');
const showChartRef = ref(null);

// ref weg?
const option = ref({
	xAxis: {
		name: 'Realität',
		nameLocation: 'middle',
		nameGap: 25,
		min: 0,
		max: 7,
		splitLine: {
			lineStyle: {
				type: "dashed",
			},
		},
	},
	yAxis: {
		name: 'Ethische Vertretbarkeit',
		nameLocation: 'middle',
		nameGap: 25,
		min: 0,
		max: 7,
		splitLine: {
			lineStyle: {
				type: "dashed",
			},
		},
	},
	tooltip: {
		show: true,
		trigger: 'item',
		position: 'top',
		formatter: function (params) {
			return (
				params.data[2]
			);
		}
	},
	series: [
		{
			name: 'RealityValues',
			symbolSize: 20,
			data: showsChartData,
			type: 'scatter',
			symbolSize: function (data) {
        return Math.sqrt(data[4]) / 60;
      },
			itemStyle: {
				shadowBlur: 10,
				shadowColor: 'rgba(120, 36, 50, 0.5)',
				shadowOffsetY: 3,
				color: '#2b35af',
			},
			emphasis: {
				focus: 'series',
				itemStyle: {
					color: '#ff6347',
				},
			},
		},
	],
});


function handleChartClick(event) {
	const clickedData = event.data;
	const index = clickedData[3];

	if (index !== -1) {
		const selected = shows.value[index];
		Object.assign(selectedShow, selected);
	}
}


watch(selectedShow, (newSelectedShow) => {
  const index = showsChartData.value.findIndex((data) => data[3] === newSelectedShow.id);

  if (index !== -1) {
    const chart = showChartRef.value;

    if (chart) {
      chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index,
      });
    }
  }
});



</script>

<style scoped>
.chart {
	height: 100vh;
	width: 50vw;
}
</style>
