import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVICE
});

instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('tokenUser')}`;
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    // localStorage.removeItem('userData');
    // localStorage.removeItem('tokenUser');
    // window.location = '/';
  }

  return Promise.reject(error);
});

export default instance;