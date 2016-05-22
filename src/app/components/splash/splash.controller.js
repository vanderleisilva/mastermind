export class SplashController {
	constructor () {
		'ngInject';
		this.display = true;
	}

	cancel(){
		this.display = false;
	}
}
