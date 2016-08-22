import Vue from 'vue';

import configHttpInterceptor from './modules/sessions/interceptors/http';

export function configInterceptors(router) {
  configHttpInterceptor(Vue.http, router);
}
