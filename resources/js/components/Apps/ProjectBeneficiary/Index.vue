<template>
	<custom-card :title="$t('ProjectBeneficiary')" ticon="fas fa-list" url="/project-beneficiaries/create" icon="fas fa-plus" :text="$t('NewProjectBeneficiary')">

		<form @submit.prevent="loadBeneficiaries" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-select col="col-md-12" @change="changeProject" :form="form" v-model="form.project_id" name="project_id" :options="projects" :label="$t('SelectProject')"></form-group-select>
				<form-group-select col="col-md-12" :form="form" v-model="form.recommender_id" name="recommender_id" :options="recommenders" :label="$t('SelectRecommender')"></form-group-select>
			</div>
			<button type="submit" :disabled="form.busy" class="btn btn-primary btn-lg btn-block"><i class="fas fa-search"></i> {{ $t('loadBeneficiaries') }}</button>
		</form>
		<hr>
		<!-- <template v-if="beneficiaries.length"> -->
		<div id="printMe" ref="printMe">
			<Pad></Pad>
			<table class="table table-bordered table-striped" style="margin-top:-25px">
				<thead>
					<tr>
						<th width="50%" class="text-right">{{ $t('Title') }}</th>
						<th>{{ $t('Description') }}</th>
					</tr>
					<tr>
						<td class="text-right">{{ $t('ProjectName') }}</td>
						<td>{{ info.name }}</td>
					</tr>
					<tr>
						<td class="text-right">{{ $t('TotalApprove') }}</td>
						<td>{{ info.total | numberConversion | persons }}</td>
					</tr>
					<tr>
						<td class="text-right">{{ $t('WardNumber') }}</td>
						<td>{{ info.ward }}</td>
					</tr>
					<tr>
						<td class="text-right">{{ $t('Recommender') }}</td>
						<td>{{ info.recommender }}</td>
					</tr>
				</thead>
			</table>
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>{{ $t('SL') }}</th>
						<th>{{ $t('Custom') }}</th>
						<th>{{ $t('NID') }}</th>
						<th>{{ $t('Details') }}</th>
						<template v-if="info.showWard">
							<th>{{ $t('Ward') }}</th>
							<th>{{ $t('Recommender') }}</th>
						</template>
						<th class="noprint" data-html2canvas-ignore>{{ $t('Action') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(beneficiary,index) in info.beneficiaries" :key="index">
						<td>{{ ++index | numberConversion }}</td>
						<td>{{ beneficiary.custom | numberConversion }}</td>
						<td>{{ beneficiary.beneficiary.nid | numberConversion }}</td>
						<td>{{ beneficiary.beneficiary.name }} <br>{{ beneficiary.beneficiary.phone }}</td>
						<template v-if="info.showWard">
							<td>{{ beneficiary.recommender.ward.name }}</td>
							<td>{{ beneficiary.recommender.user.name }}</td>
						</template>
						<td class="noprint" data-html2canvas-ignore>
							<button class="btn btn-danger btn-sm" @click.prevent="deleteList(beneficiary.id)"><i class="fas fa-times"></i> {{ $t('cancel') }}</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="d-flex justify-content-end">
			<button @click="saveToPDF" type="button" class="btn btn-secondary"><i class="fas fa-file-pdf"></i> {{ $t('PDF') }}</button>&nbsp;
			<button @click="printToPaper" type="button" class="btn btn-primary"><i class="fas fa-print"></i> {{ $t('Print') }}</button>
		</div>

		<!-- </template>
		<template v-else></template> -->

	</custom-card>
</template>

<script>
	import html2pdf from 'html2pdf.js'
	import pdfOptions from '../../../helpers/pdfOptions';
	import Pad from '../Pad.vue'
	import * as Validator from 'validatorjs';
	export default {
		name: "Index",
		components: {
			Pad,
		},
		data() {
			return {
				form: new Form({
					project_id: '',
					recommender_id: ''
				}),
				projects: [],
				recommenders: [],
				info: ''
			}
		},
		methods: {
			async saveToPDF() {
				let docName = `${this.info?.name} - (${this.info?.ward}) - ${this.info?.recommender}.pdf`
				await html2pdf(this.$refs.printMe, pdfOptions(docName));
			},
			async printToPaper() {
				await this.$htmlToPaper('printMe');
			},
			async loadBeneficiaries() {
				this.form.clear();
				let validation = new Validator(this.form, {
					project_id: 'required',
					recommender_id: 'required',
				});
				if (validation.passes()) {
					await this.form.get('/api/project-beneficiaries').then((res) => {
						this.info = res.data;
					});
				} else {
					this.form.errors.errors = validation.errors.all();
				}
			},
			async deleteList(id) {
				await this.deleteConfirm().then(() => {
					axios.delete(`/api/project-beneficiaries/${id}`).then((res) => {
						this.successDeleteMessage();
						this.loadBeneficiaries();
					});
				});
			},
			async changeProject(id) {
				if (id) {
					this.recommenders = [];
					await axios.get(`/api/load-project-recommenders/${id}`).then((res) => {
						this.recommenders.push({ id: 0, text: this.$t('AllRecommender') });
						res.data.forEach(el => {
							this.recommenders.push(el);
						});
					});
				}
			},
			loadProjects() {
				axios.get('/api/load-project-lists').then((res) => {
					this.projects = res.data;
				});
			}
		},
		created() {
			this.loadProjects();
		},
	}
</script>

<style lang="scss" scoped>
</style>
