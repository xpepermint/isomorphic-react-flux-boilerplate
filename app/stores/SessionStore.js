import cookie from 'react-cookie';
import Alt from '../lib/Alt';
import SessionSource from '../sources/SessionSource';
import SessionActions from '../actions/SessionActions';

class SessionStore {
  constructor() {
    this.registerAsync(SessionSource);
    this.bindActions(SessionActions);
    this.exportPublicMethods({isAuthenticated: this.isAuthenticated, getAccessToken: this.getAccessToken});
    this.state = {};
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

  onGetMeSuccess(data) {
    this.setState({data});
  }

  onGetError(error) {
    this.setState({data});
  }

  onLogin(data) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().login(data);
  }

  onLoginSuccess(res) {
    cookie.save('accessToken', res.data.accessToken);
    this.setState(res.data);
  }

  onLoginError(res) {
    this.setState(res.data);
  }

  onLogout() {
    cookie.remove('accessToken');
  }
}

export default Alt.createStore(SessionStore, 'SessionStore');
