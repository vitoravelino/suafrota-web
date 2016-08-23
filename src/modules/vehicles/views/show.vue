<template>
  <content-header title="Veículo" subtitle="Detalhes"></content-header>

  <content-main>
    <vehicle-details :vehicle="vehicle" @remove="onRemove"></vehicle-details>
  </content-main>
</template>

<script>
  import VehicleDetails from '../components/details';

  import VehiclesService from '../service';

  export default {
    data() {
      return {
        vehicle: {
          equipments: [],
        },
      };
    },

    route: {
      activate({ to, next }) {
        VehiclesService.get(to.params.id).then((response) => {
          this.vehicle = response.json().data;
          next();
        });
      },
    },

    methods: {
      onRemove() {
        VehiclesService.delete(this.vehicle.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Veículo removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/vehicles' });
        });
      },
    },

    components: {
      VehicleDetails,
    },
  };
</script>
