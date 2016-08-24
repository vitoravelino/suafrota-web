<template>
  <content-inner-header>
    <h4>Permissões de {{ permissionGroup.name }}</h4>
    <a class="btn btn-primary" v-link="{ name: 'permissionNew', params: { id: permissionGroup.id } }">
      <span class="fa fa-plus"></span>
      &nbsp; Criar permissão
    </a>
  </content-inner-header>

  <data-table :collection="permissions" :fields="fields" :can-show="false" :can-edit="true" :can-remove="true" @edit="onEdit" @remove="onRemove"></data-table>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import DataTable from 'modules/dashboard/components/data-table';

  export default {
    data() {
      return {
        fields: {
          id: 'ID',
          name: 'Nome',
          description: 'Descrição',
        },
      };
    },

    computed: mapGetters({
      permissionGroup: 'currentPermissionGroup',

      permissions: 'currentPermissions',
    }),

    methods: {
      onEdit(permissionId) {
        this.$router.go({
          name: 'permissionEdit',
          params: {
            id: this.permissionGroup.id,
            permissionId,
          },
        });
      },

      onRemove(permission) {
        this.removePermission(permission).then(() => {
          this.setAlert({
            message: 'Permissão removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
        });
      },

      ...mapActions(['setAlert', 'removePermission']),
    },

    components: {
      DataTable,
    },
  };
</script>
