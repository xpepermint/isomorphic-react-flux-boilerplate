import axios from 'axios';
import config from '../../config';
import ProjectsActions from '../actions/ProjectsActions';
import SessionStore from '../stores/SessionStore';

const ProjectsSource = {
  getProjects: {
    remote(state) {
      let accessToken = SessionStore.getAccessToken();
      let options = {headers: {'Authorization': `Bearer ${accessToken}`}};
      return axios.get(`${config.apiBaseUrl}/projects`, options).then(res => {return res.data});
    },
    success: ProjectsActions.getProjectsSuccess,
    error: ProjectsActions.getProjectsError
  }
};

export default ProjectsSource;
