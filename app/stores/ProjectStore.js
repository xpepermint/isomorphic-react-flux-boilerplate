import Alt from '../lib/Alt';
import ProjectSource from '../sources/ProjectSource';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.registerAsync(ProjectSource);
    this.bindActions(ProjectActions);
    this.state = {project: {}};
  }

  onGetProject(id) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getProject(id);
  }

  onGetProjectSuccess(project) {
    this.setState({project});
  }

  onGetProjectError(error) {
    this.setState(error);
  }
}

export default Alt.createStore(ProjectStore, 'ProjectStore');
