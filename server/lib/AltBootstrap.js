import axios from 'axios';
import config from '../../config';
import RestApi from '../../app/lib/RestApi';

const components = {
  Stats: {store: 'StatsStore', path: `/stats`, key: 'stats'}
};

class AltBootstrap {
  run(state, req) {
    let list = state.components.map(c => {return components[c.name]}).filter(c => {return !!c});
    let requests = list.map(c => {return RestApi.get(c.path, c.options)});
    let stores = {}

    return axios.all(requests).then(arr => {
      arr.forEach((d, i) => {
        stores[list[i].store] = {};
        stores[list[i].store][list[i].key] = d.data;
      });
      return JSON.stringify(stores);
    });
  }
}

export default new AltBootstrap();
