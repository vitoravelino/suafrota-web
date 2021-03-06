<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <form-header entity="equipamento" :edit="edit" @remove="$emit('remove')"></form-header>

        <box-body>
          <div class="form-group" :class="{'has-error': isModelInvalid}">
            <label for="model">Modelo</label>
            <input type="text" name="model" id="model" class="form-control" placeholder="Digite o nome" v-model="equipment.model" v-validate:model="['required']">
            <span class="help-block" v-show="isModelInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isSerialInvalid}">
            <label for="serial">Serial</label>
            <input type="text" name="serial" id="serial" class="form-control" placeholder="Digite o serial" v-model="equipment.serial" v-validate:serial="['required']">
            <span class="help-block" v-show="isSerialInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group">
            <label>Veículo</label>
            <multiselect
              :options="vehicles"
              :selected="equipment.vehicle"
              :loading="isVehicleSearchLoading"
              :custom-label="vehicleLabel"
              @search-change="onSearchVehicle"
              @update="onVehicleUpdate"
              id="ajax"
              key="id"
              placeholder="Digite a placa do carro">
            </multiselect>
          </div>
          <div class="form-group">
            <label for="installed_at">Instalado em</label>
            <input type="text" name="installed_at" id="installed_at" class="form-control" placeholder="Digite a data" v-model="equipment.installed_at">
          </div>
        </box-body>
      </form>
    </validator>
  </box>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  import VehiclesService from '../../vehicles/service';

  export default {
    props: ['equipment', 'edit'],

    data() {
      return {
        isSubmitted: false,
        isVehicleSearchLoading: false,
        vehicles: [],
      };
    },

    computed: {
      isSerialInvalid() {
        return this.$validation.serial.required &&
              (this.$validation.serial.dirty ||
               this.isSubmitted);
      },

      isModelInvalid() {
        return this.$validation.model.required &&
              (this.$validation.model.dirty ||
               this.isSubmitted);
      },
    },

    methods: {
      onSubmit(e) {
        e.stopPropagation();
        this.isSubmitted = true;

        if (this.$validation.valid) {
          this.$emit('submit');
        }
      },

      onSearchVehicle(query) {
        this.isVehicleSearchLoading = true;

        VehiclesService.search({ license_plate: query }).then((response) => {
          const vehicles = response.json().data;

          this.vehicles = vehicles;
          this.isVehicleSearchLoading = false;
        });
      },

      onVehicleUpdate(vehicle) {
        if (vehicle) {
          this.$set('equipment.vehicle_id', vehicle.id);
        } else {
          this.$set('equipment.vehicle_id', null);
        }
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
