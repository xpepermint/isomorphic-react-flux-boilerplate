import cookie from 'react-cookie';
import axios from 'axios';
import config from '../../config';
import LocationsActions from '../actions/LocationsActions';

let accessToken = cookie.load('accessToken');
let options = {headers: {'Authorization': `Bearer ${accessToken}`}};

const LocationsSource = {
  getLocations: {
    remote(state) {
      return axios.get(`${config.apiBaseUrl}/locations`, options).then(res => {return res.data});
    },
    success: LocationsActions.getLocationsSuccess,
    error: LocationsActions.getLocationsError
  }
};

export default LocationsSource;
