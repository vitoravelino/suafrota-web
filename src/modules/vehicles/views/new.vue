<template>
  <content-header title="Veículo" subtitle="Criar novo"></content-header>

  <content-main>
    <vehicle-form :vehicle="vehicle" @submit="onSubmit" @back="onBack"></vehicle-form>
  </content-main>
</template>

<script>
  import HistoryMixin from 'mixins/history';

  import VehicleForm from '../components/form';

  import VehiclesService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        vehicle: {},
      };
    },

    methods: {
      onSubmit() {
        VehiclesService.save(this.vehicle).then((response) => {
          const vehicle = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Veículo criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'vehicleShow', params: { id: vehicle.id } });
        });
      },
    },

    components: {
      VehicleForm,
    },
  };
</script>
