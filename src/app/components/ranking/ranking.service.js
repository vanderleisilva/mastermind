export class RankingService {
	constructor ($firebaseObject) {
		'ngInject';
		this.database = $firebaseObject(firebase.database().ref());
		this.errorMessage = 'Problem on ranking request';
		// this.user = User;
	}

	get(option) {
		return this.database.$loaded()
		.then(function(data) {
			return data.ranking;
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	insert(score) {
		var token = this.user.logged();
		token = token ? token.nmToken : '';

		return this.http.post(this.apiHost, {
			nmToken: token,
			vlScore : score
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}
}
