import { GeneralrankingbarController } from './generalrankingbar.controller';

export function GeneralrankingbarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/ranking/general/generalrankingbar.html',
		scope:{
			show : '='
		},
		replace: true,
		controller: GeneralrankingbarController,
		controllerAs: 'generalrankingbar',
		bindToController: true
	};

	return directive;
}
