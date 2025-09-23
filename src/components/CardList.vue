<script setup>
import { shows } from '@/data/realityTvData';
import Card from './Card.vue';
import { inject, watch, toRaw } from 'vue'
import { useVirtualList } from '@vueuse/core';

const data = shows;
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(data, { itemHeight: 370 })


const selectedShow = inject('selectedShow')

function selectShow(show) {
	Object.assign(selectedShow, show)
}

watch(
  () => selectedShow.id,
  (newId) => {
    const index = toRaw(data.value).findIndex((item) => item.id === newId);
    if (index !== -1) {
      scrollTo(index);
    }
  },
);
</script>

<template>
	<div v-bind="containerProps" class="list">
		<div v-bind="wrapperProps">
			<Card v-for="{ index, data } in list" :key="index" :title="data.title" :ethic="data.ethic"
				:realness="data.realness" :info="data.info" :class="{ selected: selectedShow.id === data.id }"
				@click="selectShow(data)">
			</Card>
		</div>
	</div>
</template>

<style scoped>
.list {
	height: 90vh;
}

.selected {
	background-color: #f0f0f0;
	border: 2px solid #2b35af;
	border-radius: 5px;
	font-weight: bold;
}
</style>
