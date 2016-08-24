<template>
  <content-header title="Usuário" subtitle="Editar"></content-header>

  <content-main>
    <user-form
      :user="user"
      :is-edit="true"
      :can-edit="$auth.can('users.update')"
      :can-destroy="$auth.can('users.destroy')"
      @submit="onSubmit"
      @remove="onRemove">
    </user-form>
  </content-main>
</template>

<script>
  import UserForm from '../components/form';

  import UsersService from '../service';

  export default {
    data() {
      return {
        user: {},
      };
    },

    route: {
      activate({ to, next }) {
        UsersService.get(to.params.id).then((response) => {
          this.user = response.json().data;
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        UsersService.update(this.user).then((response) => {
          const user = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Usuário atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'userShow', params: { id: user.id } });
        });
      },

      onRemove() {
        UsersService.remove(this.user.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Usuário removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/users' });
        });
      },
    },

    components: {
      UserForm,
    },
  };
</script>
