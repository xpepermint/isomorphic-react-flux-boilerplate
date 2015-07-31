import Alt from '../lib/Alt';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.state = {stats: {}};
    this.bindListeners({
      onGetStatsSuccess: StatsActions.getStatsSuccess,
      onGetStatsError: StatsActions.getStatsError,
    });
  }

  onGetStatsSuccess(stats) {
    this.setState({stats});
  }

  onGetStatsError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(StatsStore, 'StatsStore');
