module.exports = {
    controllerAs: 'vm',
    controller: function () {
        var vm = this;

        vm.welcomeText = ['Hi There, and Welcome to my page.','This is Shravan Shetty and I am a FullStack Developer!!'];
    },
    template: require('./home.component.html')
}

