import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}users`;

const customActions = {
  profile: { method: 'GET', url: `${ENDPOINT}/me` },
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
 * [all description]
 * @return {[type]} [description]
 */
function all(params = {}) {
  return resource.get({}, params);
}

export default {
  getProfile,
  get,
  save,
  all,
  update,
  delete: remove,
};
