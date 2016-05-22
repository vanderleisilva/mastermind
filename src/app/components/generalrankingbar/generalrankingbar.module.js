import { GeneralrankingbarService } from './generalrankingbar.service';
import { GeneralrankingbarDirective } from './generalrankingbar.directive';

export default angular.module('app.components.generalrankingbar', [
])
.service('Generalrankingbar', GeneralrankingbarService)
.directive('jhGeneralrankingbar', GeneralrankingbarDirective);
