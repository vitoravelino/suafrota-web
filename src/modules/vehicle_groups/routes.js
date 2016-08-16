import VehicleGroupsList from './views/list';
import VehicleGroupsEdit from './views/edit';
import VehicleGroupsNew from './views/new';
import VehicleGroupsShow from './views/show';

export default {
  '/vehicle_groups': {
    component: VehicleGroupsList,
    permission: 'vehicleGroups.list',
  },

  '/vehicle_groups/:id': {
    name: 'vehicleGroupShow',
    component: VehicleGroupsShow,
    permission: 'vehicleGroups.show',
  },

  '/vehicle_groups/:id/edit': {
    name: 'vehicleGroupEdit',
    component: VehicleGroupsEdit,
    permission: 'vehicleGroups.update',
  },

  '/vehicle_groups/new': {
    component: VehicleGroupsNew,
    permission: 'vehicleGroups.store',
  },
};
