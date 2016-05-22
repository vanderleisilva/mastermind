import { PersonalscorebarService } from './personalscorebar.service';
import { PersonalscorebarDirective } from './personalscorebar.directive';

export default angular.module('app.components.personalscorebar', [
])
.service('Personalscorebar', PersonalscorebarService)
.directive('jhPersonalscorebar', PersonalscorebarDirective);



