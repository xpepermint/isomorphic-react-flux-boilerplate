import connectToStores from 'alt/utils/connectToStores';
import React from 'react';
import LocationActions from '../actions/LocationActions';
import LocationStore from '../stores/LocationStore';

class Locations extends React.Component {
  static getStores() {
    return [LocationStore];
  }

  static getPropsFromStores() {
    return LocationStore.getState();
  }

  render() {
    return (
      <ul>
        {this.props.locations.map((location) => {
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

export default connectToStores(Locations);
