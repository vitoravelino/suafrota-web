<template>
  <div class="wrapper skin-blue sidebar-mini"
    :class="{
      'sidebar-collapse': sidebarCollapse,
      'control-sidebar-open': controlSidebarCollapse
    }">
    <main-header></main-header>
    <sidebar></sidebar>
    <content-wrapper></content-wrapper>
    <main-footer></main-footer>

    <!-- didn't think in a better solution for now -->
    <vehicles-sidebar v-if="$route.path == '/tracking'"></vehicles-sidebar>
    <vehicle-details-sidebar v-if="$route.name == 'trackingDetails'"></vehicle-details-sidebar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import ContentWrapper from '../components/content/wrapper';
  import MainFooter from '../components/footer';
  import MainHeader from '../components/header';
  import Sidebar from '../components/sidebar';

  import VehiclesSidebar from 'modules/tracking/components/vehicles-sidebar';
  import VehicleDetailsSidebar from 'modules/tracking/components/vehicle-details-sidebar';

  export default {
    components: {
      ContentWrapper,
      MainHeader,
      MainFooter,
      Sidebar,
      VehiclesSidebar,
      VehicleDetailsSidebar,
    },

    computed: mapGetters(['sidebarCollapse', 'controlSidebarCollapse']),
  };
</script>
