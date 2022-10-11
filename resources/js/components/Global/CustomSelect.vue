<template>
	<Fragment>
		<select :name="name" :id="selectId" class="form-control is-invalid">
			<option></option>
		</select>
		<has-error :form="form" :field="name"></has-error>
	</Fragment>
</template>

<script>
	export default {
		name: "CustomSelect",
		props: {
			options: {
				required: true
			},
			value: {
				default: ''
			},
			name: {
				type: String,
				required: true,
			},
			placeholder: {
				type: String,
				default: function () {
					return this.$t("Select_One")
				}
			},
			form: {
				type: Object,
				required: true
			},
		},
		computed: {
			selectId() {
				return "select_" + Math.random().toString(36).substring(7);
			}
		},
		mounted: function () {
			var vm = this;
			$("#" + this.selectId)
				// init select2
				.select2({
					data: this.options,
					placeholder: this.placeholder,
					width: '100%',
					allowClear: true,
				})
				.val(this.value)
				.trigger('change')
				// emit event on change.
				.on('change', function () {
					vm.$emit('input', this.value);
				})

		},
		watch: {
			value: function (value) {
				// update value
				$("#" + this.selectId).val(value).trigger('change');
				this.$emit('change', value);
			},
			options: function (options) {
				// update options
				$("#" + this.selectId).empty().select2({
					placeholder: this.placeholder,
					width: '100%',
					allowClear: true,
					data: options,
				}).val('').trigger('change');
			}
		},
		destroyed: function () {
			this.$emit('input', '');
			$("#" + this.selectId).empty().off().select2('destroy')
		}
	}
</script>

<style scoped>
</style>
