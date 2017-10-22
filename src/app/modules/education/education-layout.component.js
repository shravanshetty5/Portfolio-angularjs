// eslint-disable-next-line
import etext from "../../../data/education-data";
const education = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;
    vm.educationData = etext;
  },
  template: require('./education-layout.component.html')
};

export default education;