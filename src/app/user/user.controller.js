export class UserController {
	constructor (System, User, Logger, $state, $log) {
		'ngInject';

		this.system = System.name;
		this.service = User;
		this.state = $state;
		this.log = Logger;
		this.entidade = User.logged();
		this.description = !this.entidade ? 'Create an account' : 'My account';
	}

	submit(){
		var icUpdate = !!this.service.logged();

		if (icUpdate) {
			this.service.update(this.entidade).then(() => {
				this.log.success('Account updated successfuly!');
				this.state.go('inicio');
			});
			return;
		}

		this.service.insert(this.entidade).then(() => {
			this.log.success('Account created successfuly!');
			this.state.go('inicio');
		});

	}
}
