import Layout from './views/layout';

import UsersRoutes from '../users/routes';
import VehiclesRoutes from '../vehicles/routes';
import EquipmentsRoutes from '../equipments/routes';
import CustomersRoutes from '../customers/routes';

const routes = {
  component: Layout,
  subRoutes: {},
  auth: true,
};

Object.assign(routes.subRoutes, UsersRoutes);
Object.assign(routes.subRoutes, VehiclesRoutes);
Object.assign(routes.subRoutes, EquipmentsRoutes);
Object.assign(routes.subRoutes, CustomersRoutes);

export default routes;
