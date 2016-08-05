export default {
  SET_CURRENT_PERMISSION_GROUP(state, permissionGroup) {
    state.currentPermissionGroup = permissionGroup;
  },

  SET_CURRENT_PERMISSIONS(state, permissions) {
    state.currentPermissions = permissions;
  },
};
