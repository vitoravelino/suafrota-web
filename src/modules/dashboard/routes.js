import Layout from './views/layout';

import UsersRoutes from 'modules/users/routes';
import VehiclesRoutes from 'modules/vehicles/routes';
import EquipmentsRoutes from 'modules/equipments/routes';
import CustomersRoutes from 'modules/customers/routes';
import PermissionsRoutes from 'modules/permissions/routes';
import VehicleGroupsRoutes from 'modules/vehicle_groups/routes';

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
