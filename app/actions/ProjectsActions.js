import Alt from '../lib/Alt';
import RestApi from '../lib/RestApi';

class ProjectsActions {
  getProjects() {
    this.dispatch();
    RestApi.get(`/projects`, {accessToken: true}).then(this.actions.setProjects).catch(this.actions.setError);
  }

  setProjects(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectsActions);
