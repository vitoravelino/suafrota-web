<template>
  <content-header title="Usuário" subtitle="Editar"></content-header>

  <content-main>
    <user-form :user="user" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></user-form>
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

    route: {
      activate({ to, next }) {
        UsersService.get(to.params.id).then((data) => {
          this.user = data.json();
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        UsersService.update(this.user).then((data) => {
          const user = data.json();

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
      ContentHeader,
      ContentMain,
      UserForm,
    },
  };
</script>
