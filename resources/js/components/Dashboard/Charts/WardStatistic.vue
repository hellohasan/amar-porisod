<template>
	<Fragment>
		<column-chart :download="$t('WardStatistic')" :suffix="` ${$t('Person')}`" :data="chartData"></column-chart>
	</Fragment>
</template>

<script>
	export default {
		name: 'WardStatistic',
		data() {
			return {
				chartData: [],
			}
		},
		methods: {
			loadWardStatistic() {
				axios.get('/api/ward-statistic').then((res) => {
					this.chartData = res.data.data;
				}).catch((error) => console.log(error));
			},
		},
		created() {
			this.loadWardStatistic();
		},
	}
</script>

<style lang="scss" scoped>
</style>
