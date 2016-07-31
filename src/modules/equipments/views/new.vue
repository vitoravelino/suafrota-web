<template>
  <content-header title="Equipamento" subtitle="Criar novo"></content-header>

  <content-main>
    <equipment-form :equipment="equipment" @submit="onSubmit" @back="onBack"></equipment-form>
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

    methods: {
      onSubmit() {
        EquipmentsService.save(this.equipment).then((data) => {
          const equipment = data.json();

          this.$store.dispatch('setAlert', {
            message: 'Equipamento criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'equipmentShow', params: { id: equipment.id } });
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
