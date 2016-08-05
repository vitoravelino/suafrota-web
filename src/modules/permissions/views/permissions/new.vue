<template>
  <div class="inner-content-header clearfix">
    <h4>
      Permissão
      <small>Criar nova</small>
    </h4>
  </div>

  <permission-form :permission="permission" @submit="onSubmit" @back="onBack"></permission-form>
</template>

<script>
  import { mapActions } from 'vuex';

  import ContentHeader from '../../../dashboard/components/content/header';
  import ContentMain from '../../../dashboard/components/content/main';
  import PermissionForm from '../../components/permissions/form';

  import HistoryMixin from '../../../../mixins/history';

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
      ContentHeader,
      ContentMain,
      PermissionForm,
    },
  };
</script>
