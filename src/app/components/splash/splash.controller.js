export class SplashController {
	constructor (User, $log) {
		'ngInject';
		this.display = !User.logged();
	}

	cancel(){
		this.display = false;
	}

	login(){
		this.display = false;
	}
}
