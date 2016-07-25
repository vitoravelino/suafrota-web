<template>
  <li class="treeview" :class="{'active': open}">
    <a href="#" class="pull-right-container" @click.prevent="toggle()">
      <i class="fa fa-link"></i> <span>{{ name }}</span>
      <div class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </div>
    </a>
    <ul class="treeview-menu" :class="{'menu-open': open}">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ['name'],

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
