const work = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
        vm.moreInfo = false;

        vm.toggleMoreInfo = function() {
            vm.moreInfo = !vm.moreInfo;
        };
    },
    bindings: {
        work: '<'
    },
    template: require('./work.component.html')
};

export default work;