<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <sidebar-user-panel></sidebar-user-panel>
      <sidebar-search></sidebar-search>
      <sidebar-menu></sidebar-menu>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  import SidebarMenu from './sidebar/menu';
  import SidebarUserPanel from './sidebar/user-panel';
  import SidebarSearch from './sidebar/search';

  export default {
    components: {
      SidebarMenu,
      SidebarUserPanel,
      SidebarSearch,
    },
  };
</script>
