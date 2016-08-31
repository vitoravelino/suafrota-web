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
      :can-remove="$auth.is('admin')"
      @show="onShow"
      @edit="onEdit"
      @remove="onRemove">
    </data-table>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

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

      onRemove(equipment) {
        EquipmentsService.confirmRemoval(equipment).then(() => {
          EquipmentsService.remove(equipment.id).then(() => {
            this.setAlert({
              message: 'Equipamento removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });
          });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      DataTable,
    },
  };
</script>
