import ProgressBar from 'progressbar.js';

const skillsCtrl = function () {
    let vm = this;
    vm.skills = [
      {
        'id': 0,
        'name': 'JavaScript',
        'level': '50'
      },
      {
        'id': 1,
        'name': 'AngularJS',
        'level': '70'
      },
      {
        'id': 2,
        'name': 'ReactJS',
        'level': '40'
      }
    ];
    console.log(vm.skills);
};



const skills = {
    controllerAs: 'vm',
    controller: skillsCtrl,
    template: require('./skills.component.html')
  };
  
  export default skills;
  