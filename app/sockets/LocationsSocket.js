import Socket from '../lib/Socket';
import LocationsActions from '../actions/LocationsActions';

class LocationsSocket {
  constructor() {
    this.io = Socket.create('/locations');
    this.io.on('initialize', this.onInitialize);
  }

  connect() {
    this.io.open();
  }

  disconnect() {
    this.io.close();
  }

  onInitialize(locations) {
    LocationsActions.getLocationsSuccess(locations);
  }
}

export default new LocationsSocket();
