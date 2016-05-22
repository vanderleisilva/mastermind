import { InicioController } from './inicio.controller';
import { routerConfig } from './inicio.route';

// Modules
import '../components/mastermind/mastermind.module';
import '../components/splash/splash.module';
// -------

export default angular.module('app.inicio', [
  'app.component.mastermind',
  'app.component.splash'
])
.config(routerConfig)
.controller('InicioController', InicioController);
