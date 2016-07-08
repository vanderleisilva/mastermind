export class LoggerService {

	constructor($log, toastr){
		'ngInject';
		this.log = $log;
		this.toastr = toastr;
	}

	error(message, data, title = 'MastermindUI') {
		this.toastr.error(message.toString(), title);
		this.log.error('Error: ' + message, data);
	}

	info(message, data, title = 'MastermindUI') {
		this.toastr.info(message.toString(), title);
		this.log.info('Info: ' + message, data);
	}

	success(message, data, title = 'MastermindUI') {
		this.toastr.success(message.toString(), title);
		this.log.info('Success: ' + message, data);
	}

	warning(message, data, title = 'MastermindUI') {
		this.toastr.warning(message.toString(), title);
		this.log.warn('Warning: ' + message, data);
	}
}
