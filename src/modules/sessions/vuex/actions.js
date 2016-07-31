import SessionsService from '../service';

export default {
  setUser({ commit }, user) {
    commit('SET_USER', user);
  },

  signIn({ commit }, credentials) {
    return SessionsService.signIn(credentials).then((data) => {
      const token = data.json().authenticated.token;

      window.localStorage.setItem('sth.xpto', token);
      commit('SET_TOKEN', token);
    }).catch(() => {
      console.log('catch signIn');
    });
  },

  signOut({ commit }) {
    SessionsService.signOut().then(() => {
      window.localStorage.removeItem('sth.xpto');
      commit('REMOVE_TOKEN');
      commit('REMOVE_USER');
    }).catch(() => {
      console.log('catch signOut');
    });
  },
};
