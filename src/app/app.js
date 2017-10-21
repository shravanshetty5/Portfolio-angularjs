import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import uirouter from 'angular-ui-router';
import 'angular-typewriter/dist/angular-typewrite.css';

import routing from './app.router';
import mainNavigation from './modules/mainNavigation';
import home from './modules/home';
import error from './modules/error';
import education from './modules/education';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {
  constructor() {}
}



const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, mainNavigation, home, error, education])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
