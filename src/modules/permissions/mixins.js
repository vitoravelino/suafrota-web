import { mapActions } from 'vuex';

import PermissionGroupsService from './services/permission-groups';

export const removeMixin = {
  methods: {
    onRemove(permissionGroup = this.permissionGroup) {
      const confirmRemoval = () => PermissionGroupsService.confirmRemoval(permissionGroup);
      const remove = () => PermissionGroupsService.remove(permissionGroup.id);

      const promise = new Promise((resolve, reject) => {
        confirmRemoval()
          .then(remove)
          .then(() => {
            this.setAlert({
              message: 'Grupo de permissões removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/permission_groups' });

            resolve();
          })
          .catch(reject);
      });

      return promise;
    },

    ...mapActions(['setAlert']),
  },
};
