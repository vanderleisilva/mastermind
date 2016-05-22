export class RankingService {
	constructor ($http, System, User) {
		'ngInject';

		this.http = $http;
		this.apiHost = System.restUrlBackEnd + 'scores';
		this.errorMessage = 'Problem on raking request';
		this.user = User;
	}

	get(option) {
		var token = this.user.logged();
		token = token ? token.nmToken : '';

		return this.http.get(this.apiHost, {
			params: {
				action : option,
				nmToken: token
			}
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	insert(score) {
		var token = this.user.logged();
		token = token ? token.nmToken : '';

		return this.http.post(this.apiHost, {
			params: {
				nmToken: token,
				vlScore : score
			}
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}
}
