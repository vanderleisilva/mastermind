import { InicioController } from './inicio.controller';
import { routerConfig } from './inicio.route';

// Modules
import '../components/mastermind/mastermind.module';
// -------

export default angular.module('app.inicio', [
  'app.component.mastermind'
])
.config(routerConfig)
.controller('InicioController', InicioController);
