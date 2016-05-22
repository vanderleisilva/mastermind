import { AuthenticationService } from './authentication.service';
import { AuthenticationDirective } from './authentication.directive';
import { AuthenticationConfig } from './authentication.config';

export default angular.module('app.component.authentication', [
	'satellizer'
])
.config(AuthenticationConfig)
.service('Authentication', AuthenticationService)
.directive('jhAuthentication', AuthenticationDirective);
