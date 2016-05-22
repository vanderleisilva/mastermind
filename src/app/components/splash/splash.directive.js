import { SplashController } from './splash.controller';

export function SplashDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/splash/splash.html',
		replace: true,
		controller: SplashController,
		controllerAs: 'splash',
		bindToController: true
	};

	return directive;
}
