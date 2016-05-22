export class UserService {
	constructor ($http, System, localStorageService) {
		'ngInject';

		this.http = $http;
		this.apiHost = System.restUrlBackEnd + 'users';
		this.errorMessage = 'Problem on request user resource';
		this.storage = localStorageService;
	}

	update(param) {
		return this.http.put(this.apiHost, param)
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	insert(param) {
		return this.http.post(this.apiHost, param)
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	logged(){
		return this.storage.get('user');
	}

	get(param) {
		return this.http.get(this.apiHost, {
			params: param
		})
		.then((response) => {
			this.storage.set('user', response.data);
			return response;
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

}
