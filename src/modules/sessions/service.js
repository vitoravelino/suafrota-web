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

function switchCustomer(id) {
  return Vue.http.post(`${ENDPOINT}/switch_customer`, { id });
}

function getToken() {
  return window.localStorage.getItem('sth.xpto');
}

function setToken(token) {
  return window.localStorage.setItem('sth.xpto', token);
}

function destroy() {
  window.localStorage.removeItem('sth.xpto');
}

function setUser(user) {
  store.dispatch('setUser', user);
}

/**
 * [isLogged description]
 * @return {Boolean} [description]
 */
function isLogged() {
  return store.getters.currentUser !== null;
}

export default {
  setToken,
  getToken,
  destroy,
  setUser,
  signIn,
  signOut,
  isLogged,
  switchCustomer,
};
