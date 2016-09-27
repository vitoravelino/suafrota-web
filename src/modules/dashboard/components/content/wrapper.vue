<style lang="sass">
  .alert-wrapper
      padding-top: 15px
      padding-left: 15px
      padding-right: 15px
</style>

<template>
  <div class="content-wrapper">
    <router-view></router-view>
    <!-- /.content -->
  </div>
</template>

<script>
  export default {
    methods: {
      handleResize() {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const footerHeight = document.querySelector('.main-footer').offsetHeight;
        const negative = headerHeight + footerHeight;

        this.$el.style['min-height'] = `${window.innerHeight - negative}px`;
      },
    },

    ready() {
      window.addEventListener('resize', this.handleResize);

      this.handleResize();
    },

    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>
