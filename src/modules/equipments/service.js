import Vue from 'vue';
import VueResource from 'vue-resource';
import swal from 'sweetalert2';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}equipments`;

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
 * @param  {[type]} equipment [description]
 * @return {[type]}           [description]
 */
function confirmRemoval(equipment) {
  return swal({
    title: 'Você tem certeza?',
    text: `Equipamento <b>${equipment.serial}</b> será removido.
           Você não poderá desfazer essa ação.`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, remova-o',
    cancelButtonText: 'Cancelar',
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
