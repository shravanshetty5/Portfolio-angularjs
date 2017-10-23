const workDetails = {
    controllerAs: 'vm',
    controller: function () {
        let vm = this;
    },
    bindings: {
        work: '<'
    },
    template: require('./work-details.component.html')
};

export default workDetails;