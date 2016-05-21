export class MastermindService {
	constructor($http, System, Logger){
		'ngInject';
		this.http = $http;
		this.apiHost = System.restUrl;
		this.log = Logger;
		this.errorMessage = 'Problem on start game';
	}

	new(user){
		return this.http({
			method: 'POST',
  		url: this.apiHost + 'new_game',
			params: user
		})
		.then(() => {
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
