<template>
  <content-header title="Usuário" subtitle="Criar novo"></content-header>

  <content-main>
    <user-form :user="user" @submit="onSubmit"></user-form>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import UserForm from '../components/form';

  import UsersService from '../service';

  export default {
    data() {
      return {
        user: {
          permissions_ids: [],
        },
      };
    },

    methods: {
      onSubmit() {
        UsersService.save(this.user).then((response) => {
          const user = response.json().data;

          this.setAlert({
            message: 'Usuário criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'userShow', params: { id: user.id } });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      UserForm,
    },
  };
</script>
