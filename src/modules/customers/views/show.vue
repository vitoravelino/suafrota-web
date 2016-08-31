<template>
  <content-header title="Cliente" subtitle="Detalhes"></content-header>

  <content-main>
    <customer-details :customer="customer" @remove="onRemove"></customer-details>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import CustomerDetails from '../components/details';

  import CustomersService from '../service';

  export default {
    data() {
      return {
        customer: {},
      };
    },

    route: {
      activate({ to, next }) {
        CustomersService.get(to.params.id).then((response) => {
          this.customer = response.json().data;
          next();
        });
      },
    },

    methods: {
      onRemove() {
        CustomersService.confirmRemoval(this.customer).then(() => {
          CustomersService.delete(this.customer.id).then(() => {
            this.setAlert({
              message: 'Equipamento removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/equipments' });
          });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      CustomerDetails,
    },
  };
</script>
