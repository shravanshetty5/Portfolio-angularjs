import angular from 'angular';

import skills from './skills.component';
import skillItem from './skill-item.component';

export default angular.module('skills', [])
  .component('skillItem', skillItem)
  .component('skills', skills)
  .name;