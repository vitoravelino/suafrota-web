// paths
import {
  USERS_URL,
  USERS_SHOW_URL,
  USERS_EDIT_URL,
  USERS_NEW_URL,
} from './paths';

// components
import UsersList from '../views/list';
import UsersEdit from '../views/edit';
import UsersNew from '../views/new';
import UsersShow from '../views/show';

export default {
  [USERS_URL]: {
    component: UsersList,
    permission: 'users.list',
  },

  [USERS_SHOW_URL]: {
    name: 'userShow',
    component: UsersShow,
    permission: 'users.show',
  },

  [USERS_EDIT_URL]: {
    name: 'userEdit',
    component: UsersEdit,
    permission: 'users.update',
  },

  [USERS_NEW_URL]: {
    component: UsersNew,
    permission: 'users.store',
  },
};
