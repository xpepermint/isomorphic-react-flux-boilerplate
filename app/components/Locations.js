import React from 'react';
import {Link} from 'react-router';
import LocationsActions from '../actions/LocationsActions';
import LocationsStore from '../stores/LocationsStore';
import LocationsSocket from '../sockets/LocationsSocket';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = LocationsStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    LocationsStore.listen(this.storeListener);
    LocationsSocket.connect();
    LocationsActions.getLocations();
  }

  componentWillUnmount() {
    LocationsStore.unlisten(this.storeListener);
    LocationsSocket.disconnect();
  }

  onChange() {
    this.setState(LocationsStore.getState());
  }

  render() {
    return (
      <ul>
        {this.state.data.map((location) => {
          return (
            <li key={location.id}>
              <Link to={`/locations/${location.id}`}>{location.name}</Link>
              <span>, {location.updatedAt}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Locations;
