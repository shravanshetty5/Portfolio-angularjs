// eslint-disable-next-line import/default
import projects from "../../../data/project-data";

const projectList = {
  controllerAs: "vm",
  controller: function () {
    let vm = this;
    vm.projects = projects;
  },
  template: require("./projects-list.component.html"),
};

export default projectList;
