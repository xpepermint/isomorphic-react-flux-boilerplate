import React from 'react';
import {Link} from 'react-router';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';

class Location extends React.Component {
  constructor() {
    super();
    this.state = LocationStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.storeListener);
    LocationActions.getLocation(this.props.params.locationId);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.storeListener);
  }

  onChange() {
    this.setState(LocationStore.getState());
  }

  render() {
    return (
      <div>
        <Link to={`/locations`}>Back</Link>
        <div>ID: {this.state.data.id}</div>
        <div>Name: {this.state.data.name}</div>
      </div>
    );
  }
}

export default Location;
