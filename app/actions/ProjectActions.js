import Alt from '../lib/Alt';
import RestApi from '../lib/RestApi';

class ProjectActions {
  getProject(id) {
    this.dispatch();
    RestApi.get(`/projects/${id}`, {accessToken: true}).then(this.actions.setProject).catch(this.actions.setError);
  }

  setProject(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectActions);
