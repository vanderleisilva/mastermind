import { LoggerService } from './logger.service';
import { config } from './logger.config';

export default angular.module('app.components.logger', [
	'toastr'
])
.config(config)
.service('Logger', LoggerService);
