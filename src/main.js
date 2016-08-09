import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';

import { sync } from 'vuex-router-sync';
import { configRoutes } from './router/config';
import { configValidators } from './validators';
import { configInterceptors } from './interceptors';

import store from './vuex/store';
import App from './modules/app';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

Vue.config.debug = process.env.DEBUG;

export const router = new VueRouter();

configRoutes(router);

sync(store, router);

configValidators();
configInterceptors();

router.start({
  store,
  components: { App },
}, 'body');
