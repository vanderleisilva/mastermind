export class UserController {
	constructor (System) {
		'ngInject';

		this.system = System.name;
		this.description = 'Create an account';
	}
}
