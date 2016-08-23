<template>
  <router-view></router-view>
</template>

<style lang="sass">
  @import '~admin-lte/dist/css/AdminLTE.css'
  @import '~admin-lte/dist/css/skins/skin-blue.css'
  @import '~admin-lte/plugins/iCheck/square/blue.css'
  @import '~sweetalert2/dist/sweetalert2.css'
  @import '~assets/css/multiselect.sass'
</style>

<script>
  export default {
    route: {
      canActivate() {
        return false;
      },
    },
  };
</script>
