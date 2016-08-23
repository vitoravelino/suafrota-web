<template>
  <content-inner-header>
    <h4>
      Permissão
      <small>Criar nova</small>
    </h4>
  </content-inner-header>

  <permission-form :permission="permission" @submit="onSubmit" @back="onBack"></permission-form>
</template>

<script>
  import { mapActions } from 'vuex';

  import HistoryMixin from 'mixins/history';

  import PermissionForm from '../../components/permissions/form';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        permission: {},
      };
    },

    methods: {
      onSubmit() {
        this.savePermission(this.permission).then((response) => {
          const permission = response.json().data;
          const permissionGroupId = permission.permission_group_id;

          this.$store.dispatch('setAlert', {
            message: 'Permissão criada com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroupId } });
        });
      },

      ...mapActions(['savePermission']),
    },

    components: {
      PermissionForm,
    },
  };
</script>
