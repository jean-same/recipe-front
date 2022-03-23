import axios from "axios";

const difficultyService = {

    async loadDifficulties() {
        const response = await axios.get('/difficulty' )

        return response.data.result;
    }

}

export default difficultyService;