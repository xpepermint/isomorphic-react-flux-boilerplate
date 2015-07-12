import React from 'react';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';

class Locations extends React.Component {
  constructor() {
    super();
    this.state = LocationStore.getState();
    this.storeListener = this.onStoreChange.bind(this);
  }

  componentDidMount() {
    LocationStore.listen(this.storeListener);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.storeListener);
  }

  onStoreChange(state) {
    this.setState(state);
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
