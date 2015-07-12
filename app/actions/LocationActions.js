import axios from 'axios';
import alt from '../alt';

class LocationActions {
  fetchLocations() {
    this.dispatch(); // dispatch event so we can have "loading" state

    axios.get('/locations.json').then((res) => {
      this.actions.updateLocations(res.data);
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
