<template>
  <content-header title="Usuário" subtitle="Detalhes"></content-header>

  <content-main>
    <user-details :user="user" @remove="onRemove"></user-details>
  </content-main>
</template>

<script>
  import UserDetails from '../components/details';
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

    components: {
      UserDetails,
    },
  };
</script>
