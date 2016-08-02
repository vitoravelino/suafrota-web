<template>
  <li class="dropdown user user-menu", :class="{open: open}">
    <!-- Menu Toggle Button -->
    <a href="#" class="dropdown-toggle" @click.prevent="toggleDropdown()" @blur="hideDropdown()">
      <!-- The user image in the navbar-->
      <img src="http://lorempixel.com/160/160/people/" class="user-image" alt="User Image">
      <!-- hidden-xs hides the username on small devices so only the image appears. -->
      <span class="hidden-xs">{{ currentUser.name }} {{ currentUser.surname }}</span>
    </a>

    <ul class="dropdown-menu">
      <!-- The user image in the menu -->
      <li class="user-header">
        <img src="http://lorempixel.com/160/160/people/" class="img-circle" alt="User Image">

        <p>
          {{ currentUser.name }} {{ currentUser.surname }} - Web Developer
          <small>Member since Nov. 2012</small>
        </p>
      </li>

      <!-- Menu Body -->
      <li class="user-body">
        <div class="row">
          <div class="col-xs-4 text-center">
            <a href="#">Followers</a>
          </div>
          <div class="col-xs-4 text-center">
            <a href="#">Sales</a>
          </div>
          <div class="col-xs-4 text-center">
            <a href="#">Friends</a>
          </div>
        </div>
        <!-- /.row -->
      </li>

      <!-- Menu Footer-->
      <li class="user-footer">
        <div class="pull-left">
          <a href="#" class="btn btn-default btn-flat">Profile</a>
        </div>
        <div class="pull-right">
          <a href="#" class="btn btn-default btn-flat">Sign out</a>
        </div>
      </li>
    </ul>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        open: false,
      };
    },

    computed: mapGetters(['currentUser']),

    methods: {
      toggleDropdown() {
        this.$set('open', !this.open);
      },

      hideDropdown() {
        this.$set('open', false);
      },
    },
  };
</script>
