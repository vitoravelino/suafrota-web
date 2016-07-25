<style lang="sass">
  [slot="button-bar"]
    float: right
</style>

<style lang="sass" scoped>
  h1
    line-height: 34px
</style>

<template>
  <!-- Content Header (Page header) -->
  <section class="content-header clearfix">
    <h1 class="pull-left">
      {{ title }}
      <small v-if="subtitle">{{ subtitle }}</small>
    </h1>

    <slot name="button-bar-left"></slot>
    <slot name="button-bar"></slot>
  </section>
</template>

<script>
  export default {
    props: ['title', 'subtitle'],
  };
</script>
