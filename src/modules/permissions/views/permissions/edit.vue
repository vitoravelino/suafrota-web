<template>
  <content-inner-header>
    <h4>
      Permissão
      <small>Editar</small>
    </h4>
  </content-inner-header>

  <permission-form :permission="permission" edit="true" @submit="onSubmit" @remove="onRemove"></permission-form>
</template>

<script>
  import { mapActions } from 'vuex';

  import PermissionForm from '../../components/permissions/form';

  import PermissionsService from '../../services/permissions';

  export default {
    data() {
      return {
        permission: {},
      };
    },

    route: {
      activate({ to, next }) {
        PermissionsService.get(to.params.id, to.params.permissionId).then((response) => {
          this.permission = response.json().data;
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        const permissionGroupId = this.permission.permission_group_id;

        this.updatePermission(this.permission).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Permissão atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroupId } });
        });
      },

      onRemove() {
        const permissionGroupId = this.permission.permission_group_id;

        this.removePermission(this.permission).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Permissão removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroupId } });
        });
      },

      ...mapActions(['updatePermission', 'removePermission']),
    },

    components: {
      PermissionForm,
    },
  };
</script>
