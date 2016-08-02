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
    <data-table :collection="customers" :fields="fields" :can-edit="true" @show="onShow" @edit="onEdit"></data-table>
  </content-main>
</template>

<script>
  import ContentHeader from '../../dashboard/components/content/header';
  import ContentMain from '../../dashboard/components/content/main';
  import DataTable from '../../common/components/data-table';

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
      onShow(id) {
        this.$router.go({ name: 'customerShow', params: { id } });
      },

      onEdit(id) {
        this.$router.go({ name: 'customerEdit', params: { id } });
      },
    },

    components: {
      DataTable,
      ContentHeader,
      ContentMain,
    },
  };
</script>
