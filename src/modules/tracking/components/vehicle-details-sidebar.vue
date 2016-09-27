<style lang="sass" scoped>
  .top-bar
    border-bottom: 1px solid #d2d6de
    line-height: 40px
    margin-bottom: 20px
    text-align: center
    position: relative

  .vehicle-name
    color: #3c8dbc

  .back-arrow
    position: absolute
    left: 15px
    line-height: 40px


  .dl-horizontal
    margin-top: 15px
    margin-bottom: 15px

    dt
      margin-bottom: 7px
      width: 109px

    dd
      margin-left: 120px

  .car
    text-align: center
    font-size: 44px

    i
      padding: 20px 20px 25px
      border-radius: 50%
      background-color: #eee

  .value-1
    color: green

  .value-0
    color: red

</style>

<template>
  <aside class="control-sidebar control-sidebar-light"
        :class="{'control-sidebar-open': controlSidebarCollapse}">
    <div class="tab-pane" id="control-sidebar-settings-tab">
      <div class="top-bar">
        <a v-link="{ path: '/tracking' }" class="back-arrow">
          <i class="fa fa-arrow-left"></i>
        </a>

        <span class="vehicle-name"><strong>{{ vehicleName }}</strong></span>
      </div>

      <div class="car">
        <i class="fa fa-car"></i>
      </div>

      <dl class="dl-horizontal">
        <dt>Serial</dt>
        <dd>{{ currentTrackedVehicle.serial }}</dd>
        <dt>GPRS</dt>
        <dd class="value-{{ currentTrackedVehicle.gprs }}">{{ currentTrackedVehicle.gprs | translateMale }}</dd>
        <dt>GPS</dt>
        <dd class="value-{{ currentTrackedVehicle.gps }}">{{ currentTrackedVehicle.gps | translateMale }}</dd>
        <dt>Ignição</dt>
        <dd class="value-{{ currentTrackedVehicle.ignition }}">{{ currentTrackedVehicle.ignition | translateFemale }}</dd>
        <dt v-if="currentTrackedVehicle.ignition">Velocidade</dt>
        <dd v-if="currentTrackedVehicle.ignition">{{ currentTrackedVehicle.vel }}km/h</dd>
        <dt>Alimentação</dt>
        <dd>14</dd>
        <dt>Pânico</dt>
        <dd class="value-{{ currentTrackedVehicle.panic }}">{{ currentTrackedVehicle.panic | translateMale }}</dd>
      </dl>

      <footer class="text-center">
        <small>Atualizado em {{ currentTrackedVehicle.date }}</small>
      </footer>
    </div>
  </aside>

  <div class="control-sidebar-bg" style="position: fixed; height: auto;"></div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      vehicleName() {
        const vehicle = this.currentTrackedVehicle.vehicle;

        return vehicle ? `${vehicle.model} ${vehicle.license_plate}` : '';
      },

      ...mapGetters(['controlSidebarCollapse', 'currentTrackedVehicle']),
    },

    filters: {
      translateFemale(value) {
        return value ? 'LIGADA' : 'DESLIGADA';
      },

      translateMale(value) {
        return value ? 'LIGADO' : 'DESLIGADO';
      },
    },
  };
</script>
