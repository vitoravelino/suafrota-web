import NotFound from 'modules/dashboard/views/not-found';

import DashboardRoutes from 'modules/dashboard/routes';
import SessionsRoutes from 'modules/sessions/router/routes';

const routes = {
  '*': {
    component: NotFound,
  },

  '/': DashboardRoutes,
};

Object.assign(routes, SessionsRoutes);

export default routes;
