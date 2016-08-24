<template>
  <content-header title="Grupo de veículos" subtitle="Detalhes"></content-header>

  <content-main>
    <vehicle-group-details :vehicle-group="vehicleGroup" @remove="onRemove"></vehicle-group-details>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import VehicleGroupDetails from '../components/details';

  import VehicleGroupsService from '../service';

  export default {
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
      onRemove() {
        VehicleGroupsService.delete(this.vehicleGroup.id).then(() => {
          this.setAlert({
            message: 'Grupo de veículos removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/vehicle_groups' });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      VehicleGroupDetails,
    },
  };
</script>
