export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('inicio', {
		url: '/',
		templateUrl: 'app/inicio/inicio.html',
		controller: 'InicioController as inicio',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'Início'
		}
	});

	$urlRouterProvider.otherwise('/');
}
