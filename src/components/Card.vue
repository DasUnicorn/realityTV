<script setup>
defineProps(['title', 'ethic', 'realness', 'info', 'class'])
</script>

<template>
	<div :class="class">
		<h2>{{ title }}</h2>
		<p> Value ethic: {{ ethic }}</p>
		<p>Value realness: {{ realness }}</p>
		<p>{{ info }}</p>

	</div>
</template>

<style scoped></style>
