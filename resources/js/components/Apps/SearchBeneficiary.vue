<template>
	<card :title="$t('SearchBeneficiary')" icon="fas fa-search">
		<form @submit.prevent="handelSearch" @keydown="form.onKeydown($event)">
			<div class="form-row">
				<form-group-input col="col-md-12" :form="form" v-mask="'#############'" v-model="form.search" name="search" :label="$t('SearchText')"></form-group-input>
				<form-group-button :form="form" icon="fas fa-search">{{ $t('SearchBeneficiary') }}</form-group-button>
			</div>
		</form>
		<template v-if="beneficiary">
			<template v-if="beneficiary.beneficiary">
				<div id="printMe" ref="printMe">
					<pad></pad>
					<table class="table table-bordered table-striped vertical-cell" style="margin-top:-25px">
						<thead>
							<tr>
								<th width="50%" colspan="2" class="text-right">{{ $t('Title') }}</th>
								<th colspan="3">{{ $t('Description') }}</th>
							</tr>
							<tr>
								<td colspan="2" class="text-right">{{ $t('WardNumber') }}</td>
								<td colspan="3">{{ beneficiary.beneficiary.ward.name }}</td>
							</tr>
							<tr>
								<td colspan="2" class="text-right">{{ $t('BeneficiaryNID') }}</td>
								<td colspan="3">{{ beneficiary.beneficiary.nid }}</td>
							</tr>
							<tr>
								<td colspan="2" class="text-right">{{ $t('BeneficiaryName') }}</td>
								<td colspan="3">{{ beneficiary.beneficiary.name }}</td>
							</tr>
							<tr>
								<td colspan="2" class="text-right">{{ $t('BeneficiaryPhone') }}</td>
								<td colspan="3">{{ beneficiary.beneficiary.phone }}</td>
							</tr>
						</thead>
						<thead>
							<tr>
								<th>{{ $t('SL') }}</th>
								<th>{{ $t('Date') }}</th>
								<th>{{ $t('Project') }}</th>
								<th>{{ $t('Recommender') }}</th>
							</tr>
						</thead>
						<tbody v-if="beneficiary">
							<template v-if="beneficiary.projects.length">
								<tr v-for="(project,index) in beneficiary.projects" :key="index">
									<td>{{ ++index }}</td>
									<td>{{ project.date }}</td>
									<td>{{ project.name }}</td>
									<td>{{ project.recommender }}</td>
								</tr>
							</template>
							<tr v-else>
								<td class="text-center" colspan="5">{{ $t('NoPreviousProjectFound') }}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="d-flex justify-content-end" v-if="beneficiary.beneficiary">
					<button @click="saveToPDF" type="button" class="btn btn-secondary"><i class="fas fa-file-pdf"></i> {{ $t('PDF') }}</button>&nbsp;
					<button @click="printToPaper" type="button" class="btn btn-primary"><i class="fas fa-print"></i> {{ $t('Print') }}</button>
				</div>
			</template>
			<template v-else>
				<h2 class="text-center text-red">{{ $t('NoBeneficiaryFound') }}</h2>
			</template>
		</template>
		<template v-else>
			<h2 class="text-center text-red">{{ $t('NoBeneficiaryFound') }}</h2>
		</template>
	</card>
</template>

<script>
	import html2pdf from 'html2pdf.js'
	import pdfOptions from '../../helpers/pdfOptions';
	import * as Validator from 'validatorjs';
	import Pad from './Pad.vue';
	export default {
		name: "SearchBeneficiary",
		components: { Pad },
		data() {
			return {
				form: new Form({
					search: ''
				}),
				bForm: new Form({
					nid: '',
					phone: '',
					name: ''
				}),
				search: '',
				beneficiary: ''
			}
		},
		methods: {
			async saveToPDF() {
				let docName = `${beneficiary.beneficiary.nid}.pdf`
				await html2pdf(this.$refs.printMe, pdfOptions(docName));
			},
			async printToPaper() {
				await this.$htmlToPaper('printMe');
			},
			async handelSearch() {
				let validation = new Validator(this.form, {
					'search': 'required|digits_between:10,13'
				});

				if (validation.passes()) {
					await this.form.post('/api/search-beneficiary').then((res) => {
						this.beneficiary = res.data;
					})
				} else {
					this.form.errors.errors = validation.errors.all();
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
