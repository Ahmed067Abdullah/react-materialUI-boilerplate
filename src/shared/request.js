import axios from 'axios';
// import moment from 'moment-timezone';

// const myTimeZone = moment.tz.guess();

const API_ENDPOINT = 'https://api-test.dreamersofday-platform.com/api/';

const fetchToken = () => {
  let token = 'token'; // Fetch from localstorage
  return token;
};

export const request = (url, type, headers, data, params) => {
  let token = '';
  if (headers) {
    token = fetchToken();
  }
  const request = {
    'headers': {
      // 'x-time-zone': myTimeZone
    },
    'method': type,
    'url': API_ENDPOINT + url
  };
  if (type !== 'get') {
    request.data = data;
  }
  if (headers) {
    request.headers = {
      ...request.headers,
      'x-access-token': token
    };
  }
  if (params) {
    request.params = params;
  }
  return axios(request)
};
