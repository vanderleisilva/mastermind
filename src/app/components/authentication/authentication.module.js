import { AuthenticationService } from './authentication.service';
import { AuthenticationDirective } from './authentication.directive';

export default angular.module('app.component.authentication', [
	'satellizer',
])
.service('Authentication', AuthenticationService)
.directive('jhAuthentication', AuthenticationDirective);
