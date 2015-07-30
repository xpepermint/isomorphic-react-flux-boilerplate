import React from 'react';
import StatsActions from '../actions/StatsActions';
import StatsStore from '../stores/StatsStore';
import StatsSocket from '../sockets/StatsSocket';

class Stats extends React.Component {
  constructor() {
    super();
    this.state = StatsStore.getState();
    this.storeListener = this.onChange.bind(this);
  }

  componentDidMount() {
    StatsStore.listen(this.storeListener);
    StatsActions.getStats();
    StatsSocket.connect();
  }

  componentWillUnmount() {
    StatsSocket.disconnect();
    StatsStore.unlisten(this.storeListener);
  }

  onChange() {
    this.setState(StatsStore.getState());
  }

  render() {
    return (
      <div>
        <div>Environment: {this.state.stats.env}</div>
        <div>Platform: {this.state.stats.platform}</div>
        <div>Uptime: {this.state.stats.uptime}</div>
      </div>
    );
  }
}

export default Stats;
