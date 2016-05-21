export class MastermindService {
	constructor($http, System, Logger, $log){
		'ngInject';
		this.http = $http;
		this.apiHost = System.restUrl;
		this.log = Logger;
		this.log2 = $log;
		this.errorMessage = 'Problem on start game';

		this.stages = [10,9,8,7,6,5,4,3,2,1];
		this.bullets = [
			{
				item : 1,
				label : 'R',
				color: 'red'
			},
			{
				item : 2,
				label : 'G',
				color: 'green'
			},
			{
				item : 3,
				label : 'B',
				color: 'blue'
			},
			{
				item : 4,
				label : 'Y',
				color: 'yellow'
			},
			{
				item : 5,
				label : 'O',
				color: 'orange'
			},
			{
				item : 6,
				label : 'P',
				color: 'purple'
			},
			{
				item : 7,
				label : 'C',
				color: 'cyan'
			},
			{
				item : 8,
				label : 'M',
				color: 'magenta'
			},
		]
	}

	bulletsMapping(){
		var result = [];
		for (var l = 1; l <= this.stages.length; l++) {
			result[l] = [];
			for (var c = 1; c <= 8; c++) {
				result[l][c] = false;
			}
		}
		return result;
	}

	check(values, stage){
		var colorCode = '';
		for (let value of values[stage]) {
			if (value == undefined) {
				continue;
			}

  		if (value === false) {
  			this.log.error('Ops, there is something missing, please fill every values for stage ' + stage);
				return;
  		}

			colorCode+= value.label;
		}

		return this.http({
			method: 'POST',
  		url: this.apiHost + 'guess',
			params: {
				code : colorCode,
				game_key : this.user.game_key
			}
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	new(user){
		return this.http({
			method: 'POST',
  		url: this.apiHost + 'new_game',
			params: user
		})
		.then((data) => {
			this.user = data.data;
			this.log.success('Game started, good luck!');
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	guess(code){
		return this.http.post(this.apiHost, {
			params: code
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}
}
