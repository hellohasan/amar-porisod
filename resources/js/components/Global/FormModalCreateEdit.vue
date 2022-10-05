<template>
	<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" :class="{'modal-lg': largeModal}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="myModalLabel" v-if="editMode"><i class="fas fa-edit"></i> {{ $t('CustomUpdate',{name:$t(title)}) }}</h5>
					<h5 class="modal-title" id="myModalLabel" v-else><i class="fas fa-plus"></i> {{ $t('CustomNew',{name:$t(title)}) }}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form @submit.prevent="editMode ? updateModal() : createModal()" @keydown="form.onKeydown($event)">
					<div class="modal-body">
						<slot />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i> {{ $t('Close') }}
						</button>
						<button :disabled="form.busy" type="submit" class="btn btn-primary">
							<template v-if="editMode"><i class="fas fa-paper-plane"></i> {{ $t('Update') }}</template>
							<template v-else><i class="fas fa-plus"></i> {{ $t('AddNow') }}</template>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FormModalCreateEdit",
		data() {
			return {
				editMode: false,
			}
		},
		props: {
			form: {
				type: Object,
				require: true,
			},
			title: {
				type: String,
				require: true
			},
			largeModal: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			openMyModal() {
				this.form.reset();
				this.form.clear();
				$('#myModal').modal('show');
			},
			createModal() {
				this.$emit('storeData');
			},
			updateModal() {
				this.$emit('updateData');
			}
		},
		created() {
			this.$root.$on('openCustomModal', (mode) => {
				this.editMode = mode;
				this.openMyModal();
			});
		},
	}
</script>

<style lang="scss" scoped>
</style>
