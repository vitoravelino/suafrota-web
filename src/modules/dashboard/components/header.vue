<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </a>

    <!-- Header Navbar -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" role="button" @click.prevent="toggleSidebar()">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <customer-menu></customer-menu>
          <user-account-menu></user-account-menu>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';

  import UserAccountMenu from './header/account-menu';
  import CustomerMenu from './header/customer-menu';

  export default {
    methods: mapActions(['toggleSidebar']),

    components: {
      UserAccountMenu,
      CustomerMenu,
    },
  };
</script>
