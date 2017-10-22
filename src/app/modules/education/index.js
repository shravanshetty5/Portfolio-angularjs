import angular from 'angular';

import education from './education-layout.component';
import schoolList from './school-list.component';
import school from './school.component';
import schoolDetails from './school-details.component';

export default angular.module('education', [])
  .component('schoolList', schoolList)
  .component('school', school)
  .component('schoolDetails', schoolDetails)
  .component('education', education)
  .name;
