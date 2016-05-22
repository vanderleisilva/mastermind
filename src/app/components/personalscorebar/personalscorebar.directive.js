import { PersonalscorebarController } from './personalscorebar.controller';

export function PersonalscorebarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/personalscorebar/personalscorebar.html',
		replace: true,
		controller: PersonalscorebarController,
		controllerAs: 'personalscorebar',
		bindToController: true
	};

	return directive;
}


