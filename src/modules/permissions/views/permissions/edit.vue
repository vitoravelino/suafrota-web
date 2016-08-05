<template>
  <div class="inner-content-header clearfix">
    <h4>
      Permissão
      <small>Editar</small>
    </h4>
  </div>

  <permission-form :permission="permission" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></permission-form>
</template>

<script>
  import { mapActions } from 'vuex';

  import ContentHeader from '../../../dashboard/components/content/header';
  import ContentMain from '../../../dashboard/components/content/main';
  import PermissionForm from '../../components/permissions/form';

  import HistoryMixin from '../../../../mixins/history';

  import PermissionsService from '../../services/permissions';

  export default {
    mixins: [HistoryMixin],

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
      ContentHeader,
      ContentMain,
      PermissionForm,
    },
  };
</script>
