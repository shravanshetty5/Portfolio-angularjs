const schoolDetails = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;
  },
  bindings: {
    school: '<'
  },
  template: require('./school-details.component.html')
};

export default schoolDetails;
