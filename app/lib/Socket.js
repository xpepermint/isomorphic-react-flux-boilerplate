import Socket from 'socket.io-client';
import config from '../../config';

Socket.create = (path) => {
  return Socket.connect(`${config.socketBaseUrl}${path}`, {autoConnect: false, query: {accessToken: 'fake token'}});
};

export default Socket;
