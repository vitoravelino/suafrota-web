import { mapActions } from 'vuex';

import VehicleGroupsService from './service';

export const removeMixin = {
  methods: {
    onRemove(vehicleGroup = this.vehicleGroup) {
      const confirmRemoval = () => VehicleGroupsService.confirmRemoval(vehicleGroup);
      const remove = () => VehicleGroupsService.remove(vehicleGroup.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Grupo de veículos removido com sucesso!',
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
