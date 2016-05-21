export function config ($logProvider, toastrConfig) {
	'ngInject';
	// Enable log
	$logProvider.debugEnabled(true);

	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 5000;
	toastrConfig.positionClass = 'toast-top-right';
	toastrConfig.preventDuplicates = true;
	toastrConfig.progressBar = true;
	toastrConfig.closeButton = true;
}
