import Alt from '../lib/Alt';
import ProjectsSource from '../sources/ProjectsSource';
import ProjectsActions from '../actions/ProjectsActions';

class ProjectsStore {
  constructor() {
    this.registerAsync(ProjectsSource);
    this.bindActions(ProjectsActions);
    this.state = {projects: []};
  }

  onGetProjects() {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getProjects();
  }

  onGetProjectsSuccess(projects) {
    this.setState({projects});
  }

  onGetProjectsError(error) {
    this.setState(error);
  }
}

export default Alt.createStore(ProjectsStore, 'ProjectsStore');
