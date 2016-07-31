export default {
  toggleSidebar({ commit, state }) {
    commit('TOGGLE_SIDEBAR', !state.sidebar.collapse);
  },

  setAlert({ commit }, alert) {
    alert.title = alert.title || 'Alerta';

    commit('SET_ALERT', alert);
  },

  hideAlert({ commit }) {
    commit('HIDE_ALERT');
  },
};
