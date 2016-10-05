<template>
  <content-header title="Usuário" subtitle="Editar"></content-header>

  <content-main>
    <user-form
      :user="user"
      :is-edit="true"
      :can-edit="$auth.can('users.update')"
      :can-remove="$auth.can('users.destroy')"
      @submit="onSubmit"
      @remove="onRemove">
    </user-form>
  </content-main>
</template>

<script>
  import UserForm from '../components/form';
  import UsersService from '../service';

  import { removeMixin as UserRemoveMixin } from '../mixins';

  export default {
    mixins: [UserRemoveMixin],

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

          this.setAlert({
            message: 'Usuário atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'userShow', params: { id: user.id } });
        });
      },
    },

    components: {
      UserForm,
    },
  };
</script>
