import { RankingService } from './ranking.service';
import { GeneralrankingbarDirective } from './general/generalrankingbar.directive';
import { PersonalscorebarDirective } from './personal/personalscorebar.directive';

export default angular.module('app.components.ranking', [
])
.service('Ranking', RankingService)
.directive('jhGeneralrankingbar', GeneralrankingbarDirective)
.directive('jhPersonalscorebar', PersonalscorebarDirective);
