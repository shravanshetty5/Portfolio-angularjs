import ProgressBar from 'progressbar.js';

const skillItemCtrl = function () {
  let vm = this;

  vm.$onInit = function () {
    setTimeout(function () {
      let bar = new ProgressBar.Circle('#progressbar-item-container-' + String(vm.skillId), {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'bounce',
        duration: parseInt(vm.skillLevel)*40,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#aaa',
          a: 0,
          width: 1
        },
        to: {
          color: '#333',
          a: 1,
          width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          vm.value = Math.round(circle.value() * 100);
          if (vm.value === 0) {
            circle.setText('');
          } else {
            circle.setText(String(vm.skillName) + ' \n' + vm.value + '%');
          }

        }
      });
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = '1.3rem';

      bar.animate(parseInt(vm.skillLevel) / 100);
    }, 10);
  };
};



const skillItem = {
  controllerAs: 'vm',
  controller: skillItemCtrl,
  bindings: {
    skillName: '<',
    skillId: '<',
    skillLevel: '<'
  },
  template: require('./skill-item.component.html')
};

export default skillItem;
