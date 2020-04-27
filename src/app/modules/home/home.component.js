let home = {
  controllerAs: 'vm',
  controller: function () {
    let vm = this;

    vm.welcomeText = ['Hi There, and Welcome.', 'This is Shravan Shetty and I am a FullStack Developer!!', 'Feel free to look around.', 'Talk to the little guy at the bottom right if you want to contact me.'];
  },
  template: require('./home.component.html')
};

export default home;
