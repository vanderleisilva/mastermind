export class SystemProvider {
	$get() {
		return {
			name : 'MastermindUI',
			description : 'Interactive user interface project',
			restUrl : 'http://az-mastermind.herokuapp.com/',
			restUrlBackEnd : 'http://192.168.0.104/mastermindB/',
			login : 'login',
			initial : 'inicio'
		}
	}
}
