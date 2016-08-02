<template>
  <div class="user-panel">
    <div class="pull-left image">
      <img src="http://lorempixel.com/160/160/people/" class="img-circle" alt="User Image">
    </div>
    <div class="pull-left info">
      <p>{{ currentUser.name }} {{ currentUser.surname }}</p>
      <!-- Status -->
      <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters(['currentUser']),
  };
</script>
