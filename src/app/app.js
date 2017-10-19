import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import uirouter from 'angular-ui-router';

import routing from './app.router';
import mainNavigation from './modules/mainNavigation';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
  }
}



const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, mainNavigation])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;