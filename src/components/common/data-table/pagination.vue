<style lang="sass" scoped>
  .showing
    line-height: 34px

  .page,
  .next,
  .previous
    &,
    &:active:focus
      color: #666
      background-color: #fafafa
      border-color: #ddd

    &:active
      outline: none
      box-shadow: none

    &:hover,
    &:active:focus
      z-index: 2
      color: #23527c
      background-color: #eee
      border-color: #ddd

  .page.active,
    &,
    &:hover,
    &:focus,
    &:active
      z-index: 3
      color: #fff
      cursor: default
      background-color: #337ab7
      border-color: #337ab7
      outline: none

  .next,
  .previous
    &[disabled]
      background-color: #fff
</style>

<template>
  <div class="row form-inline">
    <div class="col-sm-6 showing">
        Mostrando {{ start }} a {{ end }} de {{ total }} registros
    </div>
    <div class="col-sm-6 text-right">
      <div class="btn-group btn-group" role="group">
        <button type="button" class="btn btn-default previous" @click="previousPage()" :disabled="previousDisabled">Anterior</button>
        <button type="button" class="btn btn-default page" v-for="page in displayedPages" :class="{'active': this.currentPage == page}" @click="setCurrentPage(page)">{{ page }}</button>
        <button type="button" class="btn btn-default next" @click="nextPage()" :disabled="nextDisabled">Próximo</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { range } from '../../../utils';

  export default {
    props: ['total', 'itensPerPage', 'currentPage'],

    data() {
      return {
        showMore: 2,
      };
    },

    computed: {
      start() {
        return (this.currentPage * this.itensPerPage) - this.itensPerPage + 1;
      },

      end() {
        const end = this.currentPage * this.itensPerPage;

        return end <= this.total ? end : this.total;
      },

      totalPages() {
        return Math.ceil(this.total / this.itensPerPage);
      },

      displayedPages() {
        let minRange = this.currentPage - this.showMore;
        let maxRange = this.currentPage + this.showMore;

        const distanceLeft = Math.abs(1 - minRange);
        const distanceRight = Math.abs(this.totalPages - maxRange);

        if (minRange <= 0 && maxRange < this.totalPages) {
          maxRange += distanceLeft;
        }

        if (maxRange > this.totalPages && minRange > 1) {
          minRange -= distanceRight;
        }

        const start = minRange < 1 ? 1 : minRange;
        const end = maxRange > this.totalPages ? this.totalPages : maxRange;

        return range(start, end);
      },

      previousDisabled() {
        return this.currentPage === 1;
      },

      nextDisabled() {
        return this.currentPage === this.totalPages;
      },
    },

    methods: {
      setCurrentPage(page) {
        this.$set('currentPage', page);
      },

      nextPage() {
        this.$set('currentPage', this.currentPage + 1);
      },

      previousPage() {
        this.$set('currentPage', this.currentPage - 1);
      },
    },
  };
</script>
