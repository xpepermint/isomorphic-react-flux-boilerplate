import axios from 'axios';
import alt from '../lib/Alt';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

class ProjectActions {
  getProject(id) {
    this.dispatch();
    axios.get(`${config.apiBaseUrl}/projects/${id}`, this.actions.getRequestOptions()).then(this.actions.getProjectSuccess).catch(this.actions.getProjectError);
  }

  getProjectSuccess(res) {
    this.dispatch(res.data);
  }

  getProjectError(res) {
    this.dispatch(res.data.error);
  }

  getRequestOptions() {
    let accessToken = SessionStore.getAccessToken();
    return {headers: {'Authorization': `Bearer ${accessToken}`}};
  }
}

export default alt.createActions(ProjectActions);
