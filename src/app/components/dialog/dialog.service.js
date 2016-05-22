export class DialogService {

	constructor($modal, System){
		'ngInject';
		this.modal = $modal;
		this.system = System;
	}

	confirm(options) {
		options = typeof(options) == 'string' ? {message : options} : options;
		options.confirm = options.confirm ? options.confirm : 'Yes';
		options.cancel = options.cancel ? options.cancel : 'No';

		let modalInstance = this.modal.open({
			templateUrl: 'app/components/dialog/dialog.html',
			controller: function($scope, $modalInstance){
				'ngInject';

				$scope.header = 'Confirmation';
				$scope.body = options.message;
				$scope.confirmText = options.confirm;
				$scope.cancelText = options.cancel;
				$scope.cancel = function() {
					$modalInstance.close(false);
				};
				$scope.confirm = function() {
					$modalInstance.close(true);
				};
			},
			controllerAs: 'dialog',
			bindToController: true
		});

		return modalInstance.result;
	}

	alert(options) {
		options = typeof(options) == 'string' ? {message : options} : options;
		options.confirm = options.confirm ? options.confirm : 'Yes';
		options.header = options.header ? options.header : this.system.name;

		let modalInstance = this.modal.open({
			templateUrl: 'app/components/dialog/dialog.html',
			controller: function($scope, $modalInstance){
				'ngInject';

				$scope.header = options.header;
				$scope.body = options.message;
				$scope.confirmText = options.confirm;
				$scope.hideCancelButton = true;
				$scope.cancel = function() {
					$modalInstance.close(false);
				};
				$scope.confirm = function() {
					$modalInstance.close(true);
				};
			},
			controllerAs: 'dialog',
			bindToController: true
		});

		return modalInstance.result;
	}
}
