import VehiclesList from './views/list';
import VehiclesEdit from './views/edit';
import VehiclesNew from './views/new';
import VehiclesShow from './views/show';

export default {
  '/vehicles': {
    component: VehiclesList,
    permission: 'vehicles.list',
  },

  '/vehicles/:id': {
    name: 'vehicleShow',
    component: VehiclesShow,
    permission: 'vehicles.show',
  },

  '/vehicles/:id/edit': {
    name: 'vehicleEdit',
    component: VehiclesEdit,
    permission: 'vehicles.update',
  },

  '/vehicles/new': {
    component: VehiclesNew,
    permission: 'vehicles.store',
  },
};
