export class MastermindController {
	constructor (Dialog, $interval, Mastermind) {
		'ngInject';
		this.bullets = [1,2,3,4,5,6,7,8,9,10];
		this.dialog = Dialog;
		this.interval = $interval;
		this.service = Mastermind;

		this.service.new({user : "maria"})
		.then((data) => {
			this.answer = data;
			this.timer();
		});
	}

	timer(){
		this.progress = 0;

		var stop = this.interval(() => {
			this.progress ++;

			if (this.progress < 100) {
				return;
			}

      this.dialog.confirm('Do you really want start a new game?')
			.then(() => {
				this.interval.cancel(stop);
				this.service.new();
			});
    }, 300000 / 100);
	}

	new(){
		this.dialog.confirm('Do you really want start a new game?')
		.then(() => {
			this.timer();
		});
	}

	help(){

	}
}
