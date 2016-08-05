import PermissionGroupsList from './views/permission-groups/list';
import PermissionGroupsEdit from './views/permission-groups/edit';
import PermissionGroupsNew from './views/permission-groups/new';
import PermissionGroupsShow from './views/permission-groups/show';

import PermissionsList from './views/permissions/list';
import PermissionsNew from './views/permissions/new';
import PermissionsEdit from './views/permissions/edit';

export default {
  '/permission_groups': {
    component: PermissionGroupsList,
  },

  '/permission_groups/:id': {
    name: 'permissionGroupShow',
    component: PermissionGroupsShow,

    subRoutes: {
      '/': {
        component: PermissionsList,
      },

      '/permissions/new': {
        name: 'permissionNew',
        component: PermissionsNew,
      },

      '/permissions/:permissionId/edit': {
        name: 'permissionEdit',
        component: PermissionsEdit,
      },
    },
  },

  '/permission_groups/:id/edit': {
    name: 'userEdit',
    component: PermissionGroupsEdit,
  },

  '/permission_groups/new': {
    component: PermissionGroupsNew,
  },
};
