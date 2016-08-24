<template>
  <content-header title="Usuários" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/users/new'}" v-if="$auth.can('users.store')">
        <span class="fa fa-plus"></span>
        &nbsp; Criar usuário
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="users"
      :fields="fields"
      :can-show="$auth.can('users.show')"
      :can-edit="$auth.can('users.update')"
      :can-remove="$auth.can('users.destroy')"
      @show="onShow"
      @edit="onEdit">
    </data-table>
  </content-main>
</template>

<script>
  import DataTable from 'modules/dashboard/components/data-table';

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
      onShow(user) {
        this.$router.go({ name: 'userShow', params: { id: user.id } });
      },

      onEdit(user) {
        this.$router.go({ name: 'userEdit', params: { id: user.id } });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
