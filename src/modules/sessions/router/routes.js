// paths
import {
  SIGN_IN_URL,
} from './paths';

// components
import SignIn from '../views/sign-in';

export default {
  [SIGN_IN_URL]: {
    component: SignIn,
    anon: true,
  },
};
