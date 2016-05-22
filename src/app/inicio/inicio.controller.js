export class InicioController {
	constructor (System) {
		'ngInject';

		this.system = System.name;
		this.description = System.description;
		this.startGame = false;
	}
}
