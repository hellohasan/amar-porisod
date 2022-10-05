<template>
	<card-button :title="$t('WardList')" icon="fas fa-globe">
		<template v-slot:button>
			<button v-permission="['wards-create']" class="btn btn-success btn-sm" @click="createWard"><i class="fas fa-plus fa-w"></i>
				{{ $t('CustomNew',{name:$t('Ward')}) }}
			</button>
		</template>
		<div class="table-responsive">
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th>{{ $t('SL') }}</th>
						<th>{{ $t('WardNumber') }}</th>
						<th>{{ $t('Area') }}</th>
						<th>{{ $t('Status') }}</th>
						<th>{{ $t('Action') }}</th>
					</tr>
				</thead>
				<tbody>
					<template v-if="wards.length">
						<tr v-for="(ward,index) in wards" :key="index" :class="{'bg-warning': !ward.status}">
							<td>{{ ++index | numberConversion}}</td>
							<td>{{ ward.name }}</td>
							<td>{{ ward.area }}</td>
							<td>
								<span class="badge" :class="ward.status ? 'badge-success' : 'badge-warning'">{{ward.status ? $t('Activated') : $t('Deactivated')}}</span>
							</td>
							<td>
								<button v-permission="['wards-edit']" class="btn btn-primary btn-sm" @click="editWard(ward)"><i class="far fa-edit"></i> {{$t('Edit')}}</button>
							</td>
						</tr>
					</template>
					<template v-else>
						<tr>
							<td colspan="5" class="text-center">{{ $t('NoRecordFound') }}</td>
						</tr>
					</template>
				</tbody>
			</table>
		</div>

		<!-- Modal -->
		<form-modal-create-edit @storeData="storeWard" @updateData="updateWard" title="Ward" :form="form">
			<form-group-input :form="form" v-model="form.name" name="name" :label="$t('WardNumber')"></form-group-input>
			<form-group-input :form="form" v-model="form.area" name="area" :label="$t('Area')"></form-group-input>
			<form-group-toggle :form="form" v-model="form.status" id="status" :label="$t('Status')"></form-group-toggle>
		</form-modal-create-edit>
	</card-button>
</template>

<script>
	export default {
		name: "Ward",
		data() {
			return {
				form: new Form({
					name: '',
					area: '',
					status: true,
				}),
				editId: null,
				editMode: false,
				wards: []
			}
		},
		methods: {
			createWard() {
				this.form.reset();
				this.form.clear();
				this.editMode = false;
				this.editId = null;
				this.openMyModal();
			},
			storeWard() {
				this.form.post('/api/wards').then((res) => {
					this.successCreateMessage();
					this.loadWards();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error))
			},
			editWard(ward) {
				this.editMode = true;
				this.openMyModal();
				this.editId = ward.id;
				this.form.fill(ward);
			},
			updateWard() {
				this.form.put(`/api/wards/${this.editId}`).then((res) => {
					this.successUpdateMessage();
					this.loadWards();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error));
			},
			openMyModal() {
				this.$root.$emit('openCustomModal', this.editMode);
			},
			loadWards() {
				axios.get('/api/wards').then((res) => {
					this.wards = res.data;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadWards();
		},
	}
</script>

<style lang="scss" scoped>
</style>
