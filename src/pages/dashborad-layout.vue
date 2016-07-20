<template>
  <div class="wrapper skin-blue sidebar-mini" :class="{'sidebar-collapse': sidebarCollapse}">
    <main-header></main-header>
    <sidebar></sidebar>
    <content-wrapper></content-wrapper>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import ContentWrapper from '../components/common/content-wrapper';
  import MainFooter from '../components/common/footer';
  import MainHeader from '../components/common/header';
  import Sidebar from '../components/common/sidebar';

  export default {
    components: {
      ContentWrapper,
      MainHeader,
      MainFooter,
      Sidebar,
    },

    computed: mapGetters(['sidebarCollapse']),
  };
</script>
