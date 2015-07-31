import io from 'socket.io-client';
import config from '../../config';

class SocketApi {
  createRoom(path) {
    return io.connect(`${config.socketBaseUrl}${path}`, {autoConnect: false});
  }

  connect() {
    this.room.open();
  }

  disconnect() {
    this.room.close();
  }
}

export default SocketApi;
