// eslint-disable-next-line
import expText from "../../../data/experience-data.json";
const experience = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
        vm.works = expText;
    },
    template: require('./experience.component.html')
};

export default experience;