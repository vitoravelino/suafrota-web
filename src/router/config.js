import Vue from 'vue';

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
    const authorization = Vue.auth;

    // TODO review conditions and
    // previous url on redirec tto login

    console.log('from', from.path);
    console.log('to', to.path);
    // checking if token still valid if not logged
    if (token && !isLogged) {
      UsersService.getProfile().then((data) => {
        const user = data.json().data;

        SessionsService.setUser(user);

        if (to.anon) {
          console.log('root');
          redirect('/');
        } else {
          console.log('next!');
          next();
        }
      }).catch(() => {
        redirect('/users/sign_in');
      });

    // if route requires auth and not logged,
    // redirect to sign in
    } else if (to.auth && !isLogged) {
      redirect('/users/sign_in');

    // if route requires permssion
    // and user doesn't have it
    // prevent it to happen
    } else if (to.permission && !authorization.can(to.permission)) {
      console.log('permission denied');
      redirect(from.path);

    // if route is anon and logged,
    // redirect to root
    } else if (to.anon && isLogged) {
      redirect('/');

    // otherwise
    } else {
      console.log('else');
      next();
    }
  });
}
