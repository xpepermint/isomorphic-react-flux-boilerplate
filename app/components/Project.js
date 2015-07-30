import React from 'react';
import {Link} from 'react-router';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';

class Project extends React.Component {
  constructor() {
    super();
    this.state = ProjectStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    ProjectStore.listen(this.storeListener);
    ProjectActions.getProject(this.props.params.projectId);
  }

  componentWillUnmount() {
    ProjectStore.unlisten(this.storeListener);
  }

  onChange() {
    this.setState(ProjectStore.getState());
  }

  render() {
    return (
      <div>
        <Link to={`/projects`}>Back</Link>
        <div>ID: {this.state.project.id}</div>
        <div>Name: {this.state.project.name}</div>
      </div>
    );
  }
}

export default Project;
