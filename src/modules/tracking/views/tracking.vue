<template>
  <content-header title="Rastreamento" subtitle="Veículos">
    <div slot="button-bar">
      <a class="btn btn-primary" @click.prevent="toggleControlSidebar" v-if="controlSidebarCollapse">
        <span class="fa fa-list-ul"></span>
        &nbsp; Esconder lista
      </a>
      <a class="btn btn-primary" @click.prevent="toggleControlSidebar" v-else>
        <span class="fa fa-list-ul"></span>
        &nbsp; Mostrar lista
      </a>
    </div>
  </content-header>

  <content-main>
    <tracking-map></tracking-map>
  </content-main>

  <!-- it renders an empty div, used to have ready() and destroy() -->
  <router-view></router-view>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import TrackingMap from '../components/tracking-map';

  import TrackingService from '../service';

  export default {
    route: {
      activate({ next }) {
        TrackingService.latest().then((response) => {
          const vehicles = response.json();
          this.setTrackedVehicles(vehicles);
          next();
        });
      },
    },

    methods: {
      handleResize() {
        const $mapBox = document.querySelector('.map-box');
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const footerHeight = document.querySelector('.main-footer').offsetHeight;
        const contentHeight = window.innerHeight - (headerHeight + footerHeight);
        const contentPadding = 100;

        $mapBox.style['min-height'] = `${contentHeight - contentPadding}px`;
      },

      ...mapActions(['toggleControlSidebar', 'setControlSidebar', 'setTrackedVehicles']),
    },

    computed: mapGetters(['controlSidebarCollapse']),

    ready() {
      TrackingService.start();

      this.handleResize();
      this.setControlSidebar(true);

      window.addEventListener('resize', this.handleResize);
    },

    destroyed() {
      TrackingService.stop();

      this.setControlSidebar(false);

      window.removeEventListener('resize', this.handleResize);
    },

    components: {
      TrackingMap,
    },
  };
</script>
