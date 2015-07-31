import React from 'react';
import SessionActions from '../actions/SessionActions';

class Logout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    SessionActions.logout();
    setImmediate(() => {this.context.router.transitionTo('/')});
  }

  render() {
    return null;
  }
}

export default Logout;
