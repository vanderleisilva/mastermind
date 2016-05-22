export function config ($breadcrumbProvider, localStorageServiceProvider) {
	'ngInject';

	$breadcrumbProvider.setOptions({
		includeAbstract: true
	});

	localStorageServiceProvider.setPrefix('app');
}
