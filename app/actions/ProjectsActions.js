import Alt from '../lib/Alt';
import Api from '../lib/Api';

class ProjectsActions {
  getProjects() {
    this.dispatch();
    Api.get(`/projects`, {accessToken: true}).then(this.actions.setProjects).catch(this.actions.setError);
  }

  setProjects(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectsActions);
