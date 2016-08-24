<template>
  <content-header title="Grupo de veículos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/vehicle_groups/new'}" v-if="$auth.can('vehicleGroups.store')">
        <span class="fa fa-plus"></span>
        &nbsp; Criar grupo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="vehicle_groups"
      :fields="fields"
      :can-edit="$auth.can('vehicleGroups.update')"
      :can-show="$auth.can('vehicleGroups.show')"
      :can-destroy="$auth.can('vehicleGroups.destroy')"
      @show="onShow"
      @edit="onEdit">
    </data-table>
  </content-main>
</template>

<script>
  import DataTable from 'modules/dashboard/components/data-table';

  import VehicleGroupsService from '../service';

  export default {
    data() {
      return {
        vehicle_groups: [],
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
          this.vehicle_groups = response.json().data;
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
    },

    components: {
      DataTable,
    },
  };
</script>
