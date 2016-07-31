<template>
  <content-header title="Cliente" subtitle="Editar"></content-header>

  <content-main>
    <customer-form :customer="customer" edit="true" @submit="onSubmit" @back="onBack" @remove="onRemove"></customer-form>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import CustomerForm from '../components/form';

  import HistoryMixin from '../../../mixins/history';

  import CustomersService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        customer: {},
      };
    },

    route: {
      activate({ to, next }) {
        CustomersService.get(to.params.id).then((data) => {
          this.customer = data.json();
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        CustomersService.update(this.customer).then((data) => {
          const customer = data.json();

          this.$store.dispatch('setAlert', {
            message: 'Cliente atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'customerShow', params: { id: customer.id } });
        });
      },

      onRemove() {
        CustomersService.remove(this.customer.id).then(() => {
          this.$store.dispatch('setAlert', {
            message: 'Cliente removido com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ path: '/customers' });
        });
      },
    },

    components: {
      ContentHeader,
      ContentMain,
      CustomerForm,
    },
  };
</script>
