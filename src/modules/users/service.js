import Vue from 'vue';
import VueResource from 'vue-resource';

import swal from 'utils/swal';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}users`;

const customActions = {
  profile: { method: 'GET', url: `${ENDPOINT}/me` },
  search: { method: 'GET', url: `${ENDPOINT}/search` },
};

const resource = Vue.resource(`${ENDPOINT}{/id}`, {}, customActions);

/**
 * [getProfile description]
 * @return {[type]} [description]
 */
function getProfile() {
  return resource.profile();
}

/**
 * [get description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function get(id) {
  return resource.get({ id });
}

/**
 * [save description]
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
function save(user) {
  return resource.save({}, user);
}

/**
 * [update description]
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
function update(user) {
  return resource.update({ id: user.id }, user);
}

/**
 * [remove description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function remove(id) {
  return resource.delete({ id });
}

/**
 * [search description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
function search(params = {}) {
  return resource.search(params);
}

/**
 * [all description]
 * @return {[type]} [description]
 */
function all(params = {}) {
  return resource.get({}, params);
}

/**
 * [confirmRemoval description]
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
function confirmRemoval(user) {
  return swal.remove({
    text: `Usuário <b>${user.name}</b> será removido. Você não poderá desfazer essa ação.`,
  });
}

export default {
  getProfile,
  get,
  save,
  all,
  update,
  remove,
  search,
  confirmRemoval,
};
