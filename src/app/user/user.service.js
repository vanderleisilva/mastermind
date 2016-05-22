export class UserService {
	constructor ($http, System, Logger) {
		'ngInject';

		this.http = $http;
		this.apiHost = System.restUrl + 'user';
		this.log = Logger;
	}

	get(param) {
		return this.http.get(this.apiHost, {
			params: param
		})
		.catch(() => {
			this.log.error('Erro ao listar estados civis');
		});
	}

	remove(param) {
		return this.http.delete(this.apiHost + '/' + param.eci_idestadocivil)
		.then(() => {
			this.log.success('Estado civil removido com sucesso');
		})
		.catch(() => {
			this.log.error('Erro ao remover estado civil');
		});
	}

	update(param) {
		return this.http.put(this.apiHost + '/' + param.eci_idestadocivil, param)
		.then(() => {
			this.log.success('Estado civil atualizado com sucesso');
		})
		.catch(() => {
			this.log.error('Erro ao atualizar estado civil');
		});
	}

	insert(param) {
		return this.http.post(this.apiHost, param)
		.then(() => {
			this.log.success('Estado civil incluído com sucesso');
		})
		.catch(() => {
			this.log.error('Erro ao incluir estado civil');
		});
	}
}
