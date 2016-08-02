import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}vehicles`;

const customActions = {
  search: { method: 'GET', url: `${ENDPOINT}/search` },
};

const resource = Vue.resource(`${ENDPOINT}{/id}`, {}, customActions);

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

export default {
  get,
  save,
  all,
  update,
  remove,
  search,
};
