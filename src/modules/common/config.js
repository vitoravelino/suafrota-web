import Vue from 'vue';

import Box from './components/box/box';
import BoxHeader from './components/box/box-header';
import BoxBody from './components/box/box-body';
import BoxFooter from './components/box/box-footer';

export function registerGlobalComponents() {
  Vue.component('box', Box);
  Vue.component('box-header', BoxHeader);
  Vue.component('box-body', BoxBody);
  Vue.component('boxFooter', BoxFooter);
}
