import Vue from 'vue';

/* eslint max-len: "off" */
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LICENSE_PLATE_REGEX = /^[a-zA-Z]{3}-[0-9]{4}$/;

const CUSTOMER_CODE_REGEX = /^[A-Z]{3}$/;

const PERMISSION_REGEX = /^\w{3,}\.\w{3,}$/;

export function configValidators() {
  Vue.validator('email', (val) => EMAIL_REGEX.test(val));

  Vue.validator('license_plate', (val) => LICENSE_PLATE_REGEX.test(val));

  Vue.validator('customer_code', (val) => CUSTOMER_CODE_REGEX.test(val));

  Vue.validator('permission', (val) => PERMISSION_REGEX.test(val));
}
