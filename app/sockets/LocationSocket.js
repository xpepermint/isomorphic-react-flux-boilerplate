import io from 'socket.io-client';
import LocationActions from '../actions/LocationActions';

class LocationSocket {
  constructor() {
    this.io = io.connect('http://localhost:5555/locations', {autoConnect: false});
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
