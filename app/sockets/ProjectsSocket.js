import Socket from '../lib/Socket';
import ProjectsActions from '../actions/ProjectsActions';

class ProjectsSocket {
  constructor() {
    this.io = Socket.create('/projects');
    this.io.on('initialize', this.onInitialize);
  }

  connect() {
    this.io.open();
  }

  disconnect() {
    this.io.close();
  }

  onInitialize(projects) {
    ProjectsActions.getProjectsSuccess(projects);
  }
}

export default new ProjectsSocket();
