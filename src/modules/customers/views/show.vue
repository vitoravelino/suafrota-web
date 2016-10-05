<template>
  <content-header title="Cliente" subtitle="Detalhes"></content-header>

  <content-main>
    <customer-details :customer="customer" @remove="onRemove"></customer-details>
  </content-main>
</template>

<script>
  import CustomerDetails from '../components/details';
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

    components: {
      CustomerDetails,
    },
  };
</script>
