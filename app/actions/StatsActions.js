import Alt from '../lib/Alt';
import Api from '../lib/Api';

class StatsActions {
  getStats() {
    this.dispatch();
    Api.get(`/stats`).then(this.actions.setStats).catch(this.actions.setError);
  }

  setStats(res) {
    this.dispatch(res.data);
  }

  setError(res) {
    this.dispatch(res.data.error);
  }
}

export default Alt.createActions(StatsActions);
