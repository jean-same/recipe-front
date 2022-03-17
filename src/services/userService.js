import axios from "axios";
import jwtDecode from "jwt-decode";
import storage from "@/plugins/storage";

const userService = {

    baseUri: 'http://localhost:8000/api/login_check',

    userData: storage.get('userData'),

    async login(email , password) {

        const data = {
                "username" :  email,
                "password" : password
        }

        let response = await axios.post(
            userService.baseUri,
            data
            ).catch(
                function(){
                    return false;
                }
            );
        return response;
    },

    setHeaders: (token) => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
    },

    logout: () => {
        storage.unset('userData');
    },

    isAuthenticated: () => {
      
        if (userService.userData) {
          const { exp: expiration } = jwtDecode(userService.userData.token);
          console.log(expiration)
          if (expiration * 1000 > new Date().getTime()) {
            return true;
          } else {
            return false;
          }
        }
      
        return false;
    },

    checkToken: () => {
      
        if (userService.userData) {
            const { exp: expiration } = jwtDecode(userService.userData.token);
          if (expiration * 1000 > new Date().getTime()) {
            userService.setHeaders(userService.userData.token)
          }
        }
      },

}

export default userService;