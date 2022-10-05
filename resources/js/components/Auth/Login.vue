<template>

	<div class="card card-outline card-primary">

		<div class="card-body">
			<p class="login-box-msg">Sign in to start your session</p>

			<errors :success="success" :failure="failure" :message="message" :loading="loading" />

			<form @submit.prevent="submitLogin" method="post">

				<div class="input-group mb-3">
					<input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-envelope"></span>
						</div>
					</div>
					<div class="invalid-feedback d-block" v-if="errors.email">{{ errors.email }}</div>
				</div>

				<div class="input-group mb-3">
					<input type="password" v-model=form.password class="form-control" placeholder="Password">
					<div class="input-group-append">
						<div class="input-group-text">
							<span class="fas fa-lock"></span>
						</div>
					</div>
					<div class="invalid-feedback d-block" v-if="errors.password">{{ errors.password }}</div>
				</div>
				<div class="row">
					<div class="col-12 mb-3">
						<vue-recaptcha class="g-recaptcha" size="normal" :sitekey="recapchaKey" :loadRecaptchaScript="true" ref="recaptcha" type="invisible" @verify="onCaptchaVerified" @expired="onCaptchaExpired"></vue-recaptcha>
						<div class="invalid-feedback d-block" v-if="errors.recaptcha">{{ errors.recaptcha }}</div>
					</div>
				</div>

				<div class="row">
					<div class="col-8">
						<div class="icheck-primary">
							<input type="checkbox" id="remember">
							<label for="remember">Remember Me</label>
						</div>
					</div>
					<!-- /.col -->
					<div class="col-4">
						<button type="submit" class="btn btn-primary btn-block" :disabled="loading">Sign In</button>
					</div>
					<!-- /.col -->
				</div>
			</form>
			<p class="mb-1">
				<router-link :to="{name:'forget-password'}">I forgot my password</router-link>
			</p>
			<!-- <p class="mb-0">
				<router-link :to="{name:'register'}" class="text-center">Create a new account</router-link>
			</p> -->
		</div>
		<!-- /.card-body -->
	</div>

</template>

<script>
	import { login, csrf } from '../../helpers/auth'
	import * as Validator from 'validatorjs';
	import VueRecaptcha from 'vue-recaptcha';
	export default {
		name: 'Login',
		components: {
			VueRecaptcha,
		},
		data() {
			return {
				form: {
					email: 'super-admin@gmail.com',
					password: '123456',
					recaptcha: '',
				},
				errors: {
					email: false,
					password: false,
					recaptcha: false
				},
				success: false,
				failure: false,
				loading: false,
				message: '',
				recapchaKey: process.env.MIX_RECAPTCHA_SITE_KEY
			}
		},
		methods: {
			async submitLogin() {
				this.errors = {
					email: false,
					password: false
				};
				let validation = new Validator(this.form, {
					email: 'required|email',
					password: 'required|min:6',
					recaptcha: 'required'
				});
				if (validation.passes()) {
					this.loading = true;
					await csrf();
					await login(this.$data.form)
						.then((response) => {
							this.$store.dispatch("user/loginAction", response);
							this.loading = false;
							this.success = true;
							this.failure = false;
							this.message = 'Credentials Matched.'
							this.onCaptchaExpired();
							this.$store.dispatch('basicAction');
							this.$router.push({ name: 'dashboard' });
						})
						.catch((error) => {
							this.onCaptchaExpired();
							this.loading = false;
							this.success = false;
							this.failure = true;
							this.message = error
						});
				} else {
					this.errors.email = validation.errors.first('email');
					this.errors.password = validation.errors.first('password');
					this.errors.recaptcha = validation.errors.first('recaptcha');
				}
			},
			onCaptchaVerified: function (recaptchaToken) {
				this.form.recaptcha = recaptchaToken;
				this.validateCaptcha = true;
			},
			onCaptchaExpired: function () {
				this.$refs.recaptcha.reset();
			}
		},
	}
</script>

<style>
	.g-recaptcha {
		transform: scale(0.91);
		transform-origin: left top;
		-webkit-transform-origin: left top;
	}
</style>

