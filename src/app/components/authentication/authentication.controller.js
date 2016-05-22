export class AuthenticationController {
	constructor ($auth) {
		'ngInject';
		this.auth = $auth;
	}

	submit(){
		this.login({
			status: this.auth.login({
				username: this.email,
				password: this.password
			})
		});
	}

}
