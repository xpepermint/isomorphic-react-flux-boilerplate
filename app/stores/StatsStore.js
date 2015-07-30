import Alt from '../lib/Alt';
import StatsSource from '../sources/StatsSource';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.registerAsync(StatsSource);
    this.bindActions(StatsActions);
    this.state = {};
  }

  onGetStats(id) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getStats(id);
  }

  onGetStatsSuccess(data) {
    this.setState(data);
  }

  onGetStatsError(error) {
    this.setState(error);
  }
}

export default Alt.createStore(StatsStore, 'StatsStore');
