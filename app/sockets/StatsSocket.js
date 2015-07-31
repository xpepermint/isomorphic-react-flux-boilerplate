import SocketApi from '../lib/SocketApi';
import StatsActions from '../actions/StatsActions';

class StatsSocket extends SocketApi {
  constructor() {
    super();
    this.room = this.createRoom('/stats');
    this.room.on('initialize', this.onInitialize);
  }

  onInitialize(stats) {
    StatsActions.setStats(stats);
  }
}

export default new StatsSocket();
