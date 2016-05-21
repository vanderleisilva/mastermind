export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('not-found', {
		url: '/not-found',
		templateUrl: 'app/not-found/not-found.html',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'Página não encontrada'
		}
	});

	$urlRouterProvider.otherwise('/not-found');
}
