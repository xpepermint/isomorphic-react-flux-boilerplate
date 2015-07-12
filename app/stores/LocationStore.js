import alt from '../alt';
import LocationSource from '../sources/LocationSource';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.locations = [];

    this.registerAsync(LocationSource);

    this.bindListeners({
      onFetch: LocationActions.fetch,
      onFetchSuccess: LocationActions.fetchSuccess
    });
  }

  onFetch() {
    if (!this.getInstance().isLoading()) {
      this.getInstance().fetchLocations();
    }
  }

  onFetchSuccess(locations) {
    this.locations = locations;
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
