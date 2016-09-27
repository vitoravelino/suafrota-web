import Layout from './views/layout';

import UsersRoutes from 'modules/users/router/routes';
import VehiclesRoutes from 'modules/vehicles/router/routes';
import EquipmentsRoutes from 'modules/equipments/router/routes';
import CustomersRoutes from 'modules/customers/router/routes';
import PermissionsRoutes from 'modules/permissions/router/routes';
import VehicleGroupsRoutes from 'modules/vehicle_groups/router/routes';
import TrackingRoutes from 'modules/tracking/router/routes';

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
  TrackingRoutes,
];

Object.assign(routes.subRoutes, ...subRoutes);

export default routes;
