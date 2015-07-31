import Alt from '../lib/Alt';
import ProjectsActions from '../actions/ProjectsActions';

class ProjectsStore {
  constructor() {
    this.state = {projects: []};
    this.bindListeners({
      onSetProjects: ProjectsActions.setProjects,
      onSetError: ProjectsActions.setError,
    });
  }

  onSetProjects(projects) {
    this.setState({projects});
  }

  onSetError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(ProjectsStore, 'ProjectsStore');
