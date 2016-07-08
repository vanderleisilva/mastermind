export class AuthenticationController {
	constructor ($auth, User, Logger) {
		'ngInject';
		this.auth = $auth;
		this.user = User;
		this.isProcessing = false;
		this.log = Logger;
	}

	validate(){
		this.isProcessing = true;
		this.user.get({
			email: this.email,
			password: this.password
		})
		.then((response) => {
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
