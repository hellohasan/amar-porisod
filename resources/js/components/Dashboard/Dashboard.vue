<template>
	<Fragment>
		<card :title="$t('Statistic')" icon="fas fa-fas fa-chart-area">
			<vue-element-loading :active="!Object.keys(totals).length" color="#FF6700" :text="$t('PleaseWait')" spinner="line-wave" />
			<div class="row">
				<div class="col-lg-4 col-6">
					<div class="small-box bg-primary">
						<div class="inner">
							<h3>{{ totals.total_beneficiary | numberConversion | persons }}</h3>
							<p>{{ $t('TotalBeneficiary') }}</p>
						</div>
						<div class="icon">
							<i class="fas fa-user"></i>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-6">
					<div class="small-box bg-info">
						<div class="inner">
							<h3>{{ totals.total_recommender | numberConversion | persons }}</h3>
							<p>{{ $t('TotalRecommender') }}</p>
						</div>
						<div class="icon">
							<i class="fas fa-user-shield"></i>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-6">
					<div class="small-box bg-success">
						<div class="inner">
							<h3>{{ totals.total_user | numberConversion | persons }}</h3>
							<p>{{ $t('TotalUser') }}</p>
						</div>
						<div class="icon">
							<i class="fas fa-users"></i>
						</div>
					</div>
				</div>
			</div>
		</card>

		<card :title="$t('WardStatistic')" icon="fas fa-fas fa-chart-column">
			<ward-statistic></ward-statistic>
		</card>

		<card :title="$t('RecommenderStatistic')" icon="fas fa-fas fa-chart-area">
			<recommender-statistic></recommender-statistic>
		</card>
	</Fragment>
</template>

<script>
	import RecommenderStatistic from './Charts/RecommenderStatistic.vue';
	import WardStatistic from './Charts/WardStatistic.vue';
	export default {
		name: 'Dashboard',
		components: {
			RecommenderStatistic,
			WardStatistic
		},
		data() {
			return {
				show: false,
				totals: '',
				fees: ''
			}
		},
		methods: {
			loadDashboard() {
				axios.get('/api/dashboard').then((res) => {
					this.totals = res.data;
				});
			}
		},
		created() {
			this.loadDashboard();
		},
	}
</script>

<style>
</style>
