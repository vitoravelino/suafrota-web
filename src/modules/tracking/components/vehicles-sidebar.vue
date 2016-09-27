<style lang="sass" scoped>
  form
    padding: 10px 15px 15px

  .form-group
    margin-bottom: 0
</style>

<template>
  <aside class="control-sidebar control-sidebar-light"
        :class="{'control-sidebar-open': controlSidebarCollapse}">
    <div class="tab-pane" id="control-sidebar-settings-tab">
      <form role="form" v-el:form>
        <div class="form-group">
          <label for="">Filtrar veículos</label>
          <input type="text" class="form-control" placeholder="GOL, HMX-2343" v-model="searchText" />
        </div>
      </form>
      <vehicles-list :vehicles="trackedVehicles" :search-text="searchText" v-el:vehicles-list></vehicles-list>
    </div>
  </aside>

  <div class="control-sidebar-bg" style="position: fixed; height: auto;"></div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import VehiclesList from './vehicles-list';

  export default {
    data() {
      return {
        searchText: '',
      };
    },

    methods: {
      handleResize() {
        const sidebarHeight = document.querySelector('.control-sidebar-bg').offsetHeight;
        const mainHeaderHeight = document.querySelector('.main-header').offsetHeight;
        const formHeight = this.$els.form.offsetHeight;
        const negative = mainHeaderHeight + formHeight;

        this.$els.vehiclesList.style['min-height'] = `${sidebarHeight - negative}px`;
      },
    },

    computed: mapGetters(['controlSidebarCollapse', 'trackedVehicles']),

    ready() {
      window.addEventListener('resize', this.handleResize);

      this.handleResize();
    },

    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },

    components: {
      VehiclesList,
    },
  };
</script>
