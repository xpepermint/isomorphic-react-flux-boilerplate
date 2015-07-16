import Api from '../lib/Api';
import LocationActions from '../actions/LocationActions';

const LocationSource = {
  fetchLocations: {
    remote(state) {
      return Api.get('/locations').then((res) => {
        return res.data;
      });
    },
    success: LocationActions.fetchSuccess,
    error: LocationActions.fetchError,
  }
};

export default LocationSource;
