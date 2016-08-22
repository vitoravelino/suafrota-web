import CustomersList from './views/list';
import CustomersEdit from './views/edit';
import CustomersNew from './views/new';
import CustomersShow from './views/show';

export default {
  '/customers': {
    component: CustomersList,
    role: 'admin',
  },

  '/customers/:id': {
    name: 'customerShow',
    component: CustomersShow,
    role: 'admin',
  },

  '/customers/:id/edit': {
    name: 'customerEdit',
    component: CustomersEdit,
    role: 'admin',
  },

  '/customers/new': {
    component: CustomersNew,
    role: 'admin',
  },
};
