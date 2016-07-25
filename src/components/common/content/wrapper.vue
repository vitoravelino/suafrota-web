<template>
  <div class="content-wrapper">
    <router-view></router-view>
    <!-- /.content -->
  </div>
</template>

<script>
  export default {
    ready() {
      window.addEventListener('resize', this.handleResize);

      this.handleResize();
    },

    methods: {
      handleResize() {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const footerHeight = document.querySelector('.main-footer').offsetHeight;
        const negative = headerHeight + footerHeight;

        this.$el.style['min-height'] = `${window.innerHeight - negative}px`;
      },
    },
  };
</script>
