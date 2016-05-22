import { PersonalscorebarController } from './personalscorebar.controller';

export function PersonalscorebarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/ranking/personal/personalscorebar.html',
		scope:{
			show : '='
		},
		replace: true,
		controller: PersonalscorebarController,
		controllerAs: 'personalscorebar',
		bindToController: true
	};

	return directive;
}
