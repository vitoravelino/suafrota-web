import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueValidator from 'vue-validator';

import { sync } from 'vuex-router-sync';
import { configRoutes } from './router/config';

import store from './vuex/store';
import App from './components/app';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueValidator);

const router = new VueRouter();

configRoutes(router);

sync(store, router);

router.start({
  store,
  components: { App },
}, 'body');
