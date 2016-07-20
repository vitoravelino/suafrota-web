<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <sidebar-user-panel></sidebar-user-panel>

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->

      <sidebar-menu></sidebar-menu>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  import SidebarMenu from './sidebar-menu';
  import SidebarUserPanel from '../users/panel';

  export default {
    components: {
      SidebarMenu,
      SidebarUserPanel,
    },
  };
</script>
