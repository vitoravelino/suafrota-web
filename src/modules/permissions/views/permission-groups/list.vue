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
    <data-table
      :collection="permissionGroups"
      :fields="fields"
      :can-edit="$auth.is('admin')"
      :can-show="$auth.is('admin')"
      :can-remove="$auth.is('admin')"
      @show="onShow"
      @edit="onEdit">
    </data-table>
  </content-main>
</template>

<script>
  import DataTable from 'modules/dashboard/components/data-table';

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
      onShow(permissionGroup) {
        this.$router.go({ name: 'permissionGroupShow', params: { id: permissionGroup.id } });
      },

      onEdit(permissionGroup) {
        this.$router.go({ name: 'permissionGroupEdit', params: { id: permissionGroup.id } });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
