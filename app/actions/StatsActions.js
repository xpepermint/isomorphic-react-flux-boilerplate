import Alt from '../lib/Alt';
import Api from '../lib/Api';

class StatsActions {
  getStats() {
    this.dispatch();
    Api.get(`/stats`).then(this.actions.getStatsSuccess).catch(this.actions.getStatsError);
  }

  getStatsSuccess(res) {
    this.dispatch(res.data);
  }

  getStatsError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(StatsActions);
