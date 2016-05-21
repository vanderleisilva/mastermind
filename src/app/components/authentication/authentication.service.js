export class AuthenticationService {
	constructor($rootScope, $auth, $state, System){
		'ngInject';

		this.rootScope = $rootScope;
		this.auth = $auth;
		this.state = $state;
		this.system = System;
	}

	start(){
		var vm = this;

		var stateChange = this.rootScope.$on('$stateChangeStart', function (event, toState, toParam) {
			var login = vm.system.login;
			if (toState.requireLogin === false || !login) {
				return;
			}

			if (!vm.auth.isAuthenticated()) {
				event.preventDefault();
				return vm.state.go('login', {url: toState, params: toParam});
			}
		});

		this.rootScope.$on('$destroy', function() {
			stateChange();
		});
	}
}
