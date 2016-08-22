import EquipmentsList from './views/list';
import EquipmentsEdit from './views/edit';
import EquipmentsNew from './views/new';
import EquipmentsShow from './views/show';

export default {
  '/equipments': {
    component: EquipmentsList,
    role: 'admin',
  },

  '/equipments/:id': {
    name: 'equipmentShow',
    component: EquipmentsShow,
    role: 'admin',
  },

  '/equipments/:id/edit': {
    name: 'equipmentEdit',
    component: EquipmentsEdit,
    role: 'admin',
  },

  '/equipments/new': {
    component: EquipmentsNew,
    role: 'admin',
  },
};
