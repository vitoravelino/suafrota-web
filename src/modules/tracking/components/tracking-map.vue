<style lang="sass" scoped>
  .map-box
    position: relative

  .map
    height: 100%

  .map-wrapper
    position: absolute
    top: 41px
    bottom: 0
    right: 0
    left: 0
</style>

<template>
  <box class="map-box">
    <box-header class="with-border">
      <h4 class="box-title">Listando {{ trackedVehicles.length }} veículos</h4>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" title="Visualizar tudo" @click.prevent="fitBounds()">
          <i class="fa fa-eye"></i>
        </button>
      </div>
    </box-header>
    <box-body>
      <div class="map-wrapper">
        <div class="map" v-el:map></div>
      </div>
    </box-body>
  </box>
</template>

<script>
  import { mapGetters } from 'vuex';

  import EventBus from 'utils/eventbus';
  import Gmaps from 'utils/gmaps';


  export default {
    data() {
      return {
        markers: [],
      };
    },

    methods: {
      storeListener(mutation) {
        if (mutation.type === 'SET_TRACKED_VEHICLES') {
          this.updateMarkers(mutation.payload);
        }

        if (mutation.type === 'TOGGLE_CONTROL_SIDEBAR') {
          this.handleResize();
        }
      },

      updateMarkers(vehicles) {
        this.map.clearMarkers();
        this.map.addMarkers(vehicles);
      },

      fitBounds() {
        this.map.fitBounds();
      },

      positionMap(position, zoom = 15) {
        this.map.goTo(position, zoom);
      },

      initMap() {
        this.map = Gmaps.wrap(this.$els.map);
        this.map.addMarkers(this.trackedVehicles);

        EventBus.$on('positionMap', this.positionMap);
        window.addEventListener('resize', this.handleResize);
      },

      handleResize() {
        // due to sidebar animation =/
        setTimeout(() => this.map.resize(), 500);
      },
    },

    computed: mapGetters(['trackedVehicles']),

    ready() {
      this.unsubscribe = this.$store.subscribe(this.storeListener);
      this.initMap();
    },

    destroyed() {
      this.unsubscribe();
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>
