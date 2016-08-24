<template>
  <content-header title="Equipamentos" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/equipments/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar equipamento
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="equipments"
      :fields="fields"
      :can-edit="$auth.is('admin')"
      :can-show="$auth.is('admin')"
      :can-destroy="$auth.is('admin')"
      @show="onShow"
      @edit="onEdit">
    </data-table>
  </content-main>
</template>

<script>
  import DataTable from 'modules/dashboard/components/data-table';

  import EquipmentsService from '../service';

  export default {
    data() {
      return {
        equipments: [],
        fields: {
          id: 'ID',
          model: 'Modelo',
          serial: 'Serial',
          'vehicle.name': 'Veículo',
          installed_at: 'Instalação em',
        },
      };
    },

    route: {
      activate({ next }) {
        EquipmentsService.all().then((response) => {
          this.equipments = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(equipment) {
        this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
      },

      onEdit(equipment) {
        this.$router.go({ name: 'equipmentEdit', params: { id: equipment.id } });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
