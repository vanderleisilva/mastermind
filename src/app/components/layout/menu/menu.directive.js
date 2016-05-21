export function MenuDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/layout/menu/menu.html',
		replace: true
	};

	return directive;
}
