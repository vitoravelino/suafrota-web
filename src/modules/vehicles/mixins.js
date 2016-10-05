import { mapActions } from 'vuex';

import VehiclesService from './service';

export const removeMixin = {
  methods: {
    onRemove(vehicle = this.vehicle) {
      const confirmRemoval = () => VehiclesService.confirmRemoval(vehicle);
      const remove = () => VehiclesService.remove(vehicle.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Veículo removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/vehicle_groups' });

            resolve();
          })
          .catch(reject);
      });

      return promise;
    },

    ...mapActions(['setAlert']),
  },
};
