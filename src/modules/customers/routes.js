import CustomersList from './views/list';
import CustomersEdit from './views/edit';
import CustomersNew from './views/new';
import CustomersShow from './views/show';

export default {
  '/customers': {
    component: CustomersList,
  },

  '/customers/:id': {
    name: 'customerShow',
    component: CustomersShow,
  },

  '/customers/:id/edit': {
    name: 'customerEdit',
    component: CustomersEdit,
  },

  '/customers/new': {
    component: CustomersNew,
  },
};
