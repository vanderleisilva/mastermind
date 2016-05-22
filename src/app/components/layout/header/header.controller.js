export class HeaderController {
	constructor (System) {
		'ngInject';

		this.system = System.name;
		this.description = System.description;
		this.instructionsbar = false;
	}
}
