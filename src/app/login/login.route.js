export function routerConfig ($stateProvider, $authProvider, SystemProvider) {
	'ngInject';

	$authProvider.loginUrl = SystemProvider.$get().restUrl + 'usuario/login';

	$stateProvider
	.state('login', {
		url: '/',
		params: {
			url: null,
			params : null
		},
		templateUrl: 'app/login/login.html',
		controller: 'LoginController as vm',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'Login'
		}
	});
}
