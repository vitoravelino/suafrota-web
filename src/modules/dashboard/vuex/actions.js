export default {
  toggleSidebar({ commit, state }) {
    commit('TOGGLE_SIDEBAR', !state.sidebar.collapse);
  },

  toggleControlSidebar({ commit, state }) {
    commit('TOGGLE_CONTROL_SIDEBAR', !state.controlSidebar.collapse);
  },

  setControlSidebar({ commit }, collapse) {
    commit('TOGGLE_CONTROL_SIDEBAR', collapse);
  },

  setAlert({ commit }, alert) {
    alert.title = alert.title || 'Alerta';

    commit('SET_ALERT', alert);
  },

  hideAlert({ commit }) {
    commit('HIDE_ALERT');
  },
};
