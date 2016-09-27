export default {
  SET_TRACKED_VEHICLES(state, vehicles) {
    state.trackedVehicles = vehicles;
  },

  SET_CURRENT_TRACKED_VEHICLE(state, vehicle) {
    state.currentTrackedVehicle = vehicle;
  },

};
