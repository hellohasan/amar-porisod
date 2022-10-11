<template>
	<card-button :title="$t('Beneficiary')" icon="fas fa-users">
		<template v-slot:button>
			<button v-permission="['beneficiaries-create']" class="btn btn-success btn-sm" @click="createBeneficiary"><i class="fas fa-plus fa-w"></i>
				{{ $t('CustomNew',{name:$t('Beneficiary')}) }}
			</button>
		</template>
		<div class="table-responsive">
			<table class="table table-bordered table-striped display dt-responsive nowrap" style="width:100%" id="sampleTable">
				<thead>
					<tr>
						<th>{{ $t('SL') }}</th>
						<th>{{ $t('CreatedAt') }}</th>
						<th>{{ $t('NID') }}</th>
						<th>{{ $t('Name') }} - {{ $t('Phone') }}</th>
						<th>{{ $t('WardNumber') }}</th>
						<th>{{ $t('TotalBenefit') }}</th>
						<th>{{ $t('Status') }}</th>
						<th class="not-export-col">{{ $t('Action') }}</th>
					</tr>
				</thead>
			</table>
		</div>
		<form-modal-create-edit @storeData="storeBeneficiary" @updateData="updateBeneficiary" title="Beneficiary" :form="form">
			<form-group-select :form="form" v-model="form.ward_id" name="ward_id" :options="wards" :label="$t('SelectWardNumber')"></form-group-select>
			<form-group-input :form="form" v-model="form.nid" name="nid" v-mask="'#############'" :label="$t('BeneficiaryNID')"></form-group-input>
			<form-group-input :form="form" v-model="form.name" name="name" :label="$t('BeneficiaryName')"></form-group-input>
			<form-group-input :form="form" v-model="form.phone" name="phone" v-mask="'###########'" :label="$t('BeneficiaryPhone')"></form-group-input>
			<form-group-toggle :form="form" v-model="form.status" id="status" :label="$t('Status')"></form-group-toggle>
		</form-modal-create-edit>
	</card-button>
</template>

<script>
	import Pad from './Pad'
	export default {
		name: "Beneficiary",
		components: {
			Pad,
		},
		data() {
			return {
				form: new Form({
					nid: '',
					name: '',
					phone: '',
					status: true,
				}),
				editMode: false,
				editId: null,
				wards: [],
				beneficiaries: []
			}
		},
		methods: {
			createBeneficiary() {
				this.editMode = false;
				this.editId = null;
				this.openMyModal();
			},
			async storeBeneficiary() {
				await this.form.post('/api/beneficiaries').then((res) => {
					this.successCreateMessage();
					this.loadBeneficiaries();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error));
			},
			async editBeneficiary(id) {
				this.editMode = true;
				await axios.get(`/api/beneficiaries/${id}/edit`).then(({ data }) => {
					this.editId = id;
					this.openMyModal();
					this.form.fill(data);
				}).catch((error) => console.log(error))
			},
			async updateBeneficiary() {
				await this.form.put(`/api/beneficiaries/${this.editId}`).then((res) => {
					this.successUpdateMessage();
					this.loadBeneficiaries();
					$('#myModal').modal('hide');
				}).catch((error) => console.log(error))
			},
			openMyModal() {
				this.form.clear();
				this.form.reset();
				this.$root.$emit('openCustomModal', this.editMode);
			},
			loadWardList() {
				axios.get('/api/load-ward-list').then((res) => {
					this.wards = res.data;
				})
			},
			async loadBeneficiaries() {
				await this.myServerDataTable('/api/beneficiaries', [
					{ data: 'id', name: 'id', orderable: true, searchable: false, },
					{ data: 'created_at', name: 'created_at', orderable: true, searchable: true, },
					{ data: 'nid', name: 'nid', orderable: true, searchable: true, },
					{ data: 'custom_name', name: 'custom_name', orderable: true, searchable: true, },
					{ data: 'ward_id', name: 'ward_id', orderable: false, searchable: true, },
					{ data: 'total', name: 'total', orderable: true, searchable: false, },
					{ data: 'status', name: 'status', orderable: true, searchable: false, },
					{ data: 'action', name: 'action', searchable: false, sortable: false },
				]);
			}
		},
		created() {
			this.loadWardList();
			this.loadBeneficiaries();
		},
		mounted() {
			window.addEventListener('click', event => {
				let target = event.target;
				if (target && target.localName === 'button' && target.dataset.id) {
					event.preventDefault();
					event.stopPropagation();
					let id = target.dataset.id;
					let action = target.dataset.action;
					if (id && action == 'edit') {
						this.editBeneficiary(id);
					} else if (id && action == 'delete') {
						this.deleteConfirm().then(() => {
							axios.delete(`/api/beneficiaries/${id}`).then(() => {
								this.successDeleteMessage();
								this.loadBeneficiaries();
							}).catch((error) => console.log(error));
						});
					}
				}
			})
		},
	}
</script>

<style lang="scss" scoped>
</style>
