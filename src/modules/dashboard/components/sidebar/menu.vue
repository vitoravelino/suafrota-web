<style lang="sass" scoped>
  .sidebar-menu
    .header
      text-transform: uppercase
</style>

<template>
  <ul class="sidebar-menu">
    <li :class="{'active': $route.path == '/'}">
      <a v-link="{path: '/'}">
        <i class="fa fa-link"></i> <span>Principal</span>
      </a>
    </li>
    <li class="header">Relatórios</li>
    <!-- Optionally, you can add icons to the links -->
    <li :class="{'active': $route.path == '/'}" v-if="canShowRelatorio">
      <a v-link="{path: '/'}">
        <i class="fa fa-link"></i> <span>Relatório 1</span>
      </a>
    </li>
    <li class="header">Administração</li>
    <!-- Optionally, you can add icons to the links -->
    <multilevel name="Usuários" icon="fa-user">
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
    <multilevel name="Veículos" icon="fa-car">
      <li :class="{'active': $route.path == '/vehicle_groups'}">
        <a v-link="{path: '/vehicle_groups'}">
          <i class="fa fa-circle-o"></i>
          Listar grupos
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicle_groups/new'}">
        <a v-link="{path: '/vehicle_groups/new'}">
          <i class="fa fa-circle-o"></i>
          Criar grupo
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicles'}">
        <a v-link="{path: '/vehicles'}">
          <i class="fa fa-circle-o"></i>
          Listar veículos
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicles/new'}">
        <a v-link="{path: '/vehicles/new'}">
          <i class="fa fa-circle-o"></i>
          Criar veículo
        </a>
      </li>
    </multilevel>
    <multilevel name="Equipamentos" icon="fa-plug">
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
    <multilevel name="Clientes" icon="fa-users">
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

    <multilevel name="Permissões" icon="fa-sitemap">
      <li :class="{'active': $route.path == '/permission_groups'}">
        <a v-link="{path: '/permission_groups'}">
          <i class="fa fa-circle-o"></i>
          Listar grupos
        </a>
      </li>
      <li :class="{'active': $route.path == '/permission_groups/new'}">
        <a v-link="{path: '/permission_groups/new'}">
          <i class="fa fa-circle-o"></i>
          Criar grupo
        </a>
      </li>
    </multilevel>
  </ul>
</template>

<script>
  import Multilevel from './multilevel';

  export default {
    computed: {
      canShowRelatorio() {
        return this.$auth.can('relatorios.show');
      },
    },

    components: {
      Multilevel,
    },
  };
</script>
