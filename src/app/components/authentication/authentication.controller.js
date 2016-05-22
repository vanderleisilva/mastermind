export class AuthenticationController {
	constructor ($auth) {
		'ngInject';
		this.auth = $auth;
	}

	submit(){
		this.login({
			status: this.auth.login({
				nmUser: this.email,
				nmPassword: this.password
			},
			{
	  		method: 'GET',
				params: {
					nmUser: this.email,
					nmPassword: this.password
  			},
			})
		});
	}

	external(provider){
		this.login({
			status: this.auth.authenticate(provider)
		});
	}

}
