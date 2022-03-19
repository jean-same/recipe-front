import jwtDecode from "jwt-decode";
import storage from "@/plugins/storage";

const userService = {

    isAuthenticated: () => {
      
        if (storage.get('userData')) {
          const { exp: expiration } = jwtDecode(storage.get('userData').token);

          console.log(expiration * 1000 - new Date().getTime())

          if (expiration * 1000 > new Date().getTime()) {
            return true;
          } else {
            return false;
          }
        }
      
        return false;
    },

    checkToken: () => {
      
        if (storage.get('userData')) {
            const { exp: expiration } = jwtDecode(storage.get('userData').token);
          if (expiration * 1000 > new Date().getTime()) {
            console.log("ok")
          }
        }
      },

}

export default userService;