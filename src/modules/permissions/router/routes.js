// paths
import {
  PERMISSION_GROUPS_URL,
  PERMISSION_GROUPS_SHOW_URL,
  PERMISSION_GROUPS_EDIT_URL,
  PERMISSION_GROUPS_NEW_URL,
  PERMISSIONS_URL,
  PERMISSIONS_EDIT_URL,
  PERMISSIONS_NEW_URL,
} from './paths';

// components
import PermissionGroupsList from '../views/permission-groups/list';
import PermissionGroupsEdit from '../views/permission-groups/edit';
import PermissionGroupsNew from '../views/permission-groups/new';
import PermissionGroupsShow from '../views/permission-groups/show';

import PermissionsList from '../views/permissions/list';
import PermissionsNew from '../views/permissions/new';
import PermissionsEdit from '../views/permissions/edit';

export default {
  [PERMISSION_GROUPS_URL]: {
    component: PermissionGroupsList,
    role: 'admin',
  },

  [PERMISSION_GROUPS_SHOW_URL]: {
    name: 'permissionGroupShow',
    component: PermissionGroupsShow,
    role: 'admin',

    subRoutes: {
      [PERMISSIONS_URL]: {
        component: PermissionsList,
      },

      [PERMISSIONS_NEW_URL]: {
        name: 'permissionNew',
        component: PermissionsNew,
      },

      [PERMISSIONS_EDIT_URL]: {
        name: 'permissionEdit',
        component: PermissionsEdit,
      },
    },
  },

  [PERMISSION_GROUPS_EDIT_URL]: {
    name: 'permissionGroupEdit',
    component: PermissionGroupsEdit,
    role: 'admin',
  },

  [PERMISSION_GROUPS_NEW_URL]: {
    component: PermissionGroupsNew,
    role: 'admin',
  },
};
