<template>
  <div></div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    methods: {
      updateCurrentTrackedVehicle() {
        const licensePlate = this.$route.params.license_plate;

        this.trackedVehicles.forEach((v) => {
          if (v.vehicle.license_plate === licensePlate) {
            this.setCurrentTrackedVehicle(v);
          }
        });
      },

      storeListener(mutation) {
        if (mutation.type === 'SET_TRACKED_VEHICLES') {
          this.updateCurrentTrackedVehicle();
        }
      },

      ...mapActions(['setCurrentTrackedVehicle']),
    },

    computed: mapGetters(['trackedVehicles']),

    ready() {
      this.updateCurrentTrackedVehicle();
      this.unsubscribe = this.$store.subscribe(this.storeListener);

      // TODO: redirect to 404 if not found
    },

    destroyed() {
      this.unsubscribe();
      this.setCurrentTrackedVehicle({});
    },
  };
</script>
