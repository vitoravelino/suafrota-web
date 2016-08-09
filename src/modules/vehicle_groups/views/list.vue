<template>
  <content-header title="Grupo de veículos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/vehicle_groups/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar grupo
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table :collection="vehicle_groups" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import DataTable from '../../common/components/data-table';

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
      onShow(id) {
        this.$router.go({ name: 'vehicleGroupShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'vehicleGroupEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
