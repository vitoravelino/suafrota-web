<style lang="sass" scoped>
  .product-info
    margin-left: 15px !important
    padding-right: 15px

  .fa-location-arrow
    line-height: 20px

  .products-list
    overflow-y: auto
    height: 500px

    > .item
      background: transparent
</style>

<template>
  <ul class="products-list product-list-in-box">
    <li class="item" v-for="vehicle in filteredVehicles">
      <div class="product-info">
        <a v-link="{ name: 'trackingDetails', params: {license_plate: vehicle.vehicle.license_plate } }" class="product-title">{{* vehicle.vehicle.model }} {{* vehicle.vehicle.license_plate }}
        </a>
        <span class="product-description">
          <i class="fa fa-fw fa-signal" :class="{'text-green': vehicle.gprs}"></i>
          <i class="fa fa-fw fa-map-marker" :class="{'text-green': vehicle.gps}"></i>
          <i class="fa fa-fw fa-power-off" :class="{'text-green': vehicle.ignition}"></i>
          <span v-if="vehicle.ignition">{{* vehicle.vel }}km/h</span>
          <a href="#" @click.prevent="locateVehicle(vehicle)">
            <i class="fa fa-fw fa-location-arrow pull-right"></i>
          </a>
          <br/>
          <small>Atualizado em: {{* vehicle.date }}</small>
        </span>
      </div>
    </li>
    <li class="item" v-if="filteredVehicles.length === 0">
      <div class="product-info">
        Nenhum veículo encontrado
      </div>
    </li>
    <!-- /.item -->
  </ul>
</template>

<script>
  import EventBus from 'utils/eventbus';

  export default {
    props: ['vehicles', 'searchText'],

    computed: {
      filteredVehicles() {
        return this.vehicles.filter((v) => {
          const searchToLower = this.searchText.toLowerCase();
          const modelToLower = v.vehicle.model.toLowerCase();
          const licensePlateToLower = v.vehicle.license_plate.toLowerCase();

          const containsModel = modelToLower.indexOf(searchToLower) !== -1;
          const containsLicensePlate = licensePlateToLower.indexOf(searchToLower) !== -1;

          return containsModel || containsLicensePlate;
        });
      },
    },

    methods: {
      locateVehicle(vehicle) {
        EventBus.$emit('positionMap', {
          lat: vehicle.lat,
          lng: vehicle.lng,
        });
      },
    },
  };
</script>
