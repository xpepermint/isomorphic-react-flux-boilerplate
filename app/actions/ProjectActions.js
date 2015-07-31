import Alt from '../lib/Alt';
import Api from '../lib/Api';

class ProjectActions {
  getProject(id) {
    this.dispatch();
    Api.get(`/projects/${id}`, {accessToken: true}).then(this.actions.setProject).catch(this.actions.setError);
  }

  setProject(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectActions);
