export class UserService {
	constructor ($http, System, localStorageService, $log) {
		'ngInject';

		this.http = $http;
                this.http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
		this.apiHost = System.restUrlBackEnd + 'users';
		this.storage = localStorageService;
		this.errorMessage = 'Problem on user request';
		this.log = $log;
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
		return this.http.post(this.apiHost, param)
		.then((response) => {
			this.storage.set('user', response);
			return response;
		})
		.catch(() => {
			this.log.error(this.errorMessage);
		});
	}

	logged(){
		return this.storage.get('user');
	}

	logout(){
		this.storage.set('user', null);
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
