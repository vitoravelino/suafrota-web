import SessionsService from '../service';

export default {
  signIn({ commit }, credentials) {
    return SessionsService.signIn(credentials).then((data) => {
      const token = data.json().authenticated.token;

      SessionsService.setToken(token);
    }).catch(() => {
      console.log('catch signIn');
    });
  },

  signOut({ commit }) {
    SessionsService.signOut().then(() => {
      SessionsService.destroy();

      commit('REMOVE_USER');
    }).catch(() => {
      console.log('catch signOut');
    });
  },
};
