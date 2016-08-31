<template>
  <content-header title="Grupo de permissões" subtitle="Detalhes"></content-header>

  <content-main>
    <permission-group-details :permission-group="permissionGroup" @remove="onRemove"></permission-group-details>

    <router-view></router-view>
  </content-main>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import PermissionGroupDetails from '../../components/permission-groups/details';

  import PermissionGroupsService from '../../services/permission-groups';

  export default {
    route: {
      activate({ to, next }) {
        this.fetchPermissionGroup(to.params.id).then(() => {
          next();
        });
      },
    },

    computed: mapGetters({
      permissionGroup: 'currentPermissionGroup',
    }),

    methods: {
      onRemove() {
        PermissionGroupsService.confirmRemoval(this.permissionGroup).then(() => {
          PermissionGroupsService.remove(this.permissionGroup.id).then(() => {
            this.setAlert({
              message: 'Grupo de permissões removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/permission_groups' });
          });
        });
      },

      ...mapActions(['setAlert', 'fetchPermissionGroup']),
    },

    components: {
      PermissionGroupDetails,
    },
  };
</script>
