import Api from './lib/Api';

export default function(req) {
  if (req) {
    return Promise.resolve({}).then((stores) => {
      return loadLocations(stores);
    }).then((stores) => {
      return JSON.stringify(stores);
    });
  } else {
    return Promise.resolve(__STORES__);
  }
};

function loadLocations(stores) {
  return Api.get('/locations').then((res) => {
    stores.LocationStore = { locations: res.data };
    return stores;
  }).catch(console.log);
}
