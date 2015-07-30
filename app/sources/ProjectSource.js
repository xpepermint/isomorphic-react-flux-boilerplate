import axios from 'axios';
import config from '../../config';
import ProjectActions from '../actions/ProjectActions';
import SessionStore from '../stores/SessionStore';

const ProjectSource = {
  getProject: {
    remote(state, id) {
      let accessToken = SessionStore.getAccessToken();
      let options = {headers: {'Authorization': `Bearer ${accessToken}`}};
      return axios.get(`${config.apiBaseUrl}/projects/${id}`, options).then(res => {return res.data});
    },
    success: ProjectActions.getProjectSuccess,
    error: ProjectActions.getProjectError
  }
};

export default ProjectSource;
