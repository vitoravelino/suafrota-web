import { mapActions } from 'vuex';

import UsersService from './service';

export const removeMixin = {
  methods: {
    onRemove(user = this.user) {
      const confirmRemoval = () => UsersService.confirmRemoval(user);
      const remove = () => UsersService.remove(user.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Usuário removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/users' });

            resolve();
          })
          .catch(reject);
      });

      return promise;
    },

    ...mapActions(['setAlert']),
  },
};
