// eslint-disable-next-line
import Masonry from 'masonry-layout';
import skillsText from "../../../data/skills-data.json";

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

    vm.click = function (url) {
      if (url) {
        window.location.href = url;
      }
    };
};



const skills = {
    controllerAs: 'vm',
    controller: skillsCtrl,
    template: require('./skills.component.html')
  };

  export default skills;
