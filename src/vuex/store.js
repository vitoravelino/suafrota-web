import Vue from 'vue';
import Vuex from 'vuex';

import dashboard from '../modules/dashboard/vuex/store';
import sessions from '../modules/sessions/vuex/store';
import permissions from '../modules/permissions/vuex/store';
import tracking from '../modules/tracking/vuex/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    dashboard,
    sessions,
    permissions,
    tracking,
  },
  strict: debug,
});
