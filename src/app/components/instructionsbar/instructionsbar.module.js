import { InstructionsbarService } from './instructionsbar.service';
import { InstructionsbarDirective } from './instructionsbar.directive';

export default angular.module('app.components.instructionsbar', [
])
.service('Instructionsbar', InstructionsbarService)
.directive('jhInstructionsbar', InstructionsbarDirective);