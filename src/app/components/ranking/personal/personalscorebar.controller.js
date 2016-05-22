export class PersonalscorebarController {
  constructor (Ranking) {
    'ngInject';
    this.service = Ranking;
    this.update();
  }

  update(){
    this.ranking = this.service.get('personal');
  }
}
