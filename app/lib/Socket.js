import Socket from 'socket.io-client';

const baseUrl = 'http://localhost:5555';

Socket.create = (path) => {
  let config = {autoConnect: false, query: {accessToken: 'fake token'}};
  return Socket.connect(`${baseUrl}${path}`, config);
};

export default Socket;
