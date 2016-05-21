export class LoggerService {

	constructor($log, toastr){
		'ngInject';
		this.log = $log;
		this.toastr = toastr;
	}

	error(message, data, title = 'MastermindUI') {
		this.toastr.error(message, title);
		this.log.error('Error: ' + message, data);
	}

	info(message, data, title = 'MastermindUI') {
		this.toastr.info(message, title);
		this.log.info('Info: ' + message, data);
	}

	success(message, data, title = 'MastermindUI') {
		this.toastr.success(message, title);
		this.log.info('Success: ' + message, data);
	}

	warning(message, data, title = 'MastermindUI') {
		this.toastr.warning(message, title);
		this.log.warn('Warning: ' + message, data);
	}
}
