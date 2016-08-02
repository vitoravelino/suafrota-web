<template>
  <content-header title="Usuário" subtitle="Criar novo"></content-header>

  <content-main>
    <user-form :user="user" @submit="onSubmit" @back="onBack"></user-form>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import UserForm from '../components/form';

  import HistoryMixin from '../../../mixins/history';

  import UsersService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        user: {},
      };
    },

    methods: {
      onSubmit() {
        UsersService.save(this.user).then((response) => {
          const user = response.json().user;

          this.$store.dispatch('setAlert', {
            message: 'Usuário criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'userShow', params: { id: user.id } });
        });
      },
    },

    components: {
      ContentHeader,
      ContentMain,
      UserForm,
    },
  };
</script>
