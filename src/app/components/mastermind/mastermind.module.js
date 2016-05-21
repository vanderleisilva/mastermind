import { MastermindService } from './mastermind.service';
import { MastermindDirective } from './mastermind.directive';

export default angular.module('app.component.mastermind', [
])
.service('Mastermind', MastermindService)
.directive('jhMastermind', MastermindDirective);
