<style lang="sass" scoped>
  .sidebar-menu
    .header
      text-transform: uppercase
</style>

<template>
  <ul class="sidebar-menu">
    <li class="header">Principal</li>
    <li :class="{'active': $route.path == '/tracking'}">
      <a v-link="{path: '/tracking'}">
        <i class="fa fa-map"></i> <span>Rastreamento</span>
      </a>
    </li>
    <multilevel name="Relatórios" icon="fa-file-text" v-if="$auth.canAny('reports')">
      <li :class="{'active': $route.path == '/reports'}" v-if="$auth.can('reports.coordinates')">
        <a v-link="{path: '/reports/coordinates'}">
          <i class="fa fa-circle-o"></i>
          Coordenadas
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/speed'}" v-if="$auth.can('reports.speed')">
        <a v-link="{path: '/reports/speed'}">
          <i class="fa fa-circle-o"></i>
          Excesso de velocidade
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/analytical'}" v-if="$auth.can('reports.analytical')">
        <a v-link="{path: '/reports/analytical'}">
          <i class="fa fa-circle-o"></i>
          Analítico
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/state'}" v-if="$auth.can('reports.state')">
        <a v-link="{path: '/reports/state'}">
          <i class="fa fa-circle-o"></i>
          Tempos (parado/ligado)
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/performance'}" v-if="$auth.can('reports.performance')">
        <a v-link="{path: '/reports/performance'}">
          <i class="fa fa-circle-o"></i>
          Desempenho operacional
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/hours'}" v-if="$auth.can('reports.hours')">
        <a v-link="{path: '/reports/hours'}">
          <i class="fa fa-circle-o"></i>
          Expediente
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/odometer'}" v-if="$auth.can('reports.odometer')">
        <a v-link="{path: '/reports/odometer'}">
          <i class="fa fa-circle-o"></i>
          Odômetro
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/panic'}" v-if="$auth.can('reports.panic')">
        <a v-link="{path: '/reports/panic'}">
          <i class="fa fa-circle-o"></i>
          Pânico
        </a>
      </li>
      <li :class="{'active': $route.path == '/reports/status'}" v-if="$auth.can('reports.status')">
        <a v-link="{path: '/reports/status'}">
          <i class="fa fa-circle-o"></i>
          Veículos atualiz./desat.
        </a>
      </li>
    </multilevel>
    <multilevel name="Alertas" icon="fa-bell" v-if="$auth.canAny('alerts')">
      <li :class="{'active': $route.path == '/alerts/panic'}" v-if="$auth.can('alerts.panic')">
        <a v-link="{path: '/alerts'}">
          <i class="fa fa-circle-o"></i>
          Pânico
        </a>
      </li>
      <li :class="{'active': $route.path == '/alerts/equipment'}" v-if="$auth.can('alerts.equipment')">
        <a v-link="{path: '/alerts/equipment'}">
          <i class="fa fa-circle-o"></i>
          Equipamento violado
        </a>
      </li>
      <li :class="{'active': $route.path == '/alerts/speed'}" v-if="$auth.can('alerts.speed')">
        <a v-link="{path: '/alerts/speed'}">
          <i class="fa fa-circle-o"></i>
          Excesso de velocidade
        </a>
      </li>
    </multilevel>

    <li class="header">Administração</li>
    <multilevel name="Usuários" icon="fa-user" v-if="$auth.canAny('users')">
      <li :class="{'active': $route.path == '/users'}" v-if="$auth.can('users.list')">
        <a v-link="{path: '/users'}">
          <i class="fa fa-circle-o"></i>
          Listar todos
        </a>
      </li>
      <li :class="{'active': $route.path == '/users/new'}" v-if="$auth.can('users.store')">
        <a v-link="{path: '/users/new'}">
          <i class="fa fa-circle-o"></i>
          Criar novo
        </a>
      </li>
    </multilevel>
    <multilevel name="Veículos" icon="fa-car" v-if="$auth.canAny('vehicles') || $auth.canAny('vehicleGroups')">
      <li :class="{'active': $route.path == '/vehicle_groups'}" v-if="$auth.can('vehicleGroups.list')">
        <a v-link="{path: '/vehicle_groups'}">
          <i class="fa fa-circle-o"></i>
          Listar grupos
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicle_groups/new'}" v-if="$auth.can('vehicleGroups.store')">
        <a v-link="{path: '/vehicle_groups/new'}">
          <i class="fa fa-circle-o"></i>
          Criar grupo
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicles'}" v-if="$auth.can('vehicles.list')">
        <a v-link="{path: '/vehicles'}">
          <i class="fa fa-circle-o"></i>
          Listar veículos
        </a>
      </li>
      <li :class="{'active': $route.path == '/vehicles/new'}" v-if="$auth.can('vehicles.store')">
        <a v-link="{path: '/vehicles/new'}">
          <i class="fa fa-circle-o"></i>
          Criar veículo
        </a>
      </li>
    </multilevel>
    <multilevel name="Equipamentos" icon="fa-plug" v-if="$auth.is('admin')">
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
    <multilevel name="Clientes" icon="fa-users" v-if="$auth.is('admin')">
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

    <multilevel name="Permissões" icon="fa-sitemap" v-if="$auth.is('admin')">
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
