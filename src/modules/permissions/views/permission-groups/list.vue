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
      @remove="onRemove">
    </data-table>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

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

      onRemove(permissionGroup) {
        PermissionGroupsService.confirmRemoval(permissionGroup).then(() => {
          PermissionGroupsService.remove(permissionGroup.id).then(() => {
            this.setAlert({
              message: 'Grupo de permissões removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });
          });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      DataTable,
    },
  };
</script>
