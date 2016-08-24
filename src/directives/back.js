import Vue from 'vue';

function back(e) {
  e.preventDefault();
  window.history.back();
}

Vue.directive('sf-back', {
  bind() {
    this.el.addEventListener('click', back);
  },

  unbind() {
    this.el.removeEventListener('click', back);
  },
});
