<template>
  <content-header title="Cliente" subtitle="Criar novo"></content-header>

  <content-main>
    <customer-form :customer="customer" @submit="onSubmit" @back="onBack"></customer-form>
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

    methods: {
      onSubmit() {
        CustomersService.save(this.customer).then((data) => {
          const customer = data.json();

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
      ContentHeader,
      ContentMain,
      CustomerForm,
    },
  };
</script>
