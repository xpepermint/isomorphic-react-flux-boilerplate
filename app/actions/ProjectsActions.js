import axios from 'axios';
import alt from '../lib/Alt';
import config from '../../config';
import SessionStore from '../stores/SessionStore';

class ProjectsActions {
  getProjects() {
    this.dispatch();
    axios.get(`${config.apiBaseUrl}/projects`, this.actions.getRequestOptions()).then(this.actions.getProjectsSuccess).catch(this.actions.getProjectsError);
  }

  getProjectsSuccess(res) {
    this.dispatch(res.data);
  }

  getProjectsError(res) {
    this.dispatch(res.data.error);
  }

  getRequestOptions() {
    let accessToken = SessionStore.getAccessToken();
    return {headers: {'Authorization': `Bearer ${accessToken}`}};
  }
}

export default alt.createActions(ProjectsActions);
