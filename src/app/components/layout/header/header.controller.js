export class HeaderController {
	constructor (System, User, Dialog) {
		'ngInject';

		this.system = System.name;
		this.description = System.description;
		this.hideAll();
		this.user = User;
		this.dialog = Dialog;
	}

	hideAll(){
		this.instructionsbar = false;
		this.generalrankingbar = false;
		this.personalscorebar = false;
	}

	instructions(){
		this.hideAll();
		this.instructionsbar = true;
	}

	personalScore(){
		this.hideAll();
		this.personalscorebar = true;
	}

	generalRanking(){
		this.hideAll();
		this.generalrankingbar = true;
	}

	logout(){
		this.dialog.confirm("Do you really want logout?")
		.then(() => {
			this.user.logout();
		});
	}
}
