<template>
  <content-header title="Grupo de veículos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{ path: '/vehicle_groups/new' }" v-if="$auth.can('vehicleGroups.store')">
        <span class="fa fa-plus"></span>
        &nbsp; Criar grupo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="vehicleGroups"
      :fields="fields"
      :can-edit="$auth.can('vehicleGroups.update')"
      :can-show="$auth.can('vehicleGroups.show')"
      :can-remove="$auth.can('vehicleGroups.destroy')"
      @show="onShow"
      @edit="onEdit"
      @remove="remove">
    </data-table>
  </content-main>
</template>

<script>
  import { findIndex } from 'utils/array';

  import DataTable from 'modules/dashboard/components/data-table';

  import VehicleGroupsService from '../service';

  import { removeMixin as VehicleGroupRemoveMixin } from '../mixins';

  export default {
    mixins: [VehicleGroupRemoveMixin],

    data() {
      return {
        vehicleGroups: [],
        fields: {
          id: 'ID',
          name: 'Nome',
          users: 'Qtd. usuários',
          vehicles: 'Qtd. veículos',
        },
      };
    },

    route: {
      activate({ next }) {
        VehicleGroupsService.all().then((response) => {
          this.vehicleGroups = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(vehicleGroup) {
        this.$router.go({ name: 'vehicleGroupShow', params: { id: vehicleGroup.id } });
      },

      onEdit(vehicleGroup) {
        this.$router.go({ name: 'vehicleGroupEdit', params: { id: vehicleGroup.id } });
      },

      remove(vehicleGroup) {
        this.onRemove(vehicleGroup).then(() => {
          const index = findIndex(this.vehicleGroups, (v) => v.id === vehicleGroup.id);
          const vehicleGroups = [
            ...this.vehicleGroups.slice(0, index),
            ...this.vehicleGroups.slice(index + 1),
          ];

          this.$set('vehicleGroups', vehicleGroups);
        });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
