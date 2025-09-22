<script setup>
import CameraSVG from './icons/CameraSVG.vue';
import ThumbsUpSVG from './icons/ThumbsUpSVG.vue';

defineProps(['title', 'ethic', 'realness', 'info', 'class'])
</script>

<template>
	<div :class="class">
		<div class="card">
			<div class="headline">
				<h2>{{ title }}</h2>
				<div class="values">
					<div class="value ethic" title="Ethische Korrektheit">
						<ThumbsUpSVG />
						<p class="number">{{ ethic }}</p>
					</div>
					<div class="value realness" title="Realness">
						<CameraSVG />
						<p class="number">{{ realness }}</p>
					</div>
				</div>
			</div>
			<p class="infotext">{{ info }}</p>

			<a class="link">Mehr infos</a>
		</div>
	</div>
</template>

<style scoped>
.headline {
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	padding: 10px 0px;
}
.card {
	padding: 20px;
}

.values {
	display: flex;
	flex-direction: row;
}

.value {
	display: flex;
	flex-direction: row;
	border-radius: 5px;
	margin-right: 5px;
	padding: 5px 10px;
	max-height: 40px;
	align-items: center;
}

.realness {
	background-color: rgb(151, 161, 238)
}

.ethic {
	background-color: rgb(186, 175, 246);
}

.number {
	padding-left: 5px;
	font-weight: bold;
	font-size: medium;
}

.infotext {
	padding: 10px 0px;
	font-size: small;
}

.link {
	color: #2b35af;
	text-decoration: underline;
}
</style>
