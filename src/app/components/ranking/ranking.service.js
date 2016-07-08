export class RankingService {
	constructor ($firebaseObject, Logger) {
		'ngInject';
		this.database = $firebaseObject(firebase.database().ref('ranking'));
		this.errorMessage = 'Problem on ranking request';
		// this.user = User;
		this.log = Logger;
	}

	get(option) {
		return this.database.$loaded()
		.then(function(data) {
			return data;
		})
		.catch((e) => {
			this.log.error(e);
		});
	}

	insert(score) {
		var token = this.user.logged();
		token = token ? token.nmToken : '';

		return this.http.post(this.apiHost, {
			nmToken: token,
			vlScore : score
		})
		.catch((e) => {
			this.log.error(e);
		});
	}
}
