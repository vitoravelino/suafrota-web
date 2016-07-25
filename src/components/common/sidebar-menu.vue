<template>
  <ul class="sidebar-menu">
    <li class="header">HEADER</li>
    <!-- Optionally, you can add icons to the links -->
    <li :class="{'active': $route.path == '/'}">
      <a v-link="{path: '/'}">
        <i class="fa fa-link"></i> <span>Principal</span>
      </a>
    </li>
    <multilevel name="Usuários">
      <li :class="{'active': $route.path == '/users'}">
        <a v-link="{path: '/users'}">
          <i class="fa fa-circle-o"></i>
          Listar todos
        </a>
      </li>
      <li :class="{'active': $route.path == '/users/new'}">
        <a v-link="{path: '/users/new'}">
          <i class="fa fa-circle-o"></i>
          Criar novo
        </a>
      </li>
    </multilevel>
    <multilevel name="Veículos">
      <li :class="{'active': $route.path == '/vehicles'}">
        <a v-link="{path: '/vehicles'}">
          <i class="fa fa-circle-o"></i>
          Listar todos
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicles/new'}">
        <a v-link="{path: '/vehicles/new'}">
          <i class="fa fa-circle-o"></i>
          Criar novo
        </a>
      </li>
    </multilevel>
    <multilevel name="Equipamentos">
      <li :class="{'active': $route.path == '/equipments'}">
        <a v-link="{path: '/equipments'}">
          <i class="fa fa-circle-o"></i>
          Listar todos
        </a>
      </li>
      <li :class="{'active': $route.path == '/equipments/new'}">
        <a v-link="{path: '/equipments/new'}">
          <i class="fa fa-circle-o"></i>
          Criar novo
        </a>
      </li>
    </multilevel>
    <multilevel name="Clientes">
      <li :class="{'active': $route.path == '/customers'}">
        <a v-link="{path: '/customers'}">
          <i class="fa fa-circle-o"></i>
          Listar todos
        </a>
      </li>
      <li :class="{'active': $route.path == '/customers/new'}">
        <a v-link="{path: '/customers/new'}">
          <i class="fa fa-circle-o"></i>
          Criar novo
        </a>
      </li>
    </multilevel>
  </ul>
</template>

<script>
  import Multilevel from './sidebar/multilevel';

  export default {
    components: {
      Multilevel,
    },
  };
</script>
