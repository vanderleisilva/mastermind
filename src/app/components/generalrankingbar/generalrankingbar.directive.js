import { GeneralrankingbarController } from './generalrankingbar.controller';

export function GeneralrankingbarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/generalrankingbar/generalrankingbar.html',
		replace: true,
		controller: Generalrakingbar,
		controllerAs: 'generalrakingbar',
		bindToController: true
	};

	return directive;
}


