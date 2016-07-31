<template>
  <content-header title="Equipamento" subtitle="Editar"></content-header>

  <content-main>
    <equipment-form :equipment="equipment" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></equipment-form>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import EquipmentForm from '../components/form';

  import HistoryMixin from '../../../mixins/history';

  import EquipmentsService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        equipment: {},
      };
    },

    route: {
      activate({ to, next }) {
        EquipmentsService.get(to.params.id).then((data) => {
          this.equipment = data.json();
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        EquipmentsService.update(this.equipment).then((data) => {
          const equipment = data.json();

          this.$store.dispatch('setAlert', {
            message: 'Equipamento atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
        });
      },

      onRemove() {
        EquipmentsService.remove(this.equipment.id).then(() => {
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
      EquipmentForm,
    },
  };
</script>
