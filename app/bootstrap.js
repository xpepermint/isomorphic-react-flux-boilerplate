import axios from 'axios';

export default function(req) {
  let apiUrl = req ? `${req.protocol}://${req.get('host')}` : '';
  let stores = {};

  return Promise.resolve().then(() => {
    return loadLocations(apiUrl);
  }).then((locations) => {
    stores.LocationStore = { locations };
  }).then(() => {
    return JSON.stringify(stores);
  });
};

function loadLocations(apiUrl) {
  return axios.get(`${apiUrl}/locations.json`).then((res) => {
    return res.data;
  });
}
