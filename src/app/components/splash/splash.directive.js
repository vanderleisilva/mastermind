import { SplashController } from './splash.controller';

export function SplashDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/splash/splash.html',
		replace: true,
		scope:{
			close : '&',
			show : "="
		},
		controller: SplashController,
		controllerAs: 'splash',
		bindToController: true
	};

	return directive;
}
