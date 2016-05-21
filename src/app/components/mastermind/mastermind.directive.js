import { MastermindController } from './mastermind.controller';

export function MastermindDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/mastermind/mastermind.html',
		replace: true,
		controller: MastermindController,
		controllerAs: 'mastermind',
		bindToController: true
	};

	return directive;
}
