<template>
	<custom-card :title="$t('NewProjectBeneficiary')" ticon="fas fa-plus" url="/project-beneficiaries" :text="$t('ProjectBeneficiary')">

		<table class="table table-bordered table-striped" id="verticalTable">
			<thead>
				<tr>
					<th class="text-right" width="30%">{{ $t('Title') }}</th>
					<th>{{ $t('Description') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-right">{{ $t('ProjectName') }}</td>
					<td>
						<custom-select :form="form" v-model="form.project_id" name="project_id" @change="changeProject" :options="projects"></custom-select>
					</td>
				</tr>
				<tr>
					<td class="text-right">{{ $t('ProjectDate') }}</td>
					<td>{{ project ? project.date : '' }}</td>
				</tr>
				<tr>
					<td class="text-right">{{ $t('ProjectInfo') }}</td>
					<td>{{ project ? project.total : '' }}</td>
				</tr>
				<tr>
					<td class="text-right">{{ $t('Recommender') }}</td>
					<td>
						<custom-select :form="form" v-model="form.recommender_id" name="recommender_id" :options="project.recommenders"></custom-select>
					</td>
				</tr>
				<tr>
					<td colspan="2" class="text-center">{{ $t('BeneficiaryInformation') }}</td>
				</tr>
				<tr>
					<td class="text-right">{{ $t('NID') }}</td>
					<td>
						<custom-input v-model="form.nid" :label="$t('NID')" :form="form" name="nid"></custom-input>
					</td>
				</tr>
				<tr>
					<td class="text-right text-bold">{{ $t('PreviousBenefit') }}</td>
					<td>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>{{ $t('SL') }}</th>
									<th>{{ $t('Date') }}</th>
									<th>{{ $t('Project') }}</th>
									<th>{{ $t('Recommender') }}</th>
								</tr>
							</thead>
						</table>
					</td>
				</tr>
				<tr>
					<td class="text-right">{{ $t('Action') }}</td>
					<td>
						<div class="row">
							<button class="col-md-6 btn btn-success btn-lg">{{ $t('Approve') }}</button>
							<button type="button" class="col-md-6 btn btn-danger btn-lg" @click.prevent="decline">{{ $t('Decline') }}</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

	</custom-card>
</template>

<script>
	import CustomSelect from '../../Global/CustomSelect';
	import CustomInput from '../../Global/CustomInput';
	export default {
		name: "Create",
		components: {
			CustomSelect, CustomInput
		},
		data() {
			return {
				form: new Form({

				}),
				project: '',
				projects: [],
				benefits: []
			}
		},
		methods: {
			async loadActiveProject() {
				await axios.get('/api/load-project-lists').then((res) => {
					this.projects = res.data;
				});
			},
			async changeProject(e) {
				await axios.get(`/api/load-project-details/${e}`).then((res) => {
					this.project = res.data;
				});
			},
			decline() {
				this.form.nid = '';
				this.benefits = [];
			}
		},
		created() {
			this.loadActiveProject();
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
