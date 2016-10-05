<template>
  <div>
    <box>
      <box-header class="with-border">
        <h4 class="box-title">Veículos</h4>
      </box-header>
      <box-body>
        <multiselect
          :options="vehicles"
          :selected="vehicleGroup.vehicles"
          :loading="isVehicleSearchLoading"
          :multiple="true"
          :custom-label="vehicleLabel"
          :limit="1"
          :clear-on-select="false"
          :close-on-select="false"
          @search-change="onSearchVehicle"
          @update="onVehicleUpdate"
          id="ajax"
          key="id"
          placeholder="Digite a placa do carro">
        </multiselect>

        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Placa</th>
              <th width="50"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vehicle in vehicleGroup.vehicles" track-by="$index">
              <td>{{ vehicle.model }}</td>
              <td>{{ vehicle.license_plate }}</td>
              <td>
                <i class="fa fa-fw fa-trash" @click="onRemoveVehicle($index)"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </box-body>
    </box>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  import VehiclesService from 'modules/vehicles/service';

  export default {
    props: ['vehicleGroup'],

    data() {
      return {
        isVehicleSearchLoading: false,
        vehicles: [],
      };
    },

    methods: {
      onRemoveVehicle(index) {
        // change to immutable
        this.vehicleGroup.vehicles.splice(index, 1);
      },

      onSearchVehicle(query) {
        this.isVehicleSearchLoading = true;

        VehiclesService.search({ license_plate: query }).then((response) => {
          const vehicles = response.json().data;

          this.vehicles = vehicles;
          this.isVehicleSearchLoading = false;
        });
      },

      onVehicleUpdate(vehicles) {
        this.vehicleGroup.vehicles = vehicles;
      },

      vehicleLabel(vehicle) {
        return `${vehicle.license_plate} (${vehicle.model})`;
      },
    },

    components: {
      Multiselect,
    },
  };
</script>
