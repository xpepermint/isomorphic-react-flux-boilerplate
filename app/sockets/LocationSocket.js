import Socket from '../lib/Socket';
import LocationActions from '../actions/LocationActions';

class LocationSocket {
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
    LocationActions.fetchLocationsSuccess(locations);
  }
}

export default new LocationSocket();
