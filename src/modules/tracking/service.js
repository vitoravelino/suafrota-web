import Vue from 'vue';
import VueResource from 'vue-resource';

import store from '../../vuex/store';

Vue.use(VueResource);

const API_URL = process.env.API_URL;

const ENDPOINT = `${API_URL}tracking`;

const MINUTE = 60 * 1000;

const customActions = {
  latest: { method: 'GET', url: `${ENDPOINT}/latest` },
};

const resource = Vue.resource(`${ENDPOINT}{/id}`, {}, customActions);

let intervalId;

/**
 * [latest description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
function latest(id) {
  return resource.latest({ id });
}

/**
 * [updateStore description]
 * @return {[type]} [description]
 */
function updateStore() {
  latest().then((data) => {
    const vehicles = data.json();

    store.commit('SET_TRACKED_VEHICLES', vehicles);
  });
}

/**
 * [stop description]
 * @return {[type]} [description]
 */
function stop() {
  clearInterval(intervalId);
}

/**
 * [start description]
 * @return {[type]} [description]
 */
function start() {
  intervalId = setInterval(updateStore, MINUTE);
}

export default {
  latest,
  start,
  stop,
};
