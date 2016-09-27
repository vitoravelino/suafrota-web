// paths
import {
  TRACKING_URL,
  TRACKING_DETAILS_URL,
} from './paths';

// components
import Tracking from '../views/tracking';
import TrackingDetails from '../views/tracking-details';

export default {
  [TRACKING_URL]: {
    component: Tracking,
    subRoutes: {
      [TRACKING_DETAILS_URL]: {
        name: 'trackingDetails',
        component: TrackingDetails,
      },
    },
  },
};
