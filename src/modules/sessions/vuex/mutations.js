export default {
  SET_USER(state, user) {
    state.user = user;
    state.availableCustomers = user.available_customers;
  },

  REMOVE_USER(state) {
    state.user = {};
    state.availableCustomers = [];
  },
};
