import axios from 'axios';
import config from '../../config';
import Locations from '../components/Locations';

export default function(state, options) {
  let accessToken = options.accessToken;

  let requests = [];
  if (state.components.includes(Locations)) requests.push({store: 'LocationsStore', url: `${config.apiBaseUrl}/locations`});

  return axios.all(
    requests.map(r => {return axios.get(r.url, {headers: {'Authorization': `Bearer ${accessToken}`}})})
  ).then(data => {
    let stores = {}
    data.forEach((d, i) => {stores[requests[i].store] = d})
    return JSON.stringify(stores);
  });
};
