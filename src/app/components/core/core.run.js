export function runBlock (bootstrap3ElementModifier, Authentication) {
	'ngInject';
	Authentication.start();
	bootstrap3ElementModifier.enableValidationStateIcons(true);
}
