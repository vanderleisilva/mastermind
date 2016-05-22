export class HeaderController {
	constructor (System, User, Dialog) {
		'ngInject';

		this.system = System.name;
		this.description = System.description;
		this.instructionsbar = false;
		this.generalrankingbar = true;
		this.user = User;
		this.dialog = Dialog;
	}

	logout(){
		this.dialog.confirm("Do you really want logout?")
		.then(() => {
			this.user.logout();
		});
	}
}
