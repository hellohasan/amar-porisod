<template>
	<custom-card :title="$t('PrintProjectBeneficiary')" ticon="fas fa-print" url="/project-beneficiaries" icon="fas fa-list" :text="$t('ProjectBeneficiary')">
		<div class="d-flex justify-content-end">
			<button v-if="showPDF" @click="saveToPDF" type="button" class="btn btn-secondary"><i class="fas fa-file-pdf"></i> {{ $t('PDF') }}</button>&nbsp;
		</div>
		<hr>
		<div class="row" id="printMe" ref="printMe">
			<div class="col-md-4 border border-dark border-2 rounded p-1 mb-2" v-for="(beneficiary,index) in info.beneficiaries" :key="index">
				<div class="heading text-center">
					<h5>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h5>
					<h6>{{ basic.title }}</h6>
					<!-- <h6>{{ basic.address }}</h6> -->
					<h5 class="font-weight-bold">{{ info.name }}</h5>
				</div>
				<table class="table table-bordered myTable" style="margin-bottom:0px">
					<tbody>
						<tr>
							<td colspan="2" class="text-center font-weight-bold" style="font-size:25px;padding:0px">{{ beneficiary.custom | numberConversion }}</td>
						</tr>
						<tr>
							<td>{{ $t('Recommender') }}</td>
							<td>{{ beneficiary.recommender.user.name }}</td>
						</tr>
						<tr>
							<td>{{ $t('WardNumber') }}</td>
							<td>{{ beneficiary.beneficiary.ward.name }}</td>
						</tr>
						<tr>
							<td>NID</td>
							<td>{{ beneficiary.beneficiary.nid | numberConversion }}</td>
						</tr>
						<tr>
							<td>{{ $t('Name') }}</td>
							<td>{{ beneficiary.beneficiary.name }}</td>
						</tr>
						<tr>
							<td>{{ $t('Mobile') }}</td>
							<td>{{ beneficiary.beneficiary.phone }}</td>
						</tr>
					</tbody>
				</table>
				<div class="col-12 mt-2">
					<div class="text-center">
						<p style="margin-bottom:0px">______________________<br>{{ $t('ChairmanSignature') }}</p>
					</div>
				</div>
			</div>
		</div>
	</custom-card>

</template>

<script>
	import html2pdf from 'html2pdf.js'
	export default {
		name: "Slip",
		data() {
			return {
				info: '',
				showPDF: false
			}
		},
		computed: {
			basic() {
				return this.$store.getters.getBasic;
			}
		},
		methods: {
			async saveToPDF() {
				let docName = `${this.info?.name} - (${this.info?.ward}) - ${this.info?.recommender}.pdf`
				let pdfOptions = {
					margin: [0.3, 0.3],
					filename: docName,
					image: { type: "jpeg", quality: 1 },
					html2canvas: { scale: 2, letterRendering: true },
					jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
				};
				await html2pdf(this.$refs.printMe, pdfOptions);
			},
			async loadProjectSlip() {
				let projectId = this.$route.query.project_id;
				let recommenderId = this.$route.query.recommender_id;
				await axios.get(`/api/project-beneficiaries/slip/${projectId}/${recommenderId}`).then((res) => {
					this.info = res.data;
					this.showPDF = true;
				}).catch((error) => console.log(error));
			}
		},
		created() {
			this.loadProjectSlip();
		},
	}
</script>

<style lang="scss" scoped>
	.myTable td {
		padding: 5px;
	}
</style>
