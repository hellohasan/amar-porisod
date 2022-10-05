<template>
	<div class="card card-outline card-primary">
		<div class="card-body">
			<p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
			<errors :success="success" :failure="failure" :message="message" :loading="loading" />
			<form @submit.prevent="submitRequest" method="post" @keydown="form.onKeydown($event)">

				<div class="input-group mb-3">
					<input type="email" v-model="form.email" class="form-control" placeholder="Email">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-envelope"></span>
						</div>
					</div>
					<has-error :form="form" field="email"></has-error>
				</div>

				<div class="row">
					<div class="col-12 mb-3">
						<vue-recaptcha class="g-recaptcha" size="normal" :sitekey="recapchaKey" :loadRecaptchaScript="true" ref="recaptcha" type="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"></vue-recaptcha>
						<has-error :form="form" field="recaptcha"></has-error>
					</div>
				</div>

				<div class="row">
					<div class="col-12">
						<button type="submit" :disabled="form.busy" class="btn btn-primary btn-block">Request new password</button>
					</div>
					<!-- /.col -->
				</div>
			</form>

			<p class="mt-3 mb-1">
				<router-link :to="{name:'login'}">Login</router-link>
			</p>
			<!-- <p class="mb-0">
				<router-link :to="{name:'register'}" class="text-center">Register a new membership</router-link>
			</p> -->
		</div>
		<!-- /.login-card-body -->
	</div>
</template>

<script>
	import VueRecaptcha from 'vue-recaptcha';
	export default {
		name: 'Forget',
		components: {
			VueRecaptcha,
		},
		data() {
			return {
				form: new Form({
					email: '',
					recaptcha: ''
				}),
				success: false,
				failure: false,
				loading: false,
				message: '',
			}
		},
		methods: {
			submitRequest() {
				this.loading = true;
				this.form.post("/api/auth/forget-password").then(result => {
					this.loading = false;
					this.success = true;
					this.failure = false;
					this.onCaptchaExpired();
					this.message = result.data.message;
				}, error => {
					this.loading = false;
					this.success = false;
					this.failure = true;
					this.onCaptchaExpired();
					this.message = error.response.data.message;
				});
			},
			onCaptchaVerified: function (recaptchaToken) {
				this.form.recaptcha = recaptchaToken;
				this.validateCaptcha = true;
			},
			onCaptchaExpired: function () {
				this.$refs.recaptcha.reset();
			}
		},
		created() {
			this.recapchaKey = process.env.MIX_RECAPTCHA_SITE_KEY;
		},
	}
</script>

<style>
</style>
