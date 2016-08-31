<template>
  <content-header title="Cliente" subtitle="Editar"></content-header>

  <content-main>
    <customer-form :customer="customer" edit="true" @submit="onSubmit" @remove="onRemove"></customer-form>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import CustomerForm from '../components/form';

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
      onSubmit() {
        CustomersService.update(this.customer).then((response) => {
          const customer = response.json().data;

          this.setAlert({
            message: 'Cliente atualizado com sucesso!',
            type: 'success',
            from: this.$route.path,
          });
          this.$router.go({ name: 'customerShow', params: { id: customer.id } });
        });
      },

      onRemove() {
        CustomersService.confirmRemoval(this.customer).then(() => {
          CustomersService.remove(this.customer.id).then(() => {
            this.setAlert({
              message: 'Cliente removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });

            this.$router.go({ path: '/customers' });
          });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      CustomerForm,
    },
  };
</script>
