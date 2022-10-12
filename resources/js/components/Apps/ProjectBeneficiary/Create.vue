<template>
	<custom-card :title="$t('NewProjectBeneficiary')" ticon="fas fa-plus" url="/project-beneficiaries" :text="$t('ProjectBeneficiary')">

		<table class="table table-bordered table-striped" id="verticalTable">
			<thead>
				<tr>
					<th class="text-right" width="20%">{{ $t('Title') }}</th>
					<th>{{ $t('Description') }}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('ProjectName') }}</td>
					<td>
						<custom-select :form="form" v-model="form.project_id" name="project_id" @change="changeProject" :options="projects"></custom-select>
					</td>
				</tr>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('ProjectDate') }}</td>
					<td>{{ project ? project.date : '' }}</td>
				</tr>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('ProjectInfo') }}</td>
					<td>{{ project ? project.total : '' | persons }}</td>
				</tr>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('Recommender') }}</td>
					<td>
						<custom-select :form="form" v-model="form.recommender_id" name="recommender_id" :options="project.recommenders"></custom-select>
					</td>
				</tr>
				<tr>
					<td colspan="2" class="text-center font-weight-bold">{{ $t('BeneficiaryInformation') }}</td>
				</tr>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('NID') }}</td>
					<td>
						<small class="text-danger">{{ $t('RightNIDWarning') }}</small>
						<div class="input-group">
							<input type="number" v-model="form.nid" v-mask="'#############'" @blur="searchNID" class="form-control" :placeholder="$t('NID')">
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" @click.prevent="searchNID" type="button">{{ $t('Search') }}</button>
							</div>
						</div>
						<HasError :form="form" field="nid" />
					</td>
				</tr>
				<tr>
					<td class="text-right font-weight-bold">{{ $t('PreviousBenefit') }}</td>
					<td>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>{{ $t('SL') }}</th>
									<th>{{ $t('Date') }}</th>
									<th>{{ $t('Project') }}</th>
									<th>{{ $t('Ward') }}</th>
									<th>{{ $t('Recommender') }}</th>
								</tr>
							</thead>
							<tbody v-if="beneficiary">
								<template v-if="beneficiary.projects.length">
									<tr v-for="(project,index) in beneficiary.projects" :key="index">
										<td>{{ ++index }}</td>
										<td>{{ project.date }}</td>
										<td>{{ project.name }}</td>
										<td>{{ project.ward }}</td>
										<td>{{ project.recommender }}</td>
									</tr>
								</template>
								<tr v-else>
									<td class="text-center" colspan="5">{{ $t('NoPreviousProjectFound') }}</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr v-if="beneficiary">
					<td class="text-right font-weight-bold">{{ $t('Action') }}</td>
					<td>
						<div class="row">
							<button class="col-md-6 btn btn-success btn-lg" @click.prevent="submit">{{ $t('Approve') }}</button>
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
	import * as Validator from 'validatorjs';
	export default {
		name: "Create",
		components: {
			CustomSelect, CustomInput
		},
		data() {
			return {
				form: new Form({
					project_id: '',
					recommender_id: '',
					nid: ''
				}),
				project: '',
				projects: [],
				benefits: [],
				beneficiary: ''
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
			async searchNID() {
				this.form.clear();
				let validation = new Validator(this.form, {
					project_id: 'required',
					recommender_id: 'required',
					nid: 'required|numeric|digits_between:10,13'
				});
				if (validation.passes()) {
					axios.post(`/api/project-beneficiaries/search`, {
						nid: this.form.nid
					}).then((res) => {
						this.beneficiary = res.data;
					}).catch((error) => console.log(error))
				} else {
					this.form.errors.errors = validation.errors.all();
				}
			},
			async submit() {
				await this.form.post('/api/project-beneficiaries').then((res) => {
					let status = res.data.type;
					if (status == 'done') {
						this.successCreateMessage();
						this.decline();
					} else {
						Swal.fire({
							title: this.$t("confirmation"),
							text: this.$t("confirm_duplicate_message"),
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							reverseButtons: true,
							confirmButtonText: this.$t("DuplicatePermit"),
							cancelButtonText: this.$t("cancel"),
						}).then((result) => {
							if (result.isConfirmed) {
								this.form.post('/api/project-beneficiaries/duplicate').then((res) => {
									this.successCreateMessage();
									this.decline();
								});
							} else {
								//this.decline();
							}
						})
					}
				}).catch((error) => console.log(error))
			},
			decline() {
				this.form.nid = '';
				this.benefits = [];
				this.beneficiary = '';
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
