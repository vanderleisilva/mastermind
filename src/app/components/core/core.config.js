export function config ($breadcrumbProvider, localStorageServiceProvider, $httpProvider) {
	'ngInject';

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	
	$breadcrumbProvider.setOptions({
		includeAbstract: true
	});

	localStorageServiceProvider.setPrefix('app');
}
