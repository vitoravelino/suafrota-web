export default {
  TOGGLE_SIDEBAR(state, collapse) {
    state.sidebar.collapse = collapse;
  },

  SET_ALERT(state, alert) {
    state.alert = alert;
  },

  HIDE_ALERT(state) {
    state.alert = {};
  },
};
