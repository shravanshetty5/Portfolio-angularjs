module.exports = {
    controller: ['$location',function ($location) {
        var vm = this;
        vm.$onInit = function () {
            let temp = $location.path().split("/")[1];
            if (temp === "/" || temp === "") {
                vm.currentSelection = "Home"
            } else {
                vm.currentSelection = temp.charAt(0).toUpperCase() + temp.substring(1);
            }
        }

        vm.naviagtionItems = ['Home', 'Skills', 'Experience', 'Education', 'Projects'];

        vm.currentSelector = function (item) {
            vm.currentSelection = item;
        }
    }],
    controllerAs: 'vm',
    template: require('./main-navigation.component.html')
}