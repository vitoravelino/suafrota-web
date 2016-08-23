<template>
  <content-header title="Cliente" subtitle="Criar novo"></content-header>

  <content-main>
    <customer-form :customer="customer" @submit="onSubmit" @back="onBack"></customer-form>
  </content-main>
</template>

<script>
  import HistoryMixin from 'mixins/history';

  import CustomerForm from '../components/form';

  import CustomersService from '../service';

  export default {
    mixins: [HistoryMixin],

    data() {
      return {
        customer: {},
      };
    },

    methods: {
      onSubmit() {
        CustomersService.save(this.customer).then((response) => {
          const customer = response.json().data;

          this.$store.dispatch('setAlert', {
            message: 'Cliente criado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });

          this.$router.go({ name: 'customerShow', params: { id: customer.id } });
        });
      },
    },

    components: {
      CustomerForm,
    },
  };
</script>
