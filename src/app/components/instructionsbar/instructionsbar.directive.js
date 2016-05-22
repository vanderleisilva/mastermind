import { InstructionsbarController } from './instructionsbar.controller';

export function InstructionsbarDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/instructionsbar/instructionsbar.html',
		scope:{
			show : '='
		},
		replace: true,
		controller: InstructionsbarController,
		controllerAs: 'instructionsbar',
		bindToController: true
	};

	return directive;
}
