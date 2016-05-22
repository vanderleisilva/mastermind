import { HeaderDirective } from './header/header.directive';
import { FooterDirective } from './footer/footer.directive';
import { MenuDirective } from './menu/menu.directive';

import '../instructionsbar/instructionsbar.module';
import '../ranking/ranking.module';

export default angular.module('app.components.layout', [
	'ui.bootstrap',
  'app.components.instructionsbar',
	'app.components.ranking'
])
.directive('jhMenu', MenuDirective)
.directive('jhHeader', HeaderDirective)
.directive('jhFooter', FooterDirective);
