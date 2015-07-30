import Alt from '../lib/Alt';
import ProjectSource from '../sources/ProjectSource';
import ProjectActions from '../actions/ProjectActions';

class ProjectStore {
  constructor() {
    this.registerAsync(ProjectSource);
    this.bindActions(ProjectActions);
    this.state = {};
  }

  onGetProject(id) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getProject(id);
  }

  onGetProjectSuccess(data) {
    this.setState({data});
  }

  onGetProjectError(error) {
    this.setState({data});
  }
}

export default Alt.createStore(ProjectStore, 'ProjectStore');
