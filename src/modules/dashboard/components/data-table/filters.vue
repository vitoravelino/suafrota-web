<style lang="sass" scoped>
  .filters
    label
      font-weight: normal
      margin-bottom: 10px
</style>

<template>
  <div class="row form-inline">
    <div class="col-sm-6 filters">
      <label>
        Mostrar
        <select class="form-control" v-model="limit">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        registros
      </label>
    </div>
    <div class="col-sm-6 filters text-right">
      <div class="input-group">
        <span class="input-group-addon"><i class="fa fa-search"></i></span>
        <input type="search" class="form-control" v-model="filterBy">
      </div>
      &nbsp;em&nbsp;
      <label>
        <multiselect
          placeholder="coluna1, coluna2, etc"
          key="name"
          label="name"
          :options="options"
          :selected="selected"
          :multiple="true"
          @update="updateFilterColumns">
        </multiselect>
      </label>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    props: ['limit', 'filterBy', 'filterColumns', 'fields'],

    data() {
      return {
        options: [],
        selected: null,
      };
    },

    methods: {
      updateFilterColumns(columns) {
        if (columns.length) {
          this.$set('filterColumns', columns.map((c) => c.value));
        } else {
          this.$set('filterColumns', Object.keys(this.fields));
        }
      },
    },

    ready() {
      const options = Object.keys(this.fields).map((key) => ({
        name: this.fields[key],
        value: key,
      }));

      this.$set('options', options);
    },

    components: {
      Multiselect,
    },
  };
</script>
