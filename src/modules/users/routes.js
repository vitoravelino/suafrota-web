import UsersList from './views/list';
import UsersEdit from './views/edit';
import UsersNew from './views/new';
import UsersShow from './views/show';

export default {
  '/users': {
    component: UsersList,
  },

  '/users/:id': {
    name: 'userShow',
    component: UsersShow,
  },

  '/users/:id/edit': {
    name: 'userEdit',
    component: UsersEdit,
  },

  '/users/new': {
    component: UsersNew,
  },
};
