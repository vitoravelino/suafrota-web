<template>
  <content-header title="Grupo de permissões" subtitle="Detalhes"></content-header>

  <content-main>
    <permission-group-details :permission-group="permissionGroup" @remove="onRemove"></permission-group-details>

    <router-view></router-view>
  </content-main>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import PermissionGroupDetails from '../../components/permission-groups/details';

  import { removeMixin as PermissionGroupRemoveMixin } from '../../mixins';

  export default {
    mixins: [PermissionGroupRemoveMixin],

    route: {
      activate({ to, next }) {
        this.fetchPermissionGroup(to.params.id).then(() => {
          next();
        });
      },
    },

    computed: mapGetters({
      permissionGroup: 'currentPermissionGroup',
    }),

    methods: {
      ...mapActions(['fetchPermissionGroup']),
    },

    components: {
      PermissionGroupDetails,
    },
  };
</script>
