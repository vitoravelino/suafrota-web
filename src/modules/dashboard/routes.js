import Layout from './views/layout';

import UsersRoutes from '../users/routes';
import VehiclesRoutes from '../vehicles/routes';
import EquipmentsRoutes from '../equipments/routes';
import CustomersRoutes from '../customers/routes';
import PermissionsRoutes from '../permissions/routes';
import VehicleGroupsRoutes from '../vehicle_groups/routes';

const routes = {
  component: Layout,
  subRoutes: {},
  auth: true,
};

const subRoutes = [
  UsersRoutes,
  VehiclesRoutes,
  EquipmentsRoutes,
  CustomersRoutes,
  PermissionsRoutes,
  VehicleGroupsRoutes,
];

Object.assign(routes.subRoutes, ...subRoutes);

export default routes;
