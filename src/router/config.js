import store from '../vuex/store';

import routes from './routes';

import UsersService from '../modules/users/service';
import SessionsService from '../modules/sessions/service';

export function configRoutes(router) {
  router.map(routes);

  router.beforeEach(({ from, to, redirect, next }) => {
    const mainAlert = store.getters.mainAlert;

    if (from && mainAlert.type &&
        from.path !== mainAlert.from) {
      store.dispatch('hideAlert');
    }

    // auth
    const token = SessionsService.getToken();
    const isLogged = SessionsService.isLogged();

    // checking if token still valid if not logged
    if (to.auth && token && !isLogged) {
      UsersService.getProfile().then((data) => {
        const user = data.json();

        SessionsService.setUser(user);
        next();
      }).catch(() => {
        redirect('/users/sign_in');
      });

    // if route requires auth and not logged,
    // redirect to sign in
    } else if (to.auth && !isLogged) {
      redirect('/users/sign_in');

    // if route is anon and logged,
    // redirect to root
    } else if (to.anon && isLogged) {
      redirect('/');

    // otherwise
    } else {
      next();
    }
  });
}
