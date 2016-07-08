export class UserService {
	constructor (Logger, $firebaseAuth, $firebaseArray) {
		'ngInject';
		this.database = $firebaseArray(firebase.database().ref().child('Users'));
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
		return this.auth.$createUserWithEmailAndPassword(param.email, param.nmPassword).catch((error) => {
			this.log.error("Error creating user:", error);
		});
	}

	get(param) {
		return this.auth.$signInWithEmailAndPassword(param.email, param.password).catch(error => { this.log.error(this.errorMessage);	});
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
		return this.auth.$getAuth();
	}

	logout(){
		this.auth.$signOut();
	}
}
