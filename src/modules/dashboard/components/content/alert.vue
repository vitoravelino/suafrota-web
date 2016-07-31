<template>
  <div class="alert alert-{{ mainAlert.type }} alert-dismissible" v-show="isVisible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click.prevent="hideAlert()">×</button>
    <h4><i class="icon fa fa-check"></i> {{ mainAlert.title }}</h4>
    {{ mainAlert.message }}
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    methods: mapActions(['hideAlert']),

    computed: {
      isVisible() {
        return !!this.mainAlert.message;
      },

      ...mapGetters(['mainAlert']),
    },
  };
</script>
