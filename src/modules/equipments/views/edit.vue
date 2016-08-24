<template>
  <content-header title="Equipamento" subtitle="Editar"></content-header>

  <content-main>
    <equipment-form :equipment="equipment" edit="true" @submit="onSubmit" @remove="onRemove"></equipment-form>
  </content-main>
</template>

<script>
  import EquipmentForm from '../components/form';

  import EquipmentsService from '../service';

  export default {
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

          this.$store.dispatch('setAlert', {
            message: 'Equipamento atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
        });
      },

      onRemove() {
        EquipmentsService.remove(this.equipment.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Equipamento removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/equipments' });
        });
      },
    },

    components: {
      EquipmentForm,
    },
  };
</script>
