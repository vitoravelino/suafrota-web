<template>
  <content-header title="Grupo de veículo" subtitle="Editar"></content-header>

  <content-main>
    <vehicle-group-form :vehicle-group="vehicleGroup" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></vehicle-group-form>
  </content-main>
</template>

<script>
  import HistoryMixin from 'mixins/history';

  import VehicleGroupForm from '../components/form';

  import VehicleGroupsService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        vehicleGroup: {},
      };
    },

    route: {
      activate({ to, next }) {
        VehicleGroupsService.get(to.params.id).then((response) => {
          this.vehicleGroup = response.json().data;
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        VehicleGroupsService.update(this.vehicleGroup).then((response) => {
          const vehicleGroup = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Gruop de veículos atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'vehicleGroupShow', params: { id: vehicleGroup.id } });
        });
      },

      onRemove() {
        VehicleGroupsService.remove(this.vehicleGroup.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Grupo de veículos removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/vehicle_groups' });
        });
      },
    },

    components: {
      VehicleGroupForm,
    },
  };
</script>
