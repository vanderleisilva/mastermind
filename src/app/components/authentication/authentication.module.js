import { AuthenticationService } from './authentication.service';
import { AuthenticationDirective } from './authentication.directive';

// Modules
import '../recaptcha/recaptcha.module';
// -------

export default angular.module('app.component.authentication', [
	'satellizer',
    'app.component.recaptcha'
])
.service('Authentication', AuthenticationService)
.directive('jhAuthentication', AuthenticationDirective);
