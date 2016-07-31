<template>
  <li class="treeview" :class="{'active': open}">
    <a href="#" class="pull-right-container" @click.prevent="toggle()">
      <i class="fa fw {{ icon }}"></i>
      <span>{{ name }}</span>
      <span class="pull-right-container pull-right">
        <i class="fa fa-angle-left"></i>
      </span>
    </a>
    <ul class="treeview-menu" :class="{'menu-open': open}">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ['name', 'icon'],

    data() {
      return {
        open: false,
      };
    },

    methods: {
      toggle() {
        this.open = !this.open;
      },
    },

    ready() {
      this.open = this.$el.querySelectorAll('.active').length > 0;
    },
  };
</script>
