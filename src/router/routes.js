import Home from '../pages/home';
import Login from '../pages/login';
import NotFound from '../pages/not-found';
import Layout from '../pages/layout';

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
    component: Layout,
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
        component: Home,
      },

      '/customers': {
        component: Home,
      },

      '/vehicles': {
        component: Home,
      },

      '/equipments': {
        component: Home,
      },
    },
  },
};

export default routes;
