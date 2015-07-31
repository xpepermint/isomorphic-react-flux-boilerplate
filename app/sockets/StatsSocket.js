import Socket from '../lib/Socket';
import StatsActions from '../actions/StatsActions';

class StatsSocket {
  constructor() {
    this.io = Socket.create('/stats');
    this.io.on('initialize', this.onInitialize);
  }

  connect() {
    this.io.open();
  }

  disconnect() {
    this.io.close();
  }

  onInitialize(stats) {
    StatsActions.setStats(stats);
  }
}

export default new StatsSocket();
