import Alt from '../lib/Alt';
import RestApi from '../lib/RestApi';

class StatsActions {
  getStats() {
    this.dispatch();
    RestApi.get(`/stats`).then(this.actions.setStats).catch(this.actions.setError);
  }

  setStats(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(StatsActions);
