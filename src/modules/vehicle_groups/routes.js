import VehicleGroupsList from './views/list';
import VehicleGroupsEdit from './views/edit';
import VehicleGroupsNew from './views/new';
import VehicleGroupsShow from './views/show';

export default {
  '/vehicle_groups': {
    component: VehicleGroupsList,
  },

  '/vehicle_groups/:id': {
    name: 'vehicleGroupShow',
    component: VehicleGroupsShow,
  },

  '/vehicle_groups/:id/edit': {
    name: 'vehicleGroupEdit',
    component: VehicleGroupsEdit,
  },

  '/vehicle_groups/new': {
    component: VehicleGroupsNew,
  },
};
