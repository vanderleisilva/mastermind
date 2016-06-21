export class UserService {
	constructor (Logger, $firebaseObject, $firebaseAuth) {
		'ngInject';
		this.database = $firebaseObject(firebase.database().ref());
		this.errorMessage = 'Problem on user request';
		this.log = Logger;
		this.auth = $firebaseAuth();
	}

	update(param) {
		return this.http.put(this.apiHost, param)
		.then((response) => {
			this.storage.set('user', response.data);
			return response;
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	insert(param) {
		this.database.users = this.database.users ? this.database.users : [];
		this.database.users.push(param);
		return this.database.$save().catch(error => { this.log.error(this.errorMessage);	});
	}

	get(param) {
		this.auth.$signInWithEmailAndPassword(param.nmUser, param.nmPassword).catch(error => { this.log.error(this.errorMessage);	});
	}

	passwordRecover(email) {
		return this.http.get(this.passRecoverApi, {
			params: {
				nmEmail : email
			}
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	logged(){
		return !!this.auth.$getAuth();
	}

}
