// eslint-disable-next-line
import eduText from "../../../data/education-data";
const education = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;
    vm.educationData = eduText;
  },
  template: require('./education-layout.component.html')
};

export default education;