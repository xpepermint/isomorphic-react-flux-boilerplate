import axios from 'axios';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

class Api {
  get(path, options) {
    return axios.get(this.buildUrl(path), this.buildRequestOptions(options));
  }

  post(path, data, options) {
    return axios.post(this.buildUrl(path), data, this.buildRequestOptions(options));
  }

  put(path, data, options) {
    return axios.put(this.buildUrl(path), data, this.buildRequestOptions(options));
  }

  delete(path, options) {
    return axios.delete(this.buildUrl(path), this.buildRequestOptions(options));
  }

  buildUrl(path) {
    return `${config.apiBaseUrl}${path}`;
  }

  buildRequestOptions(options) {
    let data = Object.assign({}, options);
    let accessToken = delete data.accessToken;

    if (accessToken && accessToken !== false) {
      if (accessToken === true) accessToken = SessionStore.getAccessToken();
      data.headers = data.headers || {};
      data.headers.Authorization = `Bearer ${accessToken}`;
    }
    return data;
  }
}

export default new Api();
