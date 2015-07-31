import Alt from '../lib/Alt';
import StatsActions from '../actions/StatsActions';

class StatsStore {
  constructor() {
    this.state = {stats: {}};
    this.bindListeners({
      onSetStats: StatsActions.setStats,
      onSetError: StatsActions.setError,
    });
  }

  onSetStats(stats) {
    this.setState({stats});
  }

  onSetError(error) {
    this.setState({error});
  }
}

export default Alt.createStore(StatsStore, 'StatsStore');
