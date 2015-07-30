import axios from 'axios';
import config from '../../config';
import LocationActions from '../actions/LocationActions';
import SessionStore from '../stores/SessionStore';

const LocationSource = {
  getLocation: {
    remote(state, id) {
      let accessToken = SessionStore.getAccessToken();
      let options = {headers: {'Authorization': `Bearer ${accessToken}`}};
      return axios.get(`${config.apiBaseUrl}/locations/${id}`, options).then(res => {return res.data});
    },
    success: LocationActions.getLocationSuccess,
    error: LocationActions.getLocationError
  }
};

export default LocationSource;
