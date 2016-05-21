import { AuthenticationController } from './authentication.controller';

export function AuthenticationDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		scope:{
			showRecaptcha : '=',
			login : '&'
		},
		templateUrl: 'app/components/authentication/authentication.html',
		replace: true,
		controller: AuthenticationController,
		controllerAs: 'authentication',
		bindToController: true
	};

	return directive;
}
