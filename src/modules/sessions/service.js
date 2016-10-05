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
  store.commit('REMOVE_USER');
}

function setUser(user) {
  store.commit('SET_USER', user);
}

function getPreviousURL() {
  return window.localStorage.getItem('sth.previous');
}

function setPreviousURL(path) {
  if (!path) {
    window.localStorage.removeItem('sth.previous');
  } else {
    window.localStorage.setItem('sth.previous', path);
  }
}

/**
 * [isLogged description]
 * @return {Boolean} [description]
 */
function isLogged() {
  return getToken() !== null && Object.keys(store.getters.currentUser).length;
}

export default {
  setToken,
  getToken,
  destroy,
  setUser,
  setPreviousURL,
  getPreviousURL,
  signIn,
  signOut,
  isLogged,
  switchCustomer,
};
