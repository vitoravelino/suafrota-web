<template>
  <h3>Usuários</h3>
  <data-table :collection="users" :fields="fields" :can-edit="true"></data-table>
</template>

<script>
  import Multiselect from 'vue-multiselect';

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
      Multiselect,
    },
  };
</script>
