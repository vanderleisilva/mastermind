export class PersonalscorebarController {
	constructor (Ranking) {
		'ngInject';
		this.service = Ranking;
		this.update();
	}

	update(){
		this.service.get('personal').then(ranking => { this.ranking = ranking });
	}
}
