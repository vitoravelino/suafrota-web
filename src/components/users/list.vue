<template>
  <ul>
    <li v-for="user in users">
      {{ user | json }}
    </li>
  </ul>
</template>

<script>
  import usersService from '../../services/users';

  export default {
    ready() {
      usersService.all().then((data) => {
        console.log(data);
      });
    },
  };
</script>
