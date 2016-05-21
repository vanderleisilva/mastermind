export function routerConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('inicio', {
		url: '/inicio',
		templateUrl: 'app/inicio/inicio.html',
		controller: 'InicioController as inicio',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'Início'
		}
	})
}
