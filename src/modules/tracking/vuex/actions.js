export default {
  setTrackedVehicles({ commit }, vehicles) {
    commit('SET_TRACKED_VEHICLES', vehicles);
  },

  setCurrentTrackedVehicle({ commit }, vehicle) {
    commit('SET_CURRENT_TRACKED_VEHICLE', vehicle);
  },
};
