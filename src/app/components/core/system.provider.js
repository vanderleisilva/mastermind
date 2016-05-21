export class SystemProvider {
	$get() {
		return {
			name : 'Matermind UI',
			description : 'Mastermind user interace project',
			restUrl : 'http://az-mastermind.herokuapp.com/',
			login : 'login',
			initial : 'inicio'
		}
	}
}
