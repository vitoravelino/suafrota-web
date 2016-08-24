<template>
  <content-header title="Grupo de permissões" subtitle="Criar novo"></content-header>

  <content-main>
    <permission-group-form :permission-group="permissionGroup" @submit="onSubmit"></permission-group-form>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import PermissionGroupForm from '../../components/permission-groups/form';

  import PermissionGroupsService from '../../services/permission-groups';

  export default {
    data() {
      return {
        permissionGroup: {},
      };
    },

    methods: {
      onSubmit() {
        PermissionGroupsService.save(this.permissionGroup).then((response) => {
          const permissionGroup = response.json().data;

          this.setAlert({
            message: 'Grupo de permissões criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroup.id } });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      PermissionGroupForm,
    },
  };
</script>
