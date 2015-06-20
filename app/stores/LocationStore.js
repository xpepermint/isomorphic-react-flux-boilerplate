import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.locations = [];
    this.error = null;

    this.bindListeners({
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
    this.error = null;
  }

  handleFetchLocations() {
    this.locations = []; // reset the array while we're fetching
  }

  handleLocationsFailed(error) {
    this.error = error;
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
