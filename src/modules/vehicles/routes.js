import VehiclesList from './views/list';
import VehiclesEdit from './views/edit';
import VehiclesNew from './views/new';
import VehiclesShow from './views/show';

export default {
  '/vehicles': {
    component: VehiclesList,
  },

  '/vehicles/:id': {
    name: 'vehicleShow',
    component: VehiclesShow,
  },

  '/vehicles/:id/edit': {
    name: 'vehicleEdit',
    component: VehiclesEdit,
  },

  '/vehicles/new': {
    component: VehiclesNew,
  },
};
