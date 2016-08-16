<template>
  <content-header title="Grupos de permissões" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/permission_groups/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar grupo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table :collection="permissionGroups" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../../dashboard/components/content/header';
  import ContentMain from '../../../dashboard/components/content/main';
  import DataTable from '../../../common/components/data-table';

  import PermissionGroupsService from '../../services/permission-groups';

  export default {
    data() {
      return {
        permissionGroups: [],
        fields: {
          id: 'ID',
          name: 'Nome',
          'permissions.count': 'Qtd. permissões',
        },
      };
    },

    route: {
      activate({ next }) {
        PermissionGroupsService.all().then((response) => {
          this.permissionGroups = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(id) {
        this.$router.go({ name: 'permissionGroupShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'permissionGroupEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
