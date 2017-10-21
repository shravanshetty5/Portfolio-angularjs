let education = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;
    vm.educationData = [{
        id: 0,
        school: "Texas A&M University - Mays Business School",
        degree: "Master of Science (MS)",
        field: "Management Information Systems",
        grade: "3.6",
        startYear: "2015",
        endYear: "2017",
        description: "",
        relevantCources: "",
        imageUrl: ""
      },
      {
        id: 1,
        school: "NMAMIT, Nitte",
        degree: "Bachelor of Engineering (B.E.)",
        field: "Electronics and Communication Engineering",
        grade: "3.63",
        startYear: "2008",
        endYear: "2012",
        description: "",
        relevantCources: "",
        imageUrl: ""
      }
    ];
  },
  template: require('./education-layout.component.html')
};

export default education;