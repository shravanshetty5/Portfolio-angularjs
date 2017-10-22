const schoolList = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
    },
    bindings: {
        schools: '<'
    },
    template: require('./school-list.component.html')
};

export default schoolList;