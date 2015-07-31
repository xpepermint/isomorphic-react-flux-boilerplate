import Alt from '../lib/Alt';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.state = {project: {}};
    this.bindListeners({
      onSetProject: ProjectActions.setProject,
      onSetError: ProjectActions.setError,
    });
  }

  onSetProject(project) {
    this.setState({project});
  }

  onSetError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(ProjectStore, 'ProjectStore');
