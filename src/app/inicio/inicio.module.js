import { InicioController } from './inicio.controller';
import { routerConfig } from './inicio.route';

export default angular.module('app.inicio', [
])
.config(routerConfig)
.controller('InicioController', InicioController);
