import axios from "axios";
import storage from '../plugins/storage'

class axiosDefault {

    setDefault(){
        let userData = storage.get('userData')

        axios.defaults.baseURL = 'http://localhost:8000/api/v1'

        if(userData) {
            axios.defaults.headers.common['Authorization'] = "Bearer " + userData.token;
        }
    }

    setHeader(token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    }

    deleteHeader() {
        axios.defaults.headers.common['Authorization'] = ""
    }
    
}

export default new axiosDefault();

