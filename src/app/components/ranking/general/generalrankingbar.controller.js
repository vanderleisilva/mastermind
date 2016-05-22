export class GeneralrankingbarController {
  constructor (Ranking) {
    'ngInject';
    this.service = Ranking;
    this.update();
  }

  update(){
    this.service.get('general')
    .then((response)=>{
      this.ranking = response.result;
    });
  }
}
