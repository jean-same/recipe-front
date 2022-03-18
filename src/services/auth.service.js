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
          console.log(response.data.token)
        if (response.data.token) {
            console.log(response.data)
          window.localStorage.setItem('userData', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('userData');
  }
}
export default new AuthService();
