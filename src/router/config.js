import routes from './routes';

export function configRoutes(router) {
  router.map(routes);

  router.beforeEach(({ to, redirect, next }) => {
    if (to.auth && !router.app.isLogged) {
      redirect('/users/login');
    } else {
      next();
    }
  });
}
