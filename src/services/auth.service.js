import axios from 'axios';
const API_URL = 'http://localhost:8000/api/login_check';
class AuthService {
  login(user) {
    return axios
      .post(API_URL, {
        username: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          window.localStorage.setItem('userData', JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  logout() {
    localStorage.removeItem('userData');
  }
}
export default new AuthService();
