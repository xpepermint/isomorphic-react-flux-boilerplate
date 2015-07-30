import Alt from '../lib/Alt';
import StatsSource from '../sources/StatsSource';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.registerAsync(StatsSource);
    this.bindActions(StatsActions);
    this.state = {stats: {}};
  }

  onGetStats(id) {
    if (this.getInstance().isLoading()) return;
    this.getInstance().getStats(id);
  }

  onGetStatsSuccess(stats) {
    this.setState({stats});
  }

  onGetStatsError(error) {
    this.setState(error);
  }
}

export default Alt.createStore(StatsStore, 'StatsStore');
