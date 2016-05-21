export function FooterDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		templateUrl: 'app/components/layout/footer/footer.html',
		replace: true,
		controller: FooterController,
		controllerAs: 'footer',
		bindToController: true
	};

	return directive;
}

class FooterController {
	constructor (System) {
		'ngInject';
		this.system = System.name;
	}
}
