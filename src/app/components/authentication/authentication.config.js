export function AuthenticationConfig ($authProvider, SystemProvider) {
	'ngInject';

	$authProvider.loginUrl = SystemProvider.$get().restUrlBackEnd + 'users';
	$authProvider.facebook({
    clientId: '227170780996155'
  });
}
