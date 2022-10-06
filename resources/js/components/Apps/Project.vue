<template>
	<card-button :title="$t('Projects')" icon="fas fa-layer-group">
		<template v-slot:button>
			<button v-permission="['beneficiaries-create']" class="btn btn-success btn-sm" @click="createProject"><i class="fas fa-plus fa-w"></i>
				{{ $t('CustomNew',{name:$t('Project')}) }}
			</button>
		</template>
		<div class="table-responsive">
			<table class="table table-bordered table-striped display dt-responsive nowrap" style="width:100%" id="sampleTable">
				<thead>
					<tr>
						<th>{{ $t('SL') }}</th>
						<th>{{ $t('CreatedAt') }}</th>
						<th>{{ $t('ProjectName') }}</th>
						<th>{{ $t('ProjectInfo') }}</th>
						<th>{{ $t('Recommenders') }}</th>
						<th>{{ $t('Status') }}</th>
						<th class="not-export-col">{{ $t('Action') }}</th>
					</tr>
				</thead>
			</table>
		</div>
		<form-modal-create-edit @storeData="storeProject" @updateData="updateProject" title="Project" :form="form">
			<form-group-input :form="form" v-model="form.name" name="name" :label="$t('ProjectName')"></form-group-input>
			<form-group-date :form="form" v-model="form.date" name="date" :label="$t('ProjectDate')"></form-group-date>
			<form-group-input :form="form" v-model="form.total" name="total" :label="$t('TotalBeneficiary')" type="number"></form-group-input>
			<form-group-select-multiple :form="form" v-model="form.recommenders" name="recommenders" :options="recommenders" :label="$t('Recommenders')" type="number"></form-group-select-multiple>
			<form-group-toggle :form="form" v-model="form.status" id="status" :label="$t('Status')"></form-group-toggle>
		</form-modal-create-edit>
	</card-button>
</template>

<script>
	export default {
		name: "Project",
		data() {
			return {
				form: new Form({
					name: '',
					date: '',
					total: '',
					recommenders: []
				}),
				editMode: false,
				editId: null,
				recommenders: [],
				projects: []
			}
		},
		methods: {
			createProject() {
				this.editMode = false;
				this.editId = null;
				this.openMyModal();
			},
			storeProject() {

			},
			updateProject() {

			},
			openMyModal() {
				this.form.clear();
				this.form.reset();
				this.$root.$emit('openCustomModal', this.editMode);
			},
			loadRecommenders() {
				axios.get('/api/load-recommenders-lists').then((res) => {
					this.recommenders = res.data;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadRecommenders();
		},
	}
</script>

<style lang="scss" scoped>
</style>
