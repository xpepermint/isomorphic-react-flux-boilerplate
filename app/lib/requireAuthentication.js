import SessionStore from '../stores/SessionStore';

export default function(nextState, transition) {
  if (!SessionStore.isAuthenticated()) transition.to('/login');
}
