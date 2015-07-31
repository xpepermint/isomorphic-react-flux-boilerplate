import React from 'react';
import serialize from 'form-serialize';
import SessionActions from '../actions/SessionActions';
import SessionStore from '../stores/SessionStore';

class Login extends React.Component {
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

    if (SessionStore.isAuthenticated()) {
      setImmediate(() => {this.context.router.transitionTo('/projects')});
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let data = serialize(e.target, {hash: true});
    SessionActions.login(data);
  }

  render() {
    return (
      <form ref='form' onSubmit={this.onSubmit}>
        {this.state.error ? (<div>Invalid credentials!</div>) : null}
        <input name='username' type='text' placeholder='Username' />
        <input name='password' type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Login;
