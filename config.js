export default {
  appSecret: process.env.APP_SECRET || 'secret',
  httpServerHost: process.env.HTTP_SERVER_HOST || '127.0.0.1',
  httpServerPort: process.env.HTTP_SERVER_PORT || 4444,
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3333',
  assetsBaseUrl: process.env.ASSETS_BASE_URL || 'http://localhost:4445',
  socketBaseUrl: process.env.SOCKET_BASE_URL || 'http://localhost:5555'
};
