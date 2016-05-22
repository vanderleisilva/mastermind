// Modules
import './components/core/core.module';
import './components/logger/logger.module';
import './components/authentication/authentication.module';

import './components/dialog/dialog.module';
import './components/layout/layout.module';

import './inicio/inicio.module';
import './user/user.module';
// -------

angular.module('app', [

	'app.components.core',
	'app.components.logger',
	'app.component.authentication',

	'app.components.dialog',
	'app.components.layout',

	'app.inicio',
	'app.user'
]);
