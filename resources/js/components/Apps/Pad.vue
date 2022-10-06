<template>
	<div class="heading text-center">
		<h5>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h5>
		<h1>{{ basic.title }}</h1>
		<h5>{{ basic.address }}</h5>
		<!-- <h6>{{ $t('Email') }}:{{ basic.email }} {{ $t('Phone') }}:{{ basic.phone }} </h6> -->
		<hr class="s2">
	</div>
</template>

<script>
	export default {
		name: "Pad",
		computed: {
			basic() {
				return this.$store.getters.getBasic;
			}
		}
	}
</script>

<style scoped>
	hr {
		background-color: white;
		margin: 0 0 45px 0;
		border-width: 0;
	}
	hr.s2 {
		height: 3px;
		border-top: 2px solid black;
		border-bottom: 5px solid black;
	}
</style>
