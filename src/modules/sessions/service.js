import Vue from 'vue';

import store from '../../vuex/store';

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}users`;

function signIn(credentials) {
  return Vue.http.post(`${ENDPOINT}/sign_in`, credentials);
}

function signOut() {
  return Vue.http.delete(`${ENDPOINT}/sign_out`);
}

function getToken() {
  return store.getters.getToken;
}

function destroy() {
  store.dispatch('signOut');
}

function setUser(user) {
  store.dispatch('setUser', user);
}

/**
 * [isLogged description]
 * @return {Boolean} [description]
 */
function isLogged() {
  return false;
}

export default {
  getToken,
  destroy,
  setUser,
  signIn,
  signOut,
  isLogged,
};
