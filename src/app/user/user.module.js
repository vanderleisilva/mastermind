import { UserController } from './user.controller';
import { UserService } from './user.service';
import { routerConfig } from './user.route';

export default angular.module('app.user', [
])
.config(routerConfig)
.service('User', UserService)
.controller('UserController', UserController);
