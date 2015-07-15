import alt from '../alt';
import LocationSource from '../sources/LocationSource';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.registerAsync(LocationSource);
    this.bindActions(LocationActions);

    this.state = {
      locations: []
    };
  }

  onFetchLocations() {
    if (!this.getInstance().isLoading()) {
      this.getInstance().fetchLocations();
    }
  }

  onFetchLocationsSuccess(locations) {
    this.setState({locations});
  }

  onFetchLocationsError(err) {
    console.log('Error:', err);
  }
}

export default alt.createStore(LocationStore, 'LocationStore');
