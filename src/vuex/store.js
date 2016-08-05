import Vue from 'vue';
import Vuex from 'vuex';

import dashboard from '../modules/dashboard/vuex/store';
import customers from '../modules/customers/vuex/store';
import sessions from '../modules/sessions/vuex/store';
import permissions from '../modules/permissions/vuex/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    dashboard,
    customers,
    sessions,
    permissions,
  },
  strict: debug,
});
