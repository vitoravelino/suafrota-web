<template>
  <content-header title="Grupo de veículo" subtitle="Editar"></content-header>

  <content-main>
    <vehicle-group-form :vehicle-group="vehicleGroup" edit="true" @submit="onSubmit" @remove="onRemove"></vehicle-group-form>
  </content-main>
</template>

<script>
  import VehicleGroupForm from '../components/form';
  import VehicleGroupsService from '../service';

  import { removeMixin as VehicleGroupRemoveMixin } from '../mixins';

  export default {
    mixins: [VehicleGroupRemoveMixin],

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

          this.setAlert({
            message: 'Gruop de veículos atualizado com sucesso!',
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
