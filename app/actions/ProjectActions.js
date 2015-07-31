import Alt from '../lib/Alt';
import Api from '../lib/Api';

class ProjectActions {
  getProject(id) {
    this.dispatch();
    Api.get(`/projects/${id}`, {accessToken: true}).then(this.actions.getProjectSuccess).catch(this.actions.getProjectError);
  }

  getProjectSuccess(res) {
    this.dispatch(res.data);
  }

  getProjectError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(ProjectActions);
