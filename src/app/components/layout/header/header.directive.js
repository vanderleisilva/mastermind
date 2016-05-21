import { HeaderController } from './header.controller';

export function HeaderDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/layout/header/header.html',
		replace: true,
		controller: HeaderController,
		controllerAs: 'header',
		bindToController: true
	};

	return directive;
}
