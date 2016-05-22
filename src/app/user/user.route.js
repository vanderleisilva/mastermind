export function routerConfig ($stateProvider) {
	'ngInject';

	$stateProvider.state('user', {
		url: '/user',
		templateUrl: 'app/user/user.html',
		controller: 'UserController as vm',
		requireLogin: false,
		ncyBreadcrumb: {
			label: 'User'
		}
	});
}
