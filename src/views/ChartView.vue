<script setup>
import { reactive, provide } from 'vue'
import CardList from "@/components/CardList.vue";
import Headline from "@/components/Headline.vue";
import ScatterChart from "@/components/ScatterChart.vue";

const selectedShow = reactive({
  id: null,
  title: '',
  ethic: null,
  realness: null,
  info: ''
})

provide('selectedShow', selectedShow)

</script>

<template>
	<div class="site">
		<Headline />
		<div class="content">

			<CardList />

			<div class="chart">
				<ScatterChart />
			</div>

		</div>
	</div>
</template>

<style>
.content {
	display: flex;
	flex-direction: row;
}

.site {
	display: flex;
	flex-direction: column;
}

.chart {
	width: 50vw;
}
</style>
