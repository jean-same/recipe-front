import axios from "axios";

const typeService = {

    baseUri: 'http://localhost:8000/api/v1',

    async loadTypes() {
        const response = await axios.get(typeService.baseUri + '/type' )
        console.log(response.data.result);

        return response.data;
    }

}

export default typeService;