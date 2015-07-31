import Alt from '../lib/Alt';
import Api from '../lib/Api';

class ProjectsActions {
  getProjects() {
    this.dispatch();
    Api.get(`/projects`, {accessToken: true}).then(this.actions.getProjectsSuccess).catch(this.actions.getProjectsError);
  }

  getProjectsSuccess(res) {
    this.dispatch(res.data);
  }

  getProjectsError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectsActions);
