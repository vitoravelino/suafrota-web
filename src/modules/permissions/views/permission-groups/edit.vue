<template>
  <content-header title="Grupo de permissões" subtitle="Editar"></content-header>

  <content-main>
    <permission-group-form :permission-group="permissionGroup" edit="true" @submit="onSubmit" @remove="onRemove"></permission-group-form>
  </content-main>
</template>

<script>
  import PermissionGroupForm from '../../components/permission-groups/form';

  import PermissionGroupsService from '../../services/permission-groups';

  export default {
    data() {
      return {
        permissionGroup: {},
      };
    },

    route: {
      activate({ to, next }) {
        PermissionGroupsService.get(to.params.id).then((response) => {
          this.permissionGroup = response.json().data;
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        PermissionGroupsService.update(this.permissionGroup).then((response) => {
          const permissionGroup = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Grupo de permissão atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'userShow', params: { id: permissionGroup.id } });
        });
      },

      onRemove() {
        PermissionGroupsService.remove(this.permissionGroup.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Grupo de permissão removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/permission_groups' });
        });
      },
    },

    components: {
      PermissionGroupForm,
    },
  };
</script>
