import PermissionGroupsService from '../services/permission-groups';
import PermissionsService from '../services/permissions';
import { findIndex } from '../../../utils/array';

export default {
  fetchPermissionGroup({ commit }, id) {
    return PermissionGroupsService.get(id).then((response) => {
      const permissionGroup = response.json().data;
      const permissions = permissionGroup.permissions.data;

      delete permissionGroup.permissions;

      commit('SET_CURRENT_PERMISSION_GROUP', permissionGroup);
      commit('SET_CURRENT_PERMISSIONS', permissions);
    });
  },

  savePermission({ commit, state }, permission) {
    const promise = PermissionsService.save(state.currentPermissionGroup, permission);

    promise.then((response) => {
      const newPermission = response.json().data;

      const permissions = [
        ...state.currentPermissions,
        newPermission,
      ];

      commit('SET_CURRENT_PERMISSIONS', permissions);
    });

    return promise;
  },

  updatePermission({ commit, state }, permission) {
    const promise = PermissionsService.update(permission);

    promise.then((response) => {
      const updatedPermission = response.json().data;
      const index = findIndex(state.currentPermissions, (p) => p.id === permission.id);

      const permissions = [
        ...state.currentPermissions.slice(0, index),
        updatedPermission,
        ...state.currentPermissions.slice(index + 1),
      ];

      commit('SET_CURRENT_PERMISSIONS', permissions);
    });

    return promise;
  },

  removePermission({ commit, state }, permission) {
    const permisisonGroupId = permission.permission_group_id;

    const promise = PermissionsService.remove(permisisonGroupId, permission.id);

    promise.then(() => {
      const index = findIndex(state.currentPermissions, (p) => p.id === permission.id);

      const permissions = [
        ...state.currentPermissions.slice(0, index),
        ...state.currentPermissions.slice(index + 1),
      ];

      commit('SET_CURRENT_PERMISSIONS', permissions);
    });

    return promise;
  },
};
