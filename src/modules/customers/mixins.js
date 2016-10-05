import { mapActions } from 'vuex';

import CustomersService from './service';

export const removeMixin = {
  methods: {
    onRemove(customer = this.customer) {
      const confirmRemoval = () => CustomersService.confirmRemoval(customer);
      const remove = () => CustomersService.remove(customer.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Cliente removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/customers' });

            resolve();
          })
          .catch(reject);
      });

      return promise;
    },

    ...mapActions(['setAlert']),
  },
};
