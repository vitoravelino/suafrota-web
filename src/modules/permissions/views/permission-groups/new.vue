<template>
  <content-header title="Grupo de permissões" subtitle="Criar novo"></content-header>

  <content-main>
    <permission-group-form :permission-group="permissionGroup" @submit="onSubmit" @back="onBack"></permission-group-form>
  </content-main>
</template>

<script>
  import ContentHeader from '../../../dashboard/components/content/header';
  import ContentMain from '../../../dashboard/components/content/main';
  import PermissionGroupForm from '../../components/permission-groups/form';

  import HistoryMixin from '../../../../mixins/history';

  import PermissionGroupsService from '../../services/permission-groups';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        permissionGroup: {},
      };
    },

    methods: {
      onSubmit() {
        PermissionGroupsService.save(this.permissionGroup).then((response) => {
          const permissionGroup = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Grupo de permissões criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroup.id } });
        });
      },
    },

    components: {
      ContentHeader,
      ContentMain,
      PermissionGroupForm,
    },
  };
</script>
