<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

    <router-view></router-view>

    </section>
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
