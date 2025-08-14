import { computed, ref } from 'vue'

export const shows = ref([
	{ id: 0, ethic: 4, realness: 7, title: 'First Entry', info: 'test' },
	{ id: 1, ethic: 1, realness: 7, title: 'My journey with Vue', info: 'test' },
	{ id: 2, ethic: 2, realness: 4, title: 'Too Hot to Handle', info: 'A Netflix show' },
	{ id: 3, ethic: 5, realness: 1, title: 'The Bachelore', info: 'A RTL SHOW!' },
])

export const showsChartData = computed(() =>
	shows.value.map((show) => [show.ethic, show.realness, show.title, show.id])
)