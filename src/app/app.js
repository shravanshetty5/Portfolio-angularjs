import angular from 'angular';
import 'angular-typewriter/dist/angular-typewrite.css';
import uirouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';
import routing from './app.router';
import education from './modules/education';
import error from './modules/error';
import experience from './modules/experience';
import home from './modules/home';
import mainNavigation from './modules/mainNavigation';
import projects from './modules/projects';
import skills from './modules/skills';



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

angular.module(MODULE_NAME, [uirouter, mainNavigation, home, error, education, experience, skills, projects])
  .config(routing)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
