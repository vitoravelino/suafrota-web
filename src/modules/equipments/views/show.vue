<template>
  <content-header title="Equipamento" subtitle="Detalhes"></content-header>

  <content-main>
    <equipment-details :equipment="equipment" @remove="onRemove"></equipment-details>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import EquipmentDetails from '../components/details';

  import EquipmentsService from '../service';

  export default {
    data() {
      return {
        equipment: {
          vehicle: {},
        },
      };
    },

    route: {
      activate({ to, next }) {
        EquipmentsService.get(to.params.id).then((response) => {
          this.equipment = response.json().data;
          next();
        });
      },
    },

    methods: {
      onRemove() {
        EquipmentsService.delete(this.equipment.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Equipamento removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/equipments' });
        });
      },
    },

    components: {
      ContentHeader,
      ContentMain,
      EquipmentDetails,
    },
  };
</script>
