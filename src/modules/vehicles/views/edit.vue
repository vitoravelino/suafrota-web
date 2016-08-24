<template>
  <content-header title="Veículo" subtitle="Editar"></content-header>

  <content-main>
    <vehicle-form :vehicle="vehicle" edit="true" @submit="onSubmit" @remove="onRemove"></vehicle-form>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import VehicleForm from '../components/form';

  import VehiclesService from '../service';

  export default {
    data() {
      return {
        vehicle: {},
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
      onSubmit() {
        VehiclesService.update(this.vehicle).then((response) => {
          const vehicle = response.json().data;

          this.setAlert({
            message: 'Veículo atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'vehicleShow', params: { id: vehicle.id } });
        });
      },

      onRemove() {
        VehiclesService.remove(this.vehicle.id).then(() => {
          this.setAlert({
            message: 'Veículo removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/vehicles' });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      VehicleForm,
    },
  };
</script>
