import React from 'react';
import {Link} from 'react-router';
import ProjectsActions from '../actions/ProjectsActions';
import ProjectsStore from '../stores/ProjectsStore';
// import ProjectsSocket from '../sockets/ProjectsSocket';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = ProjectsStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    ProjectsStore.listen(this.storeListener);
    // ProjectsSocket.connect();
    ProjectsActions.getProjects();
  }

  componentWillUnmount() {
    ProjectsStore.unlisten(this.storeListener);
    // ProjectsSocket.disconnect();
  }

  onChange() {
    this.setState(ProjectsStore.getState());
  }

  render() {
    return (
      <ul>
        {this.state.data.map((project) => {
          return (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
              <span>, {project.updatedAt}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Projects;
