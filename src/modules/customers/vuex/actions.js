export default {
  setCurrentCustomer({ commit, state }, customer) {
    commit('SET_CURRENT_CUSTOMER', customer);
  },
};
