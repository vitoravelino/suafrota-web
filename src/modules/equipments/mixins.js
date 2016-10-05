import { mapActions } from 'vuex';

import EquipmentsService from './service';

export const removeMixin = {
  methods: {
    onRemove(equipment = this.equipment) {
      const confirmRemoval = () => EquipmentsService.confirmRemoval(equipment);
      const remove = () => EquipmentsService.remove(equipment.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Equipamento removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/equipments' });

            resolve();
          })
          .catch(reject);
      });

      return promise;
    },

    ...mapActions(['setAlert']),
  },
};
