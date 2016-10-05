<template>
  <content-header title="Cliente" subtitle="Editar"></content-header>

  <content-main>
    <customer-form :customer="customer" edit="true" @submit="onSubmit" @remove="onRemove"></customer-form>
  </content-main>
</template>

<script>
  import CustomerForm from '../components/form';
  import CustomersService from '../service';

  import { removeMixin as CustomerRemoveMixin } from '../mixins';

  export default {
    mixins: [CustomerRemoveMixin],

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
    },

    components: {
      CustomerForm,
    },
  };
</script>
