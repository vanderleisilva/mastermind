export class MastermindController {
	constructor (Dialog, $interval, Mastermind, Ranking) {
		'ngInject';
		this.dialog = Dialog;
		this.interval = $interval;
		this.service = Mastermind;
		this.isPlaying = false;
		this.ranking = Ranking;
	}

	timer(){
		this.progress = 0;

		var stop = this.interval(() => {
			this.progress ++;

			if (this.progress < 100) {
				return;
			}

			this.interval.cancel(stop);
      this.dialog.confirm("Oh no, you couldn't make it, what about start a new game?")
			.then(() => {
				this.service.new();
			});
    }, 600000 / 100);
	}

	guess(stage, position){
		if (stage != this.currentStage) {
			return;
		}
		this.guessBullets[stage][position] = this.selected;
	}

	new(){
		this.service.new({user : "maria"})
		.then((data) => {
			this.isPlaying = true;
			this.answer = data;
			this.currentStage = 1;
			this.results = [];
			this.guessBullets = this.service.bulletsMapping();
			this.timer();
		});
	}

	check(){
		this.isProcessing = true;
		this.service.check(this.guessBullets, this.currentStage)
		.then((data) => {
			this.isProcessing = false;
			var status = data.data;

			if (status.solved == 'true') {
				this.ranking.insert((300 - status.time_taken) / 3);
				this.isPlaying = false;
				this.dialog.confirm("You won! Congratulations!!! Do you want to start another game?")
				.then((response) => {
					if (response) {
						this.new();
					}
				});
				return;
			}

			this.currentStage++;
			this.results.push(status.result);

			if (this.currentStage <= this.service.stages.length) {
				return;
			}

			this.isPlaying = false;
			this.dialog.confirm("Oh no, you lose! Do you want to start another game?")
			.then((response) => {
				if (response) {
					this.new();
				}
			});

		})
		.catch(() => {
			this.isProcessing = false;
		});
	}

	promptNew(){
		if (!this.isPlaying) {
			this.new();
			return;
		}

		this.dialog.confirm('Do you really want to start a new game?')
		.then((response) => {
			if (response) {
				this.new();
			}
		});
	}
}
