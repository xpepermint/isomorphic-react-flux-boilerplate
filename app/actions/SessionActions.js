import Alt from '../lib/Alt';
import Api from '../lib/Api';

class SessionActions {
  getMe() {
    this.dispatch();
    Api.get(`/me`, {accessToken: true}).then(this.actions.getMeSuccess).catch(this.actions.getMeError);
  }

  getMeSuccess(res) {
    this.dispatch(res.data);
  }

  getMeError(res) {
    this.dispatch(res.data.error);
  }

  login(data) {
    this.dispatch();
    Api.get(`/login`, data).then(this.actions.loginSuccess).catch(this.actions.loginError);
  }

  loginSuccess(res) {
    this.dispatch(res.data);
  }

  loginError(res) {
    this.dispatch(res.data.error);
  }

  logout() {
    this.dispatch();
  }
}

export default Alt.createActions(SessionActions);
