import store from '../vuex/store';

class Authorization {
  constructor() {
    this.config();
  }

  // NOTE: there will be cases that not only having
  // the permission will be enough; be aware of that and
  // build your on computed authorization property.
  can(permission) {
    return this.permissions.indexOf(permission) !== -1;
  }

  canAny(prefix) {
    return this.permissions.some((p) => p.indexOf(`${prefix}.`) !== -1);
  }

  is(role) {
    return this.role === role;
  }

  reset(permissions = [], role = 'guest') {
    this.permissions = permissions;
    this.role = role;
  }

  config() {
    if (this.configured) {
      return;
    }

    store.subscribe((mutation) => {
      if (mutation.type === 'SET_USER') {
        const user = mutation.payload;

        this.reset(user.permissions, user.role);
      }

      if (mutation.type === 'REMOVE_USER') {
        this.reset();
      }
    });

    this.reset();
    this.configured = true;
  }
}

Authorization.install = (Vue) => {
  const auth = new Authorization();

  Vue.auth = auth;
  Vue.prototype.$auth = auth;
};

export default Authorization;
