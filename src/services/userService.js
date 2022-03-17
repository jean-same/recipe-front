import axios from "axios";
import storage from "@/plugins/storage";

const userService = {

    baseUri: 'http://localhost:8000/api/login_check',

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

    logout: function(){
        storage.unset('userData');
    }

}

export default userService;