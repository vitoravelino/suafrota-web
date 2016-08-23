import Vue from 'vue';

import Box from './components/box/box';
import BoxHeader from './components/box/box-header';
import BoxBody from './components/box/box-body';
import BoxFooter from './components/box/box-footer';

import ContentHeader from './components/content/header';
import ContentMain from './components/content/main';
import ContentInnerHeader from './components/content/inner-header';

export function registerGlobalComponents() {
  Vue.component('box', Box);
  Vue.component('box-header', BoxHeader);
  Vue.component('box-body', BoxBody);
  Vue.component('box-footer', BoxFooter);

  Vue.component('content-header', ContentHeader);
  Vue.component('content-main', ContentMain);
  Vue.component('content-inner-header', ContentInnerHeader);
}
