import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVICE
});

instance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('tokenUser')}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
);

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    localStorage.removeItem('userData');
    localStorage.removeItem('tokenUser');
    window.location = '/';
  }

  return Promise.reject(error);
});

export default instance;