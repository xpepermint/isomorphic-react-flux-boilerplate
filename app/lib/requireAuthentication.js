import SessionStore from '../stores/SessionStore';
import cookie from 'react-cookie';

export default function(nextState, transition) {
  if (!SessionStore.isAuthenticated()) {
    if (typeof location != 'undefined') {
      cookie.save('loginReferrer', location.pathname);
    }
    transition.to('/login');
  }
}
