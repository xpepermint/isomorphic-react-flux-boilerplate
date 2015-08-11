import cookie from 'react-cookie';
import Alt from '../lib/Alt';
import SessionActions from '../actions/SessionActions';

class SessionStore {
  constructor() {
    this.state = this.getDefaultState();
    this.bindListeners({
      onSetMe: SessionActions.setMe,
      onSetError: SessionActions.setError,
      onLogout: SessionActions.logout
    });
    this.exportPublicMethods({
      isAuthenticated: this.isAuthenticated,
      getAccessToken: this.getAccessToken,
      getLoginReferrer: this.getLoginReferrer,
      setLoginReferrer: this.setLoginReferrer
    });
  }

  getDefaultState() {
    return {me: {}};
  }

  getAccessToken() {
    return cookie.load('accessToken');
  }

  getLoginReferrer() {
    return cookie.load('loginReferrer') || '/';
  }

  setLoginReferrer(path) {
    cookie.save('loginReferrer', path);
  }

  isAuthenticated() {
    return !!this.getAccessToken();
  }

  onSetMe(me) {
    cookie.save('accessToken', me.accessToken);
    this.setState({me});
  }

  onSetError(error) {
    cookie.remove('accessToken');
    this.setState({error});
  }

  onLogout() {
    cookie.remove('loginReferrer');
    cookie.remove('accessToken');
    this.setState(this.getDefaultState());
  }
}

export default Alt.createStore(SessionStore, 'SessionStore');
