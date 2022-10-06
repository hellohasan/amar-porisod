<template>
	<card-button :title="$t('Recommender')" icon="fas fas fa-user-shield">
		<template v-slot:button>
			<button v-permission="['recommenders-create']" class="btn btn-success btn-sm" @click="createRecommender"><i class="fas fa-plus fa-w"></i>
				{{ $t('CustomNew',{name:$t('Recommender')}) }}
			</button>
		</template>
		<div class="table-responsive">
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>{{ $t('SL') }}</th>
						<th>{{ $t('Photo') }}</th>
						<th>{{ $t('Name') }}</th>
						<th>{{ $t('Phone') }}</th>
						<th>{{ $t('WardNumber') }}</th>
						<th>{{ $t('Role') }}</th>
						<th>{{ $t('TotalRecommendation') }}</th>
						<th>{{ $t('Status') }}</th>
						<th>{{ $t('Action') }}</th>
					</tr>
				</thead>
				<tbody>
					<template v-if="recommenders.length">
						<tr v-for="(recommender, index) in recommenders" :key="index">
							<td>{{ ++index | numberConversion }}</td>
							<td>
								<img :src="recommender.user.photo" class="img-thumbnail" alt="">
							</td>
							<td>{{ recommender.user.name }}</td>
							<td>{{ recommender.user.phone }}</td>
							<td>{{ recommender.ward.name }}</td>
							<td>{{ recommender.user.roles[0].name }}</td>
							<td>{{ 0 | numberConversion | persons}}</td>
							<td>
								<badge :status="recommender.status"></badge>
							</td>
							<td>
								<button v-permission="['recommenders-edit']" class="btn btn-primary btn-sm" @click="editRecommender(recommender)"><i class="far fa-edit"></i> {{$t('Edit')}}</button>
							</td>
						</tr>
					</template>
					<template v-else></template>
				</tbody>
			</table>
		</div>

		<!-- Modal -->
		<form-modal-create-edit @storeData="storeRecommender" @updateData="updateRecommender" title="Recommender" :form="form">
			<form-group-input :form="form" v-model="form.name" name="name" :label="$t('Name')"></form-group-input>
			<form-group-input :form="form" v-model="form.phone" name="phone" v-mask="'###########'" :label="$t('Phone')"></form-group-input>
			<form-group-select :form="form" v-model="form.ward_id" name="ward_id" :options="wards" :label="$t('SelectWardNumber')"></form-group-select>
			<form-group-select :form="form" v-model="form.role_id" name="role_id" :options="roles" :label="$t('SelectRole')"></form-group-select>
			<form-group-input :form="form" v-model="form.password" name="password" type="password" :label="$t('Password')"></form-group-input>
			<div class="form-group" v-if="editMode">
				<img :src="previousImg" class="img-thumbnail" alt="">
			</div>
			<form-group-image :form="form" v-model="form.photo" name="photo" size="300" :label="$t('Photo')"></form-group-image>
			<form-group-toggle :form="form" v-model="form.status" id="status" :label="$t('Status')"></form-group-toggle>
		</form-modal-create-edit>
	</card-button>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "Recommender",
		data() {
			return {
				form: new Form({
					name: '',
					phone: '',
					ward_id: '',
					role_id: '',
					photo: '',
					password: '',
					status: '',
				}),
				editMode: false,
				editId: false,
				previousImg: '',
				wards: [],
				roles: [],
				recommenders: [],
			}
		},
		methods: {
			createRecommender() {
				this.editMode = false;
				this.editId = null;
				this.openMyModal();
			},
			async storeRecommender() {
				await this.form.post('/api/recommenders').then((res) => {
					this.successCreateMessage();
					this.loadRecommenderList();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error));
			},
			editRecommender(recommender) {
				this.editMode = true;
				this.editId = recommender.id;
				this.previousImg = recommender.user.photo;
				this.openMyModal();
				this.form.fill({
					name: recommender.user.name,
					phone: recommender.user.phone,
					ward_id: recommender.ward_id,
					role_id: recommender.user.roles[0].id,
					status: recommender.status,
				});
			},
			async updateRecommender() {
				await this.form.put(`/api/recommenders/${this.editId}`).then((res) => {
					this.successUpdateMessage();
					this.loadRecommenderList();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error));
			},
			openMyModal() {
				this.form.clear();
				this.form.reset();
				this.$root.$emit('openCustomModal', this.editMode);
			},
			loadInitData() {
				axios.get('/api/recommenders/int').then((res) => {
					this.wards = res.data.wards;
					this.roles = res.data.roles;
				}).catch((error) => console.log(error))
			},
			loadRecommenderList() {
				axios.get('/api/recommenders').then((res) => {
					this.recommenders = res.data;
				})
			}
		},
		created() {
			this.loadRecommenderList();
			this.loadInitData();
		},
	}
</script>

<style lang="scss" scoped>
</style>
