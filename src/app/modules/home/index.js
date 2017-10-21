import angular from 'angular';
import typewriter from 'angular-typewriter';

import home from './home.component';

export default angular.module('home', [typewriter])
  .component('home', home)
  .name;
