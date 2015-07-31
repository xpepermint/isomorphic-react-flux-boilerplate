import React from 'react';
import {Link} from 'react-router';
import ProjectsActions from '../actions/ProjectsActions';
import ProjectsStore from '../stores/ProjectsStore';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = ProjectsStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    ProjectsStore.listen(this.storeListener);
    ProjectsActions.getProjects();
  }

  componentWillUnmount() {
    ProjectsStore.unlisten(this.storeListener);
  }

  onChange() {
    this.setState(ProjectsStore.getState());
  }

  render() {
    return (
      <ul>
        {this.state.projects.map((project) => {
          return (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Projects;
