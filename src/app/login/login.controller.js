export class LoginController {
	constructor (Logger, $state, $stateParams, System) {
		'ngInject';
		this.log = Logger;
		this.state = $state;
		this.url = $stateParams.url ? $stateParams.url : System.initial;
		this.param = $stateParams.param;
	}

	login(status){
		status.then(() => {
			this.log.success('Acesso concedido com sucesso');
			this.state.go(this.url, this.param);
		})
		.catch(() => {
			this.log.error('Login ou senha inválido');
		});
	}
}
