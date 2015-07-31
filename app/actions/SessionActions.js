import Alt from '../lib/Alt';
import Api from '../lib/Api';

class SessionActions {
  getMe() {
    this.dispatch();
    Api.get(`/me`, {accessToken: true}).then(this.actions.setMe).catch(this.actions.setError);
  }

  setMe(res) {
    this.dispatch(res.data);
  }

  login(data) {
    this.dispatch();
    Api.post(`/login`, data).then(this.actions.setMe).catch(this.actions.setError);
  }

  logout() {
    this.dispatch();
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(SessionActions);
