import { DialogService } from './dialog.service';

export default angular.module('app.components.dialog', [
	'ui.bootstrap'
])
.service('Dialog', DialogService);
