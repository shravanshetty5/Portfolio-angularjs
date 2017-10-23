import angular from 'angular';

import experience from './experience.component';
import workList from './work-list.component';
import work from './work.component';
import workDetails from './work-details.component';

export default angular.module('experience', [])
  .component('work', work)
  .component('workList', workList)
  .component('workDetails', workDetails)
  .component('experience', experience)
  .name;
