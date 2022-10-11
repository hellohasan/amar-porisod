<template>
	<Fragment>
		<li v-role="['Super Admin','Chairman','Secretary']" class="nav-header">{{ $t('ProjectSetting') }}</li>

		<li v-permission="['project-beneficiaries-create']" class="nav-item">
			<router-link to="/project-beneficiaries/create" class="nav-link">
				<i class="nav-icon fas fa-plus cyan"></i>
				<p>{{ $t('NewProjectBeneficiary') }}</p>
			</router-link>
		</li>

		<li v-permission="['project-beneficiaries']" class="nav-item">
			<router-link to="/project-beneficiaries" class="nav-link">
				<i class="nav-icon fas fa-list cyan"></i>
				<p>{{ $t('ProjectBeneficiary') }}</p>
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
