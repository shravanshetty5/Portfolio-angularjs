import ProgressBar from 'progressbar.js';
import Masonry from 'masonry-layout';

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

    vm.$onInit = function () {
      setTimeout(function() {
        let elem = document.querySelector('.grid');
        let msnry = new Masonry( elem, {
          // options
          itemSelector: '.grid-item',
          columnWidth: 200
        });
      }, 100);
    };
};



const skills = {
    controllerAs: 'vm',
    controller: skillsCtrl,
    template: require('./skills.component.html')
  };
  
  export default skills;
  