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
      @edit="onEdit"
      @remove="remove">
    </data-table>
  </content-main>
</template>

<script>
  import { findIndex } from 'utils/array';

  import DataTable from 'modules/dashboard/components/data-table';

  import UsersService from '../service';

  import { removeMixin as UserRemoveMixin } from '../mixins';

  export default {
    mixins: [UserRemoveMixin],

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

      remove(user) {
        this.onRemove(user).then(() => {
          const index = findIndex(this.users, (u) => u.id === user.id);
          const users = [
            ...this.users.slice(0, index),
            ...this.users.slice(index + 1),
          ];

          this.$set('users', users);
        });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
