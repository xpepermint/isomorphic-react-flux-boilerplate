import Alt from '../lib/Alt';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.state = {project: {}};
    this.bindListeners({
      onGetProjectSuccess: ProjectActions.getProjectSuccess,
      onGetProjectError: ProjectActions.getProjectError,
    });
  }

  onGetProjectSuccess(project) {
    this.setState({project});
  }

  onGetProjectError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(ProjectStore, 'ProjectStore');
