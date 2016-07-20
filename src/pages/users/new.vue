<template>
  <user-form :user="user"></user-form>
</template>

<script>
  import UserForm from '../../components/users/form';

  export default {
    components: {
      UserForm,
    },

    data() {
      return {
        user: {},
      };
    },
  };
</script>
