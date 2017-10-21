import angular from 'angular';

import error from './error.component';

export default angular.module('error', [])
    .component('error', error)
    .name;