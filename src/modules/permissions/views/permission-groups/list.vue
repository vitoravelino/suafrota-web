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
      @edit="onEdit"
      @remove="remove">
    </data-table>
  </content-main>
</template>

<script>
  import { findIndex } from 'utils/array';

  import DataTable from 'modules/dashboard/components/data-table';

  import PermissionGroupsService from '../../services/permission-groups';

  import { removeMixin as PermissionGroupRemoveMixin } from '../../mixins';

  export default {
    mixins: [PermissionGroupRemoveMixin],

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

      remove(permissionGroup) {
        this.onRemove(permissionGroup).then(() => {
          const index = findIndex(this.permissionGroups, (p) => p.id === permissionGroup.id);
          const permissionGroups = [
            ...this.permissionGroups.slice(0, index),
            ...this.permissionGroups.slice(index + 1),
          ];

          this.$set('permissionGroups', permissionGroups);
        });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
