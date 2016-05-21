import { LoginController } from './login.controller';
import { routerConfig } from './login.route';

export default angular.module('app.login', [
])
.config(routerConfig)
.controller('LoginController', LoginController);
