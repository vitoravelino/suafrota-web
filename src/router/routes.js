import NotFound from '../modules/common/views/not-found';

import DashboardRoutes from '../modules/dashboard/routes';
import SessionsRoutes from '../modules/sessions/routes';

const routes = {
  '*': {
    component: NotFound,
  },

  '/': DashboardRoutes,
};

Object.assign(routes, SessionsRoutes);

export default routes;
