import axios from 'axios';
import LocationActions from '../actions/LocationActions';

const LocationSource = {
  fetchLocations: {
    remote(state) {
      return axios.get('/locations.json').then((res) => {
        return res.data;
      });
    },
    success: LocationActions.fetchSuccess,
    error: LocationActions.fetchError,
  }
};

export default LocationSource;
