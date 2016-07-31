export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  REMOVE_USER(state) {
    state.user = null;
  },

  REMOVE_TOKEN(state) {
    state.token = null;
  },
};
