import UsersList from './views/list';
import UsersEdit from './views/edit';
import UsersNew from './views/new';
import UsersShow from './views/show';

export default {
  '/users': {
    component: UsersList,
    permission: 'users.list',
  },

  '/users/:id': {
    name: 'userShow',
    component: UsersShow,
    permission: 'users.show',
  },

  '/users/:id/edit': {
    name: 'userEdit',
    component: UsersEdit,
    permission: 'users.update',
  },

  '/users/new': {
    component: UsersNew,
    permission: 'users.store',
  },
};
