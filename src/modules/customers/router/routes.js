// paths
import {
  CUSTOMERS_URL,
  CUSTOMERS_SHOW_URL,
  CUSTOMERS_EDIT_URL,
  CUSTOMERS_NEW_URL,
} from './paths';

// components
import CustomersList from '../views/list';
import CustomersEdit from '../views/edit';
import CustomersNew from '../views/new';
import CustomersShow from '../views/show';

export default {
  [CUSTOMERS_URL]: {
    component: CustomersList,
    role: 'admin',
  },

  [CUSTOMERS_SHOW_URL]: {
    name: 'customerShow',
    component: CustomersShow,
    role: 'admin',
  },

  [CUSTOMERS_EDIT_URL]: {
    name: 'customerEdit',
    component: CustomersEdit,
    role: 'admin',
  },

  [CUSTOMERS_NEW_URL]: {
    component: CustomersNew,
    role: 'admin',
  },
};
