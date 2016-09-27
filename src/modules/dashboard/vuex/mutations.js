export default {
  TOGGLE_SIDEBAR(state, collapse) {
    state.sidebar.collapse = collapse;
  },

  TOGGLE_CONTROL_SIDEBAR(state, collapse) {
    state.controlSidebar.collapse = collapse;
  },

  SET_ALERT(state, alert) {
    state.alert = alert;
  },

  HIDE_ALERT(state) {
    state.alert = {};
  },
};
