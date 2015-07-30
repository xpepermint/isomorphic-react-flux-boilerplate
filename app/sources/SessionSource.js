import axios from 'axios';
import config from '../../config';
import SessionActions from '../actions/SessionActions';
import SessionStore from '../stores/SessionStore';

const SessionSource = {
  getMe: {
    remote(state, id) {
      let accessToken = SessionStore.getAccessToken();
      let options = {headers: {'Authorization': `Bearer ${accessToken}`}};
      return axios.get(`${config.apiBaseUrl}/me`, options).then(res => {return res.data});
    },
    success: SessionActions.meSuccess,
    error: SessionActions.meError
  },

  login: {
    remote(state, data) {
      return axios.post(`${config.apiBaseUrl}/login`, data).then(res => {return res.data});
    },
    success: SessionActions.loginSuccess,
    error: SessionActions.loginError
  }

};

export default SessionSource;
