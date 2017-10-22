const school = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
        vm.moreInfo = false;
        
        vm.toggleMoreInfo = function() {
            vm.moreInfo = !vm.moreInfo;
        };
    },
    bindings: {
        school: '<'
    },
    template: require('./school.component.html')
};

export default school;