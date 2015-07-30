import cookie from 'react-cookie';
import axios from 'axios';
import config from '../../config';
import LocationActions from '../actions/LocationActions';

let accessToken = cookie.load('accessToken');
let options = {headers: {'Authorization': `Bearer ${accessToken}`}};

const LocationSource = {
  getLocation: {
    remote(state, id) {
      return axios.get(`${config.apiBaseUrl}/locations/${id}`, options).then(res => {return res.data});
    },
    success: LocationActions.getLocationSuccess,
    error: LocationActions.getLocationError
  }
};

export default LocationSource;
