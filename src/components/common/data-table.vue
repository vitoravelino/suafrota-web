<style lang="sass" scoped>
  .table
    th
      cursor: pointer
      user-select: none

  .fa-sort
    color: #ddd

    &.fa-sort-amount-desc,
    &.fa-sort-amount-asc,
      color: #888
</style>

<template>
  <div class="box">
    <div class="box-header" v-if="title">
      <h3 class="box-title">{{ title }}</h3>
    </div>
    <!-- /.box-header -->

    <div class="box-body">
      <data-table-filters :limit-by.sync="table.limitBy" :filter-by.sync="table.filterBy" :filter-columns.sync="table.filterColumns" :fields="fields"></data-table-filters>

      <div class="table-responsive">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th v-for="(key, val) in fields" @click="sort(key)">
                <i class="fa fw fa-sort"
                  :class="{
                    'fa-sort-amount-asc': table.orderBy == key && table.order == 0,
                    'fa-sort-amount-desc': table.orderBy == key && table.order == -1
                  }">
                </i>
                &nbsp;
                {{ val }}
              </th>
              <th v-if="canEdit"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in collection | orderBy table.orderBy table.order | filterBy table.filterBy in table.filterColumns | count | limitBy table.limitBy table.limitOffset">
              <td v-for="(key, val) in fields">{{ item[key] }}</td>
              <td v-if="canEdit">
                <a v-link="{ name: 'userEdit', params: { id: item.id } }">Editar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div> <!-- /.table-responsive -->

      <data-table-pagination :total.sync="table.filteredTotal" :current-page.sync="table.currentPage" :itens-per-page.sync="table.limitBy"></data-table-pagination>
    </div>
  </div> <!-- /.box-body -->
</template>

<script>
  import DataTableFilters from './data-table/filters';
  import DataTablePagination from './data-table/pagination';

  export default {
    props: {
      title: String,
      collection: Array,
      fields: Object,
      canEdit: {
        default: false,
      },
    },

    data() {
      return {
        table: {
          orderBy: Object.keys(this.fields)[0],
          order: 0,
          limitBy: 10,
          limitOffset: 0,
          filterBy: '',
          filterColumns: Object.keys(this.fields),
          currentPage: 1,
        },
      };
    },

    filters: {
      count(collection) {
        this.$set('table.filteredTotal', collection.length);

        return collection;
      },
    },

    methods: {
      sort(key) {
        this.$set('table.orderBy', key);
        this.$set('table.order', this.table.order === 0 ? -1 : 0);
        this.$set('table.currentPage', 1);
      },
    },

    components: {
      DataTableFilters,
      DataTablePagination,
    },
  };
</script>
