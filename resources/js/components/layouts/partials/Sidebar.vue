<template>
	<aside class="main-sidebar sidebar-dark-primary elevation-4">
		<!-- Brand Logo -->
		<router-link to="/" class="brand-link">
			<img src="/img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
			<span class="brand-text font-weight-light">SOFT - CMS</span>
		</router-link>

		<!-- Sidebar -->
		<div class="sidebar">
			<!-- Sidebar user panel (optional) -->
			<div class="user-panel mt-3 pb-3 mb-3 d-flex">
				<div class="image">
					<img :src="user.photo" class="img-circle elevation-2" alt="User Image">
				</div>
				<div class="info">
					<a href="#" class="d-block">{{ user.name }}</a>
				</div>
			</div>
			<!-- Sidebar Menu -->
			<nav class="mt-2">
				<!-- <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false"> -->
				<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
					<li class="nav-item">
						<router-link :to="{name:'dashboard'}" class="nav-link">
							<i class="nav-icon fas fa-tachometer-alt cyan"></i>
							<p>{{ $t('Dashboard') }}</p>
						</router-link>
					</li>

					<li class="nav-item" v-permission="['search-beneficiary']">
						<router-link :to="{name:'search-beneficiary'}" class="nav-link">
							<i class="nav-icon fas fa-search cyan"></i>
							<p>{{ $t('SearchBeneficiary') }}</p>
						</router-link>
					</li>

					<!-- Project Setting -->
					<Project></Project>

					<!-- Basic Setting -->
					<Basic></Basic>

					<!-- Settings Section -->
					<li v-role="['Super Admin','Admin','Register']" class="nav-header">{{ $t('GeneralSettings') }}</li>

					<li class="nav-item" v-role="['Super Admin']">
						<router-link :to="{name:'basic-setting'}" class="nav-link">
							<i class="nav-icon fas fa-cog cyan"></i>
							<p>{{ $t('BasicSetting') }}</p>
						</router-link>
					</li>
					<li v-role="['Super Admin','Admin']" class="nav-item">
						<router-link :to="{name:'users'}" class="nav-link">
							<i class="nav-icon fas fa-users-cog cyan"></i>
							<p>{{ $t('ManageUsers') }}</p>
						</router-link>
					</li>
					<li v-role="['Super Admin']" class="nav-item has-treeview">
						<a href="#!" class="nav-link">
							<i class="nav-icon fas fa-tools"></i>
							<p>{{ $t('Role & Permission') }}<i class="fas fa-angle-left right"></i></p>
						</a>
						<ul class="nav nav-treeview" style="display: none;">
							<li class="nav-item">
								<router-link to="/roles" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>{{ $t('Manage Role') }}</p>
								</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/permission" class="nav-link">
									<i class="far fa-circle nav-icon"></i>
									<p>{{ $t('Manage Permission') }}</p>
								</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-item">
						<router-link :to="{name:'profile'}" class="nav-link">
							<i class="nav-icon far fa-user"></i>
							<p>{{ $t('Profile') }}</p>
						</router-link>
					</li>
					<li class="nav-item">
						<a href="#" @click.prevent="logoutHandel" class="nav-link">
							<i class="nav-icon fas fa-sign-out-alt yellow"></i>
							<p>{{ $t('logout') }}</p>
						</a>
					</li>
				</ul>
			</nav>
			<!-- /.sidebar-menu -->
		</div>
		<!-- /.sidebar -->
	</aside>
</template>

<script>
	import { mapGetters } from 'vuex'
	import logoutMix from '../../../mixins/logout'
	import Project from './Menu/Project.vue';
	import Basic from './Menu/Basic.vue';
	export default {
		name: 'Sidebar',
		mixins: [logoutMix],
		components: {
			Basic, Project
		},
		computed: {
			...mapGetters({
				user: 'user/getUser'
			})
		},
		mounted() {
			$('[data-widget="treeview"]').Treeview('init');
		}
	}
</script>

<style>
</style>
