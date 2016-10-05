<template>
  <content-header title="Equipamento" subtitle="Detalhes"></content-header>

  <content-main>
    <equipment-details :equipment="equipment" @remove="onRemove"></equipment-details>
  </content-main>
</template>

<script>
  import EquipmentDetails from '../components/details';
  import EquipmentsService from '../service';

  import { removeMixin as EquipmentRemoveMixin } from '../mixins';

  export default {
    mixins: [EquipmentRemoveMixin],

    data() {
      return {
        equipment: {
          vehicle: {},
        },
      };
    },

    route: {
      activate({ to, next }) {
        EquipmentsService.get(to.params.id).then((response) => {
          this.equipment = response.json().data;
          next();
        });
      },
    },

    components: {
      EquipmentDetails,
    },
  };
</script>
