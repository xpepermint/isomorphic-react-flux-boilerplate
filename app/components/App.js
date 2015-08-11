import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import SessionStore from '../stores/SessionStore';

class App extends React.Component {
  render() {
    let key = this.props.location.pathname;

    return (
      <div>
        <div>Authenticated: {SessionStore.isAuthenticated().toString()}</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/login">Login</Link> | <Link to="/logout">Logout</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>

        <ReactCSSTransitionGroup component="div" transitionName="fade">
          {React.cloneElement(this.props.children || <div />, { key: key })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
