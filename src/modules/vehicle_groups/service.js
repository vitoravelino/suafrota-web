import Vue from 'vue';
import VueResource from 'vue-resource';

import swal from 'utils/swal';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}vehicle_groups`;

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

/**
 * [confirmRemoval description]
 * @param  {[type]} vehicleGroup [description]
 * @return {[type]}              [description]
 */
function confirmRemoval(vehicleGroup) {
  return swal.remove({
    text: `Grupo de veículos <b>${vehicleGroup.name}</b> será removido.
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
