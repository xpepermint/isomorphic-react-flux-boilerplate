import fetch from 'isomorphic-fetch';

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
  return fetch(`${apiUrl}/locations.json`).then((response) => {
    return response.json();
  });
}
