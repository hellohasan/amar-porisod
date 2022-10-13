<template>
	<Fragment>
		<bar-chart :download="title" :suffix="` ${$t('Person')}`" :data="chartData"></bar-chart>
	</Fragment>
</template>

<script>
	export default {
		name: 'RecommenderStatistic',
		data() {
			return {
				chartData: [],
				title: ''
			}
		},
		methods: {
			loadRecommenderStatistic() {
				axios.get('/api/recommender-statistic').then((res) => {
					this.title = res.data.title;
					this.chartData = res.data.data;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadRecommenderStatistic();
		},
	}
</script>

<style lang="scss" scoped>
</style>
