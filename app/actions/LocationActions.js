import alt from '../alt';

class LocationActions {
  fetch() {
    this.dispatch();
  }

  fetchSuccess(locations) {
    this.dispatch(locations);
  }

  fetchError(err) {
    console.log('Error:', err);
  }
}

export default alt.createActions(LocationActions);
