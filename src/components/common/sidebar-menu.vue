<template>
  <ul class="sidebar-menu">
    <li class="header">HEADER</li>
    <!-- Optionally, you can add icons to the links -->
    <li :class="{'active': $route.path == '/'}">
      <a v-link="{path: '/'}">
        <i class="fa fa-link"></i> <span>Index</span>
      </a>
    </li>
    <li :class="{'active': $route.path == '/users'}"><a v-link="{path: '/users'}"><i class="fa fa-link"></i> <span>Second</span></a></li>
    <li class="treeview">
      <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span> <i class="fa fa-angle-left pull-right"></i></a>
      <ul class="treeview-menu">
        <li><a href="#">Link in level 2</a></li>
        <li><a href="#">Link in level 2</a></li>
      </ul>
    </li>
  </ul>
</template>
