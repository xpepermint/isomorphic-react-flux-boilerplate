import Alt from '../lib/Alt';
import LocationSource from '../sources/LocationSource';
import LocationActions from '../actions/LocationActions';

class LocationStore {
  constructor() {
    this.registerAsync(LocationSource);
    this.bindActions(LocationActions);
    this.state = {data: []};
  }

  onGetLocation(id) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getLocation(id);
  }

  onGetLocationSuccess(data) {
    this.setState({data});
  }

  onGetLocationError(error) {
    this.setState({data});
  }
}

export default Alt.createStore(LocationStore, 'LocationStore');
