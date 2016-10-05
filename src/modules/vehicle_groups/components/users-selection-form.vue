<template>
  <div>
    <box>
      <box-header class="with-border">
        <h4 class="box-title">Usuários</h4>
      </box-header>
      <box-body>
        <multiselect
          :options="users"
          :selected="vehicleGroup.users"
          :loading="isUserSearchLoading"
          :multiple="true"
          :custom-label="userLabel"
          :limit="1"
          :clear-on-select="false"
          :close-on-select="false"
          @search-change="onSearchUser"
          @update="onUserUpdate"
          key="id"
          placeholder="Digite o nome do usuário">
        </multiselect>

        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th width="50"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in vehicleGroup.users" track-by="$index">
              <td>{{ user.name }}</td>
              <td>
                <i class="fa fa-fw fa-trash" @click="onRemoveUser($index)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </box-body>
    </box>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  import UsersService from 'modules/users/service';

  export default {
    props: ['vehicleGroup'],

    data() {
      return {
        isUserSearchLoading: false,
        users: [],
      };
    },

    methods: {
      onSearchUser(query) {
        this.isUserSearchLoading = true;

        UsersService.search({ name: query }).then((response) => {
          const users = response.json().data;

          this.users = users;
          this.isUserSearchLoading = false;
        });
      },

      onUserUpdate(users) {
        this.vehicleGroup.users = users;
      },

      onRemoveUser(index) {
        // change to immutable
        this.vehicleGroup.users.splice(index, 1);
      },

      userLabel(user) {
        return `${user.name} ${user.surname}`;
      },
    },

    components: {
      Multiselect,
    },
  };
</script>
