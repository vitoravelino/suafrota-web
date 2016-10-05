import Vue from 'vue';
import VueResource from 'vue-resource';

import swal from 'utils/swal';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}permission_groups/{permissionGroupId}/permissions`;

const resource = Vue.resource(`${ENDPOINT}{/id}`);

/**
 * [get description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function get(permissionGroupId, id) {
  return resource.get({ permissionGroupId, id });
}

/**
 * [save description]
 * @param  {[type]} permission [description]
 * @return {[type]}      [description]
 */
function save(permissionGroup, permission) {
  const permissionGroupId = permissionGroup.id;

  return resource.save({ permissionGroupId }, permission);
}

/**
 * [update description]
 * @param  {[type]} permission [description]
 * @return {[type]}      [description]
 */
function update(permission) {
  const id = permission.id;
  const permissionGroupId = permission.permission_group_id;

  return resource.update({ permissionGroupId, id }, permission);
}

/**
 * [remove description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function remove(permissionGroupId, id) {
  return resource.delete({ permissionGroupId, id });
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
 * @param  {[type]} permission [description]
 * @return {[type]}            [description]
 */
function confirmRemoval(permission) {
  /* eslint max-len: "off" */
  return swal.remove({
    text: `Permissão <b>${permission.name}</b> será removido. Todos os usuários que a possuem perderão tal.
           Você não poderá desfazer essa ação.`,
  });
}

export default {
  get,
  save,
  all,
  update,
  remove,
  confirmRemoval,
};
