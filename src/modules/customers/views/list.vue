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
      @edit="onEdit">
    </data-table>
  </content-main>
</template>

<script>
  import DataTable from 'modules/dashboard/components/data-table';

  import CustomersService from '../service';

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
    },

    components: {
      DataTable,
    },
  };
</script>
