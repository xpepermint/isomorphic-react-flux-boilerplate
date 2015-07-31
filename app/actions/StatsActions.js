import axios from 'axios';
import alt from '../lib/Alt';
import config from '../../config';

class StatsActions {
  getStats() {
    this.dispatch();
    axios.get(`${config.apiBaseUrl}/stats`).then(this.actions.getStatsSuccess).catch(this.actions.getStatsError);
  }

  getStatsSuccess(res) {
    this.dispatch(res.data);
  }

  getStatsError(res) {
    this.dispatch(res.data.error);
  }
}

export default alt.createActions(StatsActions);
