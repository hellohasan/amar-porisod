<template>
	<span class="badge" :class="status ? trueClass : falseClass">{{status ? trueText : falseText}}</span>
</template>

<script>
	export default {
		name: 'Badge',
		props: {
			status: {
				type: Boolean,
				required: true,
			},
			trueText: {
				type: String,
				default: function () {
					return this.$t("Activated")
				}
			},
			falseText: {
				type: String,
				default: function () {
					return this.$t("Deactivated")
				}
			},
			trueClass: {
				type: String,
				default: 'badge-success'
			},
			falseClass: {
				type: String,
				default: 'badge-warning'
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
