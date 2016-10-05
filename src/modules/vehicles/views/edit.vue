<template>
  <content-header title="Veículo" subtitle="Editar"></content-header>

  <content-main>
    <vehicle-form :vehicle="vehicle" edit="true" @submit="onSubmit" @remove="onRemove"></vehicle-form>
  </content-main>
</template>

<script>
  import VehicleForm from '../components/form';
  import VehiclesService from '../service';

  import { removeMixin as VehicleRemoveMixin } from '../mixins';

  export default {
    mixins: [VehicleRemoveMixin],

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
    },

    components: {
      VehicleForm,
    },
  };
</script>
