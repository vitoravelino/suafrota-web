// paths
import {
  EQUIPMENTS_URL,
  EQUIPMENTS_SHOW_URL,
  EQUIPMENTS_EDIT_URL,
  EQUIPMENTS_NEW_URL,
} from './paths';

// components
import EquipmentsList from '../views/list';
import EquipmentsEdit from '../views/edit';
import EquipmentsNew from '../views/new';
import EquipmentsShow from '../views/show';

export default {
  [EQUIPMENTS_URL]: {
    component: EquipmentsList,
    role: 'admin',
  },

  [EQUIPMENTS_SHOW_URL]: {
    name: 'equipmentShow',
    component: EquipmentsShow,
    role: 'admin',
  },

  [EQUIPMENTS_EDIT_URL]: {
    name: 'equipmentEdit',
    component: EquipmentsEdit,
    role: 'admin',
  },

  [EQUIPMENTS_NEW_URL]: {
    component: EquipmentsNew,
    role: 'admin',
  },
};
