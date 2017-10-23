// eslint-disable-next-line
import skillsText from "../../../data/skills-data.json";
import ProgressBar from 'progressbar.js';
import Masonry from 'masonry-layout';

const skillsCtrl = function () {
    let vm = this;
    vm.skills = skillsText;

    vm.$onInit = function () {
      setTimeout(function() {
        let elem = document.querySelector('.grid');
        let msnry = new Masonry( elem, {
          // options
          itemSelector: '.grid-item',
          columnWidth: 200
        });
      }, 200);
    };
};



const skills = {
    controllerAs: 'vm',
    controller: skillsCtrl,
    template: require('./skills.component.html')
  };
  
  export default skills;
  