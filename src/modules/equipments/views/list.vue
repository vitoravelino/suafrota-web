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
  import { findIndex } from 'utils/array';

  import DataTable from 'modules/dashboard/components/data-table';

  import EquipmentsService from '../service';

  import { removeMixin as EquipmentRemoveMixin } from '../mixins';

  export default {
    mixins: [EquipmentRemoveMixin],

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

      remove(equipment) {
        this.onRemove(equipment).then(() => {
          const index = findIndex(this.equipments, (e) => e.id === equipment.id);
          const equipments = [
            ...this.equipments.slice(0, index),
            ...this.equipments.slice(index + 1),
          ];

          this.$set('equipments', equipments);
        });
      },
    },

    components: {
      DataTable,
    },
  };
</script>
