<template>
  <content-header title="Veículo" subtitle="Detalhes"></content-header>

  <content-main>
    <vehicle-details :vehicle="vehicle" @remove="onRemove"></vehicle-details>
  </content-main>
</template>

<script>
  import VehicleDetails from '../components/details';
  import VehiclesService from '../service';

  import { removeMixin as VehicleRemoveMixin } from '../mixins';

  export default {
    mixins: [VehicleRemoveMixin],

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

    components: {
      VehicleDetails,
    },
  };
</script>
