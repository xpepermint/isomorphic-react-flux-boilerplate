import Alt from '../lib/Alt';
import ProjectsActions from '../actions/ProjectsActions';

class ProjectsStore {
  constructor() {
    this.state = {projects: []};
    this.bindListeners({
      onGetProjectsSuccess: ProjectsActions.getProjectsSuccess,
      onGetProjectsError: ProjectsActions.getProjectsError,
    });
  }

  onGetProjectsSuccess(projects) {
    this.setState({projects});
  }

  onGetProjectsError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(ProjectsStore, 'ProjectsStore');
