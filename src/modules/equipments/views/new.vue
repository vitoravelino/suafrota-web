<template>
  <content-header title="Equipamento" subtitle="Criar novo"></content-header>

  <content-main>
    <equipment-form :equipment="equipment" @submit="onSubmit"></equipment-form>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import EquipmentForm from '../components/form';

  import EquipmentsService from '../service';

  export default {
    data() {
      return {
        equipment: {},
      };
    },

    methods: {
      onSubmit() {
        EquipmentsService.save(this.equipment).then((response) => {
          const equipment = response.json().data;

          this.setAlert({
            message: 'Equipamento criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      EquipmentForm,
    },
  };
</script>
