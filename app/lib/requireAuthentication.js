import Cookie from 'react-cookie';

export default function(nextState, transition) {
  if (!Cookie.load('accessToken')) transition.to('/login');
}
