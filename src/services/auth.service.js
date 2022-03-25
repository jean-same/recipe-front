import axios from 'axios';
import axiosDefaultService from './axiosDefaultService';

const API_URL = 'http://localhost:8000/api/login_check';
class AuthService {
  login(user) {
    return axios
      .post(API_URL, {
        username: user.email,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.token) {
          window.localStorage.setItem('userData', JSON.stringify(response.data));
          axiosDefaultService.setHeader(response.data.token)
        }
        return response.data;
      })
  }
  logout() {
    localStorage.removeItem('userData');
    axiosDefaultService.deleteHeader();
  }
}
export default new AuthService();
