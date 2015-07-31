import React from 'react';
import SessionActions from '../actions/SessionActions';
import cookie from 'react-cookie';

class Logout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    cookie.remove('loginReferrer');
    SessionActions.logout();
    setImmediate(() => {this.context.router.transitionTo('/')});
  }

  render() {
    return null;
  }
}

export default Logout;
