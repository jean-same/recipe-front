import axios from "axios";

const typeService = {

    async loadTypes() {
        return await axios.get('/type' )
                .then(response => {
                    return response.data.result;
                })
                .catch(err => {
                    return err
                })
    }

}

export default typeService;