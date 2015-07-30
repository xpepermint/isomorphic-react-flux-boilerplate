import React from 'react';
import {Link} from 'react-router';
import SessionStore from '../stores/SessionStore';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Authenticated: {SessionStore.isAuthenticated().toString()}</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/login">Login</Link> | <Link to="/logout">Logout</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
