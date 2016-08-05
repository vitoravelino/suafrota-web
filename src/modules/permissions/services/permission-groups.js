import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}permission_groups`;

const resource = Vue.resource(`${ENDPOINT}{/id}`);

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
 * @param  {[type]} permissionGroup [description]
 * @return {[type]}      [description]
 */
function save(permissionGroup) {
  return resource.save({}, permissionGroup);
}

/**
 * [update description]
 * @param  {[type]} permissionGroup [description]
 * @return {[type]}      [description]
 */
function update(permissionGroup) {
  return resource.update({ id: permissionGroup.id }, permissionGroup);
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
  get,
  save,
  all,
  update,
  remove,
};
