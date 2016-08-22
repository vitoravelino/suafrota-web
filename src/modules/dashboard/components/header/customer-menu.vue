<style lang="sass" scoped>
  .multiselect
    margin: 10px
    max-width: 259px
</style>

<template>
  <li class="dropdown user user-menu hidden-xs", :class="{open: open}">
    <!-- Menu Toggle Button -->
    <a href="#" class="dropdown-toggle" @click.prevent="toggleDropdown()">
      Atual: {{ selectedCustomer.code }}
    </a>

    <ul class="dropdown-menu">
      <li>
        <multiselect
          placeholder="Digite o cliente"
          key="id"
          :allow-empty="false",
          :custom-label="customLabel"
          :options="customers"
          :selected="selectedCustomer"
          @update="switchCustomer">
        </multiselect>
      </li>
    </ul>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex';

  import Multiselect from 'vue-multiselect';

  import SessionsService from '../../../sessions/service';
  import dom from '../../../../utils/dom';

  export default {
    data() {
      return {
        open: false,
        selectedCustomer: null,
      };
    },

    computed: mapGetters({
      user: 'currentUser',
      customers: 'availableCustomers',
    }),

    methods: {
      toggleDropdown() {
        this.$set('open', !this.open);
      },

      hideDropdown(e) {
        if (!dom.closest(e.target, '.dropdown')) {
          this.$set('open', false);
        }
      },

      switchCustomer(customer) {
        SessionsService.switchCustomer(customer.id).then(() => {
          window.location.reload();
        }).catch((a, b, c) => {
          console.log('catch switchCustomer', a, b, c);
        });
      },

      customLabel(customer) {
        return `${customer.code} - ${customer.name}`;
      },
    },

    created() {
      const selectedCustomer = this.customers.find((c) => c.id === this.user.customer_id);

      this.$set('selectedCustomer', selectedCustomer);
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
