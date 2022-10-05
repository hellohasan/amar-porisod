<template>
	<Fragment>

		<li v-role="['Super Admin','Chairman','Secretary']" class="nav-header">{{ $t('BasicSetting') }}</li>

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
