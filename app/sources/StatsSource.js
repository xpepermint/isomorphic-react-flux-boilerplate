import axios from 'axios';
import config from '../../config';
import StatsActions from '../actions/StatsActions';

const StatsSource = {
  getStats: {
    remote(state, id) {
      return axios.get(`${config.apiBaseUrl}/stats`).then(res => {return res.data});
    },
    success: StatsActions.getStatsSuccess,
    error: StatsActions.getStatsError
  }
};

export default StatsSource;
