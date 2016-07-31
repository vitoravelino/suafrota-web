import EquipmentsList from './views/list';
import EquipmentsEdit from './views/edit';
import EquipmentsNew from './views/new';
import EquipmentsShow from './views/show';

export default {
  '/equipments': {
    component: EquipmentsList,
  },

  '/equipments/:id': {
    name: 'equipmentShow',
    component: EquipmentsShow,
  },

  '/equipments/:id/edit': {
    name: 'equipmentEdit',
    component: EquipmentsEdit,
  },

  '/equipments/new': {
    component: EquipmentsNew,
  },
};
