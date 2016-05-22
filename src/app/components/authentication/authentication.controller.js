export class AuthenticationController {
	constructor ($auth, User, Logger) {
		'ngInject';
		this.auth = $auth;
		this.user = User;
		this.isProcessing = false;
		this.log = Logger;
	}

	submit(){
		this.isProcessing = true;
		this.user.get({
			nmUser: this.email,
			nmPassword: this.password
		})
		.then((response) => {
			if (!response.data.success) {
				this.log.error(response.data.message);
				return;
			}
			this.log.success('Hello fellow, welcome back!');

			this.login({
				status: response.data
			});
		})
		.finally(() => {
			this.isProcessing = false;
		});
	}

	external(provider){
		this.login({
			status: this.auth.authenticate(provider)
		});
	}

	passwordRecover(){
			if (!this.email) {
				this.log.error('Please type in your password!');
				return;
			}

			this.user.passwordRecover(this.email)
			.then(() => {
					this.log.success("Please check your email box, we've sent to you a reminder");
			});
	}
}
