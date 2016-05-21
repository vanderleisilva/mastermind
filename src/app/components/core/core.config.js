export function config ($breadcrumbProvider) {
	'ngInject';
	
	$breadcrumbProvider.setOptions({
		includeAbstract: true
	});
}
