<template>
  <content-header title="Usuário" subtitle="Detalhes"></content-header>

  <content-main>
    <user-details :user="user" @remove="onRemove"></user-details>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import UserDetails from '../components/details';

  import UsersService from '../service';

  export default {
    data() {
      return {
        user: {},
      };
    },

    route: {
      activate({ to, next }) {
        UsersService.get(to.params.id).then((data) => {
          this.user = data.json();
          next();
        });
      },
    },

    methods: {
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
      ContentHeader,
      ContentMain,
      UserDetails,
    },
  };
</script>
