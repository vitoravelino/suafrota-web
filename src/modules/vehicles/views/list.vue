<template>
  <content-header title="Veículos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/vehicles/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar veículo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table :collection="vehicles" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import DataTable from '../../common/components/data-table';

  import VehiclesService from '../service';

  export default {
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
      onShow(id) {
        this.$router.go({ name: 'vehicleShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'vehicleEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
