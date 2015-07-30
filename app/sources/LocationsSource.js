import axios from 'axios';
import config from '../../config';
import LocationsActions from '../actions/LocationsActions';
import SessionStore from '../stores/SessionStore';

const LocationsSource = {
  getLocations: {
    remote(state) {
      let accessToken = SessionStore.getAccessToken();
      let options = {headers: {'Authorization': `Bearer ${accessToken}`}};
      return axios.get(`${config.apiBaseUrl}/locations`, options).then(res => {return res.data});
    },
    success: LocationsActions.getLocationsSuccess,
    error: LocationsActions.getLocationsError
  }
};

export default LocationsSource;
