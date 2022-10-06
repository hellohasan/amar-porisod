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
						<th>{{ $t('ProjectDate') }}</th>
						<th>{{ $t('ProjectName') }}</th>
						<th>{{ $t('ProjectInfo') }}</th>
						<th>{{ $t('Recommenders') }}</th>
						<th>{{ $t('Status') }}</th>
						<th class="not-export-col">{{ $t('Action') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(project,index) in projects" :key="index">
						<td>{{ ++index }}</td>
						<td>{{ project.date }}</td>
						<td>{{ project.name }}</td>
						<td>{{ project.total | persons }}</td>
						<td>
							<p class="mb-0" v-for="(r,i) in project.recommenders" :key="i">{{ r.recommender.user.name }}</p>
						</td>
						<td>
							<badge :status="project.status"></badge>
						</td>
						<td>
							<button v-permission="['projects-edit']" class="btn btn-primary btn-sm" v-if="index" @click="editProject(project)"><i class="far fa-edit"></i> {{ $t('Edit') }}</button>
							<button v-permission="['projects-destroy']" class="btn btn-danger btn-sm" @click="deleteProject(project.id)"><i class="fas fa-trash"></i> {{ $t('Delete') }}</button>
						</td>
					</tr>
				</tbody>
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
					recommenders: [],
					status: true
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
			async storeProject() {
				await this.form.post('/api/projects').then((res) => {
					this.successCreateMessage();
					$('#myModal').modal('hide');
					this.loadProjects();
				}).catch((error) => console.log(error));
			},
			editProject(project) {
				this.editMode = true;
				this.editId = project.id;
				this.openMyModal();
				this.form.fill(project)
			},
			updateProject() {

			},
			deleteProject(id) {

			},
			openMyModal() {
				this.form.clear();
				this.form.reset();
				this.$root.$emit('openCustomModal', this.editMode);
			},
			loadProjects() {
				axios.get('/api/projects').then((res) => {
					this.projects = res.data;
				}).catch((error) => console.log(error));
			},
			loadRecommenders() {
				axios.get('/api/load-recommenders-lists').then((res) => {
					this.recommenders = res.data;
				}).catch((error) => console.log(error))
			}
		},
		created() {
			this.loadProjects();
			this.loadRecommenders();
		},
	}
</script>

<style lang="scss" scoped>
	#verticalTable {
		td,
		th {
			vertical-align: middle;
		}
	}
</style>
