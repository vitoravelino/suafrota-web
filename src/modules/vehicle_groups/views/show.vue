<template>
  <content-header title="Grupo de veículos" subtitle="Detalhes"></content-header>

  <content-main>
    <vehicle-group-details :vehicle-group="vehicleGroup" @remove="onRemove"></vehicle-group-details>
  </content-main>
</template>

<script>
  import VehicleGroupDetails from '../components/details';
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

    components: {
      VehicleGroupDetails,
    },
  };
</script>
