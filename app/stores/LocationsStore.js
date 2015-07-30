import Alt from '../lib/Alt';
import LocationsSource from '../sources/LocationsSource';
import LocationsActions from '../actions/LocationsActions';

class LocationsStore {
  constructor() {
    this.registerAsync(LocationsSource);
    this.bindActions(LocationsActions);
    this.state = {data: []};
  }

  onGetLocations() {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getLocations();
  }

  onGetLocationsSuccess(data) {
    this.setState({data});
  }

  onGetLocationsError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(LocationsStore, 'LocationsStore');
