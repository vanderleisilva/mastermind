export class SystemProvider {
	$get() {
		return {
			name : 'Matermind UI',
			description : 'Mastermind user interace project',
			restUrl : 'http://az-mastermind.herokuapp.com/',
			restUrlBackEnd : 'http://192.168.0.104/mastermindB/',
			login : 'login',
			initial : 'inicio'
		}
	}
}
