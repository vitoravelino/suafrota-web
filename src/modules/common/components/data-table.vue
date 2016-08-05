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

  .action
    margin-right: 3px

    &:last-child
      margin-right: 0
</style>

<template>
  <div class="box">
    <div class="box-header" v-if="title">
      <h3 class="box-title">{{ title }}</h3>
    </div>
    <!-- /.box-header -->

    <div class="box-body">
      <data-table-filters :limit.sync="limit" :filter-by.sync="filterBy" :filter-columns.sync="filterColumns" :fields="fields"></data-table-filters>

      <div class="table-responsive">
        <table class="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th v-for="(key, val) in fields" @click="sort(key)">
                <i class="fa fa-fw fa-sort"
                  :class="{
                    'fa-sort-amount-asc': orderBy == key && order == 0,
                    'fa-sort-amount-desc': orderBy == key && order == -1
                  }">
                </i>
                &nbsp;
                {{ val }}
              </th>
              <th width="90"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in collection | orderBy orderBy order | customFilterBy | count | limitBy limit offset">
              <td v-for="(key, val) in fields">{{ itemValue(item, key) }}</td>
              <td>
                <a class="action" title="Visualizar" role="button" @click="$emit('show', item.id)" v-if="canShow"><i class="fa fa-fw fa-file-text-o"></i></a>
                <a class="action" title="Editar" role="button" @click="$emit('edit', item.id)" v-if="canEdit"><i class="fa fa-fw fa-edit"></i></a>
                <a class="action" title="Remover" role="button" @click="$emit('remove', item)" v-if="canRemove"><i class="fa fa-fw fa-trash"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div> <!-- /.table-responsive -->

      <data-table-pagination :total.sync="filteredTotal" :current-page.sync="currentPage" :itens-per-page.sync="limit"></data-table-pagination>
    </div>
  </div> <!-- /.box-body -->
</template>

<script>
  import DataTableFilters from './data-table/filters';
  import DataTablePagination from './data-table/pagination';
  import { deepFind } from '../../../utils/object';

  export default {
    props: {
      title: String,
      collection: Array,
      fields: Object,
      canShow: {
        default: true,
      },
      canEdit: {
        default: false,
      },
      canRemove: {
        default: false,
      },
    },

    data() {
      return {
        orderBy: Object.keys(this.fields)[0],
        order: 0,
        limit: 10,
        filterBy: '',
        filterColumns: Object.keys(this.fields),
        filteredTotal: 0,
        currentPage: 1,
      };
    },

    computed: {
      offset() {
        return (this.currentPage - 1) * this.limit;
      },
    },

    filters: {
      count(collection) {
        this.$set('filteredTotal', collection.length);

        return collection;
      },

      customFilterBy(collection) {
        if (!this.filterBy.length) {
          return collection;
        }

        const output = [];
        const term = this.filterBy.toLowerCase();

        let item;
        let value;

        for (let i = 0; i < collection.length; i++) {
          item = collection[i];

          for (let j = 0; j < this.filterColumns.length; j++) {
            value = deepFind(item, this.filterColumns[j]);

            if (value && value.toLowerCase().indexOf(term) !== -1) {
              output.push(item);
              break;
            }
          }
        }

        return output;
      },
    },

    methods: {
      sort(key) {
        this.$set('orderBy', key);
        this.$set('order', this.order === 0 ? -1 : 0);
        this.$set('currentPage', 1);
      },

      itemValue(item, key) {
        return deepFind(item, key);
      },
    },

    components: {
      DataTableFilters,
      DataTablePagination,
    },
  };
</script>
