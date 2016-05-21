export function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state('not-found', {
		url: '/not-found',
		templateUrl: 'app/not-found/not-found.html',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'Page not found'
		}
	});

	$urlRouterProvider.otherwise('/not-found');
}
