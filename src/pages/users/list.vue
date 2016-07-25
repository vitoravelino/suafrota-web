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
    <data-table :collection="users" :fields="fields" :can-edit="true"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../components/common/content/header';
  import ContentMain from '../../components/common/content/main';
  import DataTable from '../../components/common/data-table';

  import UsersService from '../../services/users';

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
        UsersService.all().then((data) => {
          this.users = JSON.parse(data.body);
          next();
        });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
