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
    <data-table :collection="equipments" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import DataTable from '../../common/components/data-table';

  import EquipmentsService from '../service';

  export default {
    data() {
      return {
        equipments: [],
        fields: {
          id: 'ID',
          model: 'Modelo',
          serial: 'Serial',
          vehicle_id: 'Veículo',
          installed_at: 'Instalação em',
        },
      };
    },

    route: {
      activate({ next }) {
        EquipmentsService.all().then((data) => {
          this.equipments = data.json();
          next();
        });
      },
    },

    methods: {
      onShow(id) {
        this.$router.go({ name: 'equipmentShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'equipmentEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
