<script setup>
import { shows } from '@/data/realityTvData';
import Card from './Card.vue';
import { inject } from 'vue'

const selectedShow = inject('selectedShow')

function selectShow(show) {
	Object.assign(selectedShow, show)
}
</script>

<template>
	<div class="list">
		<Card v-for="show in shows" :key="show.id" :title="show.title" :ethic="show.ethic" :realness="show.realness"
			:info="show.info" :class="{ selected: selectedShow.id === show.id }" @click="selectShow(show)"></Card>
	</div>
</template>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 50%;
}

.selected {
  background-color: #f0f0f0;
  border: 2px solid #2b35af;
  font-weight: bold;
}
</style>
