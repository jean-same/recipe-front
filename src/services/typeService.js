import axios from "axios";

const typeService = {

    async loadTypes() {
        const response = await axios.get('/type' )

        return response.data.result;
    }

}

export default typeService;