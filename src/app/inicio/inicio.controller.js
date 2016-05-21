export class InicioController {
	constructor ($scope, System) {
		'ngInject';

		$scope.system = System.name;
		$scope.description = System.description;
		$scope.user = 'Vanderlei Silva';
	}
}
