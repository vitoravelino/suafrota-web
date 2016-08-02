<template>
  <content-header title="Usuários" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/users/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar usuário
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table :collection="users" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import DataTable from '../../common/components/data-table';

  import UsersService from '../service';

  export default {
    data() {
      return {
        users: [],
        fields: {
          id: 'ID',
          name: 'Nome',
          surname: 'Sobrenome',
          email: 'Email',
        },
      };
    },

    route: {
      activate({ next }) {
        UsersService.all().then((response) => {
          this.users = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(id) {
        this.$router.go({ name: 'userShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'userEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
