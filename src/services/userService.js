import axios from "axios";
import jwtDecode from "jwt-decode";
import storage from "@/plugins/storage";

const userService = {

    userData: storage.get('userData'),

    setHeaders: (token) => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
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