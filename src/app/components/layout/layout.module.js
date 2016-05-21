import { HeaderDirective } from './header/header.directive';
import { FooterDirective } from './footer/footer.directive';
import { MenuDirective } from './menu/menu.directive';

export default angular.module('app.components.layout', [
	'ui.bootstrap'
])
.directive('jhMenu', MenuDirective)
.directive('jhHeader', HeaderDirective)
.directive('jhFooter', FooterDirective);
