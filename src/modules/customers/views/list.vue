<template>
  <content-header title="Clientes" subtitle="Listar todos">
    <div slot="button-bar">
      <a class="btn btn-primary" v-link="{path: '/customers/new'}">
        <span class="fa fa-plus"></span>
        &nbsp; Criar equipamento
      </a>
    </div>
  </content-header>

  <content-main>
    <data-table
      :collection="customers"
      :fields="fields"
      :can-edit="$auth.is('admin')"
      :can-show="$auth.is('admin')"
      :can-remove="$auth.is('admin')"
      @show="onShow"
      @edit="onEdit"
      @remove="onRemove">
    </data-table>
  </content-main>
</template>

<script>
  import { mapActions } from 'vuex';

  import DataTable from 'modules/dashboard/components/data-table';

  import CustomersService from '../service';

  import { findIndex } from 'utils/array';

  export default {
    data() {
      return {
        customers: [],
        fields: {
          id: 'ID',
          name: 'Razão Social',
        },
      };
    },

    route: {
      activate({ next }) {
        CustomersService.all().then((response) => {
          this.customers = response.json().data;
          next();
        });
      },
    },

    methods: {
      onShow(customer) {
        this.$router.go({ name: 'customerShow', params: { id: customer.id } });
      },

      onEdit(customer) {
        this.$router.go({ name: 'customerEdit', params: { id: customer.id } });
      },

      onRemove(customer) {
        CustomersService.confirmRemoval(customer).then(() => {
          CustomersService.remove(customer.id).then(() => {
            const index = findIndex(this.customers, (c) => c.id === customer.id);
            const customers = [
              ...this.customers.slice(0, index),
              ...this.customers.slice(index + 1),
            ];

            this.$set('customers', customers);
            this.setAlert({
              message: 'Cliente removido com sucesso!',
              type: 'success',
              from: this.$route.path,
            });
          });
        });
      },

      ...mapActions(['setAlert']),
    },

    components: {
      DataTable,
    },
  };
</script>
