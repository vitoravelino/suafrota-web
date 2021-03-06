import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';

import { sync } from 'vuex-router-sync';
import { configRoutes } from './router/config';
import { configValidators } from './validators';
import { configInterceptors } from './interceptors';
import { registerGlobalComponents } from './modules/dashboard/config';

import Authorization from './plugins/authorization';
import App from './modules/app';
import store from './vuex/store';

import './directives';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);
Vue.use(Authorization);

Vue.config.debug = process.env.DEBUG;

const router = new VueRouter();

configRoutes(router);

sync(store, router);

configValidators();
configInterceptors(router);
registerGlobalComponents();

router.start({
  store,
  components: { App },
}, 'body');
