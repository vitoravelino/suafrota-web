export default {
  state: {
    sidebar: {
      collapse: false,
    },
  },

  mutations: {
    TOGGLE_SIDEBAR(state, collapse) {
      state.sidebar.collapse = collapse;
    },
  },

  actions: {
    toggleSidebar({ commit, state }) {
      commit('TOGGLE_SIDEBAR', !state.sidebar.collapse);
    },
  },

  getters: {
    sidebarCollapse: (state) => state.sidebar.collapse,
  },
};
