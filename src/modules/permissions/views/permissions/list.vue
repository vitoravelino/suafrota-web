<style lang="sass">
  .inner-content-header
    margin: 15px 0

    h4
      float: left
      line-height: 34px
      margin: 0

    .btn
      float: right
</style>

<template>
  <div class="inner-content-header clearfix">
    <h4>Permissões de {{ permissionGroup.name }}</h4>
    <a class="btn btn-primary" v-link="{ name: 'permissionNew', params: { id: permissionGroup.id } }">
      <span class="fa fa-plus"></span>
      &nbsp; Criar permissão
    </a>
  </div>

  <data-table :collection="permissions" :fields="fields" :can-show="false" :can-edit="true" :can-remove="true" @edit="onEdit" @remove="onRemove"></data-table>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import ContentHeader from '../../../dashboard/components/content/header';
  import ContentMain from '../../../dashboard/components/content/main';
  import DataTable from '../../../common/components/data-table';

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
          this.$store.dispatch('setAlert', {
            message: 'Permissão removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
        });
      },

      ...mapActions(['removePermission']),
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
