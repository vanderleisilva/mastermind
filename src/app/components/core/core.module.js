import { SystemProvider } from './system.provider';
import { config } from './core.config';
import { runBlock } from './core.run';

export default angular.module('app.components.core', [
	'ngTouch',
	'ngSanitize',
	'ngResource',
	'ui.router',
	'smart-table',
	'ncy-angular-breadcrumb',
	'ui.mask',
	'jcs-autoValidate',
	'angular-loading-bar',
	'ngAnimate'
])
.provider('System', SystemProvider)
.config(config)
.run(runBlock);
