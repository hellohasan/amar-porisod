<template>
	<Fragment>

		<li v-role="['Super Admin','Chairman','Secretary']" class="nav-header">{{ $t('BasicSetting') }}</li>

		<li v-permission="['beneficiaries']" class="nav-item">
			<router-link to="/beneficiaries" class="nav-link">
				<i class="nav-icon fas fa-users cyan"></i>
				<p>{{ $t('Beneficiary') }}</p>
			</router-link>
		</li>

		<li v-permission="['recommenders']" class="nav-item">
			<router-link to="/recommenders" class="nav-link">
				<i class="nav-icon fas fa-user-shield cyan"></i>
				<p>{{ $t('Recommender') }}</p>
			</router-link>
		</li>

		<li v-permission="['wards']" class="nav-item">
			<router-link to="/wards" class="nav-link">
				<i class="nav-icon fas fa-globe cyan"></i>
				<p>{{ $t('WardList') }}</p>
			</router-link>
		</li>

	</Fragment>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
</style>
