<style lang="sass" scoped>
  .multiselect
    margin: 10px
    max-width: 259px
</style>

<template>
  <li class="dropdown user user-menu", :class="{open: open}">
    <!-- Menu Toggle Button -->
    <a href="#" class="dropdown-toggle" @click.prevent="toggleDropdown()">
      Atual: <span class="hidden-xs">STH</span>
    </a>

    <ul class="dropdown-menu">
      <li>
        <multiselect
          placeholder="STH (Stealth Organization)"
          key="name"
          label="name"
          :options="customers"
          :selected="null">
        </multiselect>
      </li>
    </ul>
  </li>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  import dom from '../../../../utils/dom';

  export default {
    data() {
      return {
        customers: [],
        open: false,
      };
    },

    methods: {
      toggleDropdown() {
        this.$set('open', !this.open);
      },

      hideDropdown(e) {
        if (!dom.closest(e.target, '.dropdown')) {
          this.$set('open', false);
        }
      },
    },

    ready() {
      window.addEventListener('click', this.hideDropdown.bind(this), false);
    },

    beforeDestroy() {
      window.removeEventListener('click', this.hideDropdown.bind(this), false);
    },

    components: {
      Multiselect,
    },
  };
</script>
