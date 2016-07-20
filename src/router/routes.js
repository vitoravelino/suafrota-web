import Home from '../pages/home';
import Second from '../pages/second';
import Login from '../pages/login';
import NotFound from '../pages/not-found';
import DashboardLayout from '../pages/dashborad-layout';

import UsersList from '../pages/users/list';
import UsersEdit from '../pages/users/edit';
import UsersNew from '../pages/users/new';

/*
 * CLIENT ROUTES
 */

const routes = {
  '*': {
    component: NotFound,
  },

  '/users/login': {
    component: Login,
  },

  '/': {
    component: DashboardLayout,
    subRoutes: {
      '/': {
        component: Home,
      },

      '/users': {
        component: UsersList,
      },

      '/users/:id/edit': {
        name: 'userEdit',
        component: UsersEdit,
      },

      '/users/new': {
        component: UsersNew,
      },

      '/groups': {
        component: Second,
      },

      '/customers': {
        component: Second,
      },

      '/vehicles': {
        component: Second,
      },

      '/equipments': {
        component: Second,
      },
    },
  },
};

export default routes;
