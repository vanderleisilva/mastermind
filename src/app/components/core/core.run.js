export function runBlock (bootstrap3ElementModifier, defaultErrorMessageResolver, Authentication) {
	'ngInject';

	Authentication.start();

	defaultErrorMessageResolver.setI18nFileRootPath('bower_components/angular-auto-validate/dist/lang');
	defaultErrorMessageResolver.setCulture('pt-br');
	bootstrap3ElementModifier.enableValidationStateIcons(true);
}
