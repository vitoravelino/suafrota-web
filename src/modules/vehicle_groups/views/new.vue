<template>
  <content-header title="Grupo de veículos" subtitle="Criar novo"></content-header>

  <content-main>
    <vehicle-group-form :vehicle-group="vehicleGroup" @submit="onSubmit"></vehicle-group-form>
  </content-main>
</template>

<script>
  import VehicleGroupForm from '../components/form';

  import VehicleGroupsService from '../service';

  export default {
    data() {
      return {
        vehicleGroup: {},
      };
    },

    methods: {
      onSubmit() {
        VehicleGroupsService.save(this.vehicleGroup).then((response) => {
          const vehicleGroup = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Grupo de veículos criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'vehicleGroupShow', params: { id: vehicleGroup.id } });
        });
      },
    },

    components: {
      VehicleGroupForm,
    },
  };
</script>
