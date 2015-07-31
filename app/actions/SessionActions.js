import axios from 'axios';
import alt from '../lib/Alt';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

class SessionActions {
  getMe() {
    this.dispatch();
    axios.get(`${config.apiBaseUrl}/me`, this.actions.getRequestOptions()).then(this.actions.getStatsSuccess).catch(this.actions.getStatsError);
  }

  getMeSuccess(res) {
    this.dispatch(res.data);
  }

  getMeError(res) {
    this.dispatch(res.data.error);
  }

  login(data) {
    this.dispatch();
    axios.post(`${config.apiBaseUrl}/login`, data).then(this.actions.loginSuccess).catch(this.actions.loginError);
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

  getRequestOptions() {
    let accessToken = SessionStore.getAccessToken();
    return {headers: {'Authorization': `Bearer ${accessToken}`}};
  }
}

export default alt.createActions(SessionActions);
