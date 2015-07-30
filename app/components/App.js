import React from 'react';
import {Link} from 'react-router';
import SessionActions from '../actions/SessionActions';
import SessionStore from '../stores/SessionStore';

class App extends React.Component {
  constructor() {
    super();
    this.state = SessionStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    SessionStore.listen(this.storeListener);
  }

  componentWillUnmount() {
    SessionStore.unlisten(this.storeListener);
  }

  onChange() {
    this.setState(SessionStore.getState());
  }

  render() {
    return (
      <div>
        <div>Authenticated: {SessionStore.isAuthenticated().toString()}</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link> | <Link to="/logout">Logout</Link></li>
          <li><Link to="/locations">Locations</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
