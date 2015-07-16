import React from 'react';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';
import LocationSocket from '../sockets/LocationSocket';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = LocationStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.storeListener);
    LocationSocket.connect();
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.storeListener);
    LocationSocket.disconnect();
  }

  onChange() {
    this.setState(LocationStore.getState());
  }

  render() {
    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li key={location.id}>
              <b>{location.name}</b>
              <span>, {location.updatedAt}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Locations;
