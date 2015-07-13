import axios from 'axios';

export default function(baseUrl) {
  if (baseUrl) {
    return Promise.resolve({}).then((stores) => {
      return loadLocations(baseUrl, stores);
    }).then((stores) => {
      return JSON.stringify(stores);
    });
  } else {
    return Promise.resolve(__STORES__);
  }
};

function loadLocations(baseUrl, stores) {
  return axios.get(`${baseUrl}/locations.json`).then((res) => {
    stores.LocationStore = { locations: res.data };
    return stores;
  });
}
