import fetch from 'isomorphic-fetch';
import alt from '../alt';

class LocationActions {
  fetchLocations() {
    this.dispatch(); // dispatch event so we can have "loading" state

    fetch('/locations.json').then((response) => {
      return response.json();
    }).then((locations) => {
      this.actions.updateLocations(locations);
    }).catch((error) => {
      this.actions.locationsFailed(error);
    });
  }

  updateLocations(locations) {
    this.dispatch(locations);
  }

  locationsFailed(error) {
    this.dispatch(error);
  }
}

export default alt.createActions(LocationActions);
