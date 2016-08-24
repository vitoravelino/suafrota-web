// paths
import {
  VEHICLE_GROUPS_URL,
  VEHICLE_GROUPS_SHOW_URL,
  VEHICLE_GROUPS_EDIT_URL,
  VEHICLE_GROUPS_NEW_URL,
} from './paths';

// components
import VehicleGroupsList from '../views/list';
import VehicleGroupsEdit from '../views/edit';
import VehicleGroupsNew from '../views/new';
import VehicleGroupsShow from '../views/show';

export default {
  [VEHICLE_GROUPS_URL]: {
    component: VehicleGroupsList,
    permission: 'vehicleGroups.list',
  },

  [VEHICLE_GROUPS_SHOW_URL]: {
    name: 'vehicleGroupShow',
    component: VehicleGroupsShow,
    permission: 'vehicleGroups.show',
  },

  [VEHICLE_GROUPS_EDIT_URL]: {
    name: 'vehicleGroupEdit',
    component: VehicleGroupsEdit,
    permission: 'vehicleGroups.update',
  },

  [VEHICLE_GROUPS_NEW_URL]: {
    component: VehicleGroupsNew,
    permission: 'vehicleGroups.store',
  },
};
