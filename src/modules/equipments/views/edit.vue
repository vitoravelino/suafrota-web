<template>
  <content-header title="Equipamento" subtitle="Editar"></content-header>

  <content-main>
    <equipment-form :equipment="equipment" edit="true" @submit="onSubmit" @remove="onRemove"></equipment-form>
  </content-main>
</template>

<script>
  import EquipmentForm from '../components/form';
  import EquipmentsService from '../service';

  import { removeMixin as EquipmentRemoveMixin } from '../mixins';

  export default {
    mixins: [EquipmentRemoveMixin],

    data() {
      return {
        equipment: {},
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

    methods: {
      onSubmit() {
        EquipmentsService.update(this.equipment).then((response) => {
          const equipment = response.json().data;

          this.setAlert({
            message: 'Equipamento atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
        });
      },
    },

    components: {
      EquipmentForm,
    },
  };
</script>
