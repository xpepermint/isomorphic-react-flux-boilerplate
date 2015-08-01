import axios from 'axios';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

class RestApi {
  get(path, options) {
    return axios.get(this.buildUrl(path), this.buildRequestOptions(options)).catch(this.onError);
  }

  post(path, data, options) {
    return axios.post(this.buildUrl(path), data, this.buildRequestOptions(options)).catch(this.onError);
  }

  put(path, data, options) {
    return axios.put(this.buildUrl(path), data, this.buildRequestOptions(options)).catch(this.onError);
  }

  delete(path, options) {
    return axios.delete(this.buildUrl(path), this.buildRequestOptions(options)).catch(this.onError);
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

  onError(res) {
    if (typeof location != 'undefined') {
      if (res.status === 401) return location.href = '/login';
    }
    throw res;
  }
}

export default new RestApi();
