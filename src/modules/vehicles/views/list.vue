<template>
  <content-header title="Veículos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/vehicles/new'}" v-if="$auth.can('vehicles.store')">
        <span class="fa fa-plus"></span>
        &nbsp; Criar veículo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="vehicles"
      :fields="fields"
      :can-edit="$auth.can('vehicles.update')"
      :can-show="$auth.can('vehicles.show')"
      :can-remove="$auth.can('vehicles.destroy')"
      @show="onShow"
      @edit="onEdit"
      @remove="onRemove">
    </data-table>
  </content-main>
</template>

<script>
  import { findIndex } from 'utils/array';

  import DataTable from 'modules/dashboard/components/data-table';

  import VehiclesService from '../service';

  import { removeMixin as VehicleRemoveMixin } from '../mixins';

  export default {
    mixins: [VehicleRemoveMixin],

    data() {
      return {
        vehicles: [],
        fields: {
          id: 'ID',
          model: 'Modelo',
          license_plate: 'Placa',
          type: 'Tipo',
          equipments: 'Equipamento',
        },
      };
    },

    route: {
      activate({ next }) {
        VehiclesService.all().then((response) => {
          this.vehicles = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(vehicle) {
        this.$router.go({ name: 'vehicleShow', params: { id: vehicle.id } });
      },

      onEdit(vehicle) {
        this.$router.go({ name: 'vehicleEdit', params: { id: vehicle.id } });
      },

      remove(vehicle) {
        this.onRemove(vehicle).then(() => {
          const index = findIndex(this.vehicles, (v) => v.id === vehicle.id);
          const vehicles = [
            ...this.vehicles.slice(0, index),
            ...this.vehicles.slice(index + 1),
          ];

          this.$set('vehicles', vehicles);
        });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
