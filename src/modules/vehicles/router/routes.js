// paths
import {
  VEHICLES_URL,
  VEHICLES_SHOW_URL,
  VEHICLES_EDIT_URL,
  VEHICLES_NEW_URL,
} from './paths';

// components
import VehiclesList from '../views/list';
import VehiclesEdit from '../views/edit';
import VehiclesNew from '../views/new';
import VehiclesShow from '../views/show';

export default {
  [VEHICLES_URL]: {
    component: VehiclesList,
    permission: 'vehicles.list',
  },

  [VEHICLES_SHOW_URL]: {
    name: 'vehicleShow',
    component: VehiclesShow,
    permission: 'vehicles.show',
  },

  [VEHICLES_EDIT_URL]: {
    name: 'vehicleEdit',
    component: VehiclesEdit,
    permission: 'vehicles.update',
  },

  [VEHICLES_NEW_URL]: {
    component: VehiclesNew,
    permission: 'vehicles.store',
  },
};
