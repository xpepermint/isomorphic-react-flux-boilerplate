import Alt from '../lib/Alt';
import RestApi from '../lib/RestApi';

class SessionActions {
  getMe() {
    this.dispatch();
    RestApi.get(`/me`, {accessToken: true}).then(this.actions.setMe).catch(this.actions.setError);
  }

  setMe(res) {
    this.dispatch(res.data);
  }

  login(data) {
    this.dispatch();
    RestApi.post(`/login`, data).then(this.actions.setMe).catch(this.actions.setError);
  }

  logout() {
    this.dispatch();
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(SessionActions);
