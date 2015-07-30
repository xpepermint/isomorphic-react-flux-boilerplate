import cookie from 'react-cookie';
import Alt from '../lib/Alt';
import SessionSource from '../sources/SessionSource';
import SessionActions from '../actions/SessionActions';

class SessionStore {
  constructor() {
    this.registerAsync(SessionSource);
    this.bindActions(SessionActions);
    this.exportPublicMethods({isAuthenticated: this.isAuthenticated, getAccessToken: this.getAccessToken});
    this.state = {me: {}};
  }

  getAccessToken() {
    return cookie.load('accessToken');
  }

  isAuthenticated() {
    return !!this.getAccessToken();
  }

  onGetMe() {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getMe();
  }

  onGetMeSuccess(me) {
    this.setState({me});
  }

  onGetError(error) {
    this.setState(error);
  }

  onLogin(data) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().login(data);
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
  }
}

export default Alt.createStore(SessionStore, 'SessionStore');
