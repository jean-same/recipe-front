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
            storage.unset('userData')
            return false;
          }
        }
      
        return false;
    },

    checkUserRole: () => {
      
        if (storage.get('userData')) {
            const { exp: expiration, roles } = jwtDecode(storage.get('userData').token);
          if (expiration * 1000 > new Date().getTime()) {

            if(roles.includes('ROLE_CONTRIBUTOR') || roles.includes('ROLE_CHIEF') || roles.includes('ROLE_ADMIN')) {
              return true
            }

          } 
          
        }

        return false
      },

}

export default userService;