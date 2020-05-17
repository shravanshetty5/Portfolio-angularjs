const projectCard = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;
    vm.redirectToProject = function() {
      // eslint-disable-next-line no-console
      console.log('this works');
      window.open(vm.project.url, '_blank')
    }
  },
  bindings: {
    project: '<'
  },
  template: require('./project-card.component.html')
};

export default projectCard;
