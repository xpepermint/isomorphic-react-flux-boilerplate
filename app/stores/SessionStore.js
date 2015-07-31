import cookie from 'react-cookie';
import Alt from '../lib/Alt';
import SessionActions from '../actions/SessionActions';

class SessionStore {
  constructor() {
    this.state = this.getDefaultState();
    this.bindListeners({
      onGetMeSuccess: SessionActions.getMeSuccess,
      onGetError: SessionActions.getMeError,
      onLoginSuccess: SessionActions.loginSuccess,
      onLoginError: SessionActions.loginError,
      onLogout: SessionActions.logout
    });
    this.exportPublicMethods({
      isAuthenticated: this.isAuthenticated,
      getAccessToken: this.getAccessToken,
      getLoginReferrer: this.getLoginReferrer
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

  isAuthenticated() {
    return !!this.getAccessToken();
  }

  onGetMeSuccess(me) {
    cookie.remove('loginReferrer');
    this.setState({me});
  }

  onGetError(error) {
    this.setState(error);
  }

  onLoginSuccess(me) {
    cookie.save('accessToken', me.accessToken);
    this.setState({me});
  }

  onLoginError(error) {
    this.setState(error);
  }

  onLogout() {
    cookie.remove('accessToken');
    cookie.remove('loginReferrer');
    this.setState(this.getDefaultState());
  }
}

export default Alt.createStore(SessionStore, 'SessionStore');
