export class UserController {
	constructor (System, User) {
		'ngInject';

		this.system = System.name;
		this.service = User;
		this.description = 'Create an account';
	}

	submit(){
		this.service.update(this.entidade).then(() => {
			this.state.go('/');
		});
	}
}
