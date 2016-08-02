<template>
  <content-header title="Veículo" subtitle="Editar"></content-header>

  <content-main>
    <vehicle-form :vehicle="vehicle" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></vehicle-form>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import VehicleForm from '../components/form';

  import HistoryMixin from '../../../mixins/history';

  import VehiclesService from '../service';

  export default {
    mixins: [HistoryMixin],

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

          this.$store.dispatch('setAlert', {
            message: 'Veículo atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'vehicleShow', params: { id: vehicle.id } });
        });
      },

      onRemove() {
        VehiclesService.remove(this.vehicle.id).then(() => {
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
      ContentHeader,
      ContentMain,
      VehicleForm,
    },
  };
</script>
