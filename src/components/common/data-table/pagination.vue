<template>
  <div class="row form-inline">
    <div class="col-sm-6">
        Mostrando {{ start }} a {{ end }} de {{ total }} registros
    </div>
    <div class="col-sm-6 text-right">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['total', 'itensPerPage', 'page'],

    computed: {
      start() {
        return (this.page * this.itensPerPage) - this.itensPerPage + 1;
      },

      end() {
        const end = this.page * this.itensPerPage;

        return end <= this.total ? end : this.total;
      },
    },
  };
</script>
