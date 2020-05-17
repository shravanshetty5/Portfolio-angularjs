import angular from 'angular';
import projectCard from './project-card.component';
import projectList from './projects-list.component';

export default angular.module('projects', [])
  .component('projectList', projectList)
  .component('projectCard', projectCard)
  .name;
