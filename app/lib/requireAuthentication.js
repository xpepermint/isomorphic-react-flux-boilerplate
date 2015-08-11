import SessionStore from '../stores/SessionStore';
import cookie from 'react-cookie';

export default function(nextState, transition) {
  if (!SessionStore.isAuthenticated()) {
    SessionStore.setLoginReferrer(nextState.location.pathname);
    transition.to('/login');
  }
}
