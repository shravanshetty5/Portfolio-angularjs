const workList = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
    },
    bindings: {
        works: '<'
    },
    template: require('./work-list.component.html')
};

export default workList;